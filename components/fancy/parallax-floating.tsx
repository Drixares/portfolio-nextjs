"use client";

import {
    createContext,
    ReactNode,
    RefObject,
    useCallback,
    useContext,
    useEffect,
    useRef,
} from "react";
import { useAnimationFrame, useInView } from "motion/react";

import { useMousePositionRef } from "@/hooks/use-mouse-position-ref";
import * as stylex from "@stylexjs/stylex";

interface FloatingContextType {
    registerElement: (
        id: string,
        element: HTMLDivElement,
        depth: number
    ) => void;
    unregisterElement: (id: string) => void;
}

const FloatingContext = createContext<FloatingContextType | null>(null);

interface FloatingProps {
    children: ReactNode;
    style?: stylex.StyleXStyles;
    sensitivity?: number;
    easingFactor?: number;
}

const styles = stylex.create({
    container: {
        position: "absolute",
        inset: 0,
    },
    element: {
        position: "absolute",
        willChange: "transform",
    },
});

const Floating = ({
    children,
    style,
    sensitivity = 1,
    easingFactor = 0.05,
    ...props
}: FloatingProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef);
    const elementsMap = useRef(
        new Map<
            string,
            {
                element: HTMLDivElement;
                depth: number;
                currentPosition: { x: number; y: number };
            }
        >()
    );
    const mousePositionRef = useMousePositionRef(
        containerRef as RefObject<HTMLElement>
    );

    const registerElement = useCallback(
        (id: string, element: HTMLDivElement, depth: number) => {
            elementsMap.current.set(id, {
                element,
                depth,
                currentPosition: { x: 0, y: 0 },
            });
        },
        []
    );

    const unregisterElement = useCallback((id: string) => {
        elementsMap.current.delete(id);
    }, []);

    useAnimationFrame(() => {
        if (!containerRef.current) return;
        if (!isInView) return;

        elementsMap.current.forEach((data) => {
            const strength = (data.depth * sensitivity) / 20;

            // Calculate new target position
            const newTargetX = mousePositionRef.current.x * strength;
            const newTargetY = mousePositionRef.current.y * strength;

            // Check if we need to update
            const dx = newTargetX - data.currentPosition.x;
            const dy = newTargetY - data.currentPosition.y;

            // Update position only if we're still moving
            data.currentPosition.x += dx * easingFactor;
            data.currentPosition.y += dy * easingFactor;

            data.element.style.transform = `translate3d(${data.currentPosition.x}px, ${data.currentPosition.y}px, 0)`;
        });
    });

    return (
        <FloatingContext.Provider
            value={{ registerElement, unregisterElement }}
        >
            <div
                ref={containerRef}
                {...stylex.props(styles.container, style)}
                {...props}
            >
                {children}
            </div>
        </FloatingContext.Provider>
    );
};

export default Floating;

interface FloatingElementProps {
    children: ReactNode;
    style?: stylex.StyleXStyles;
    depth?: number;
}

export const FloatingElement = ({
    children,
    style,
    depth = 1,
}: FloatingElementProps) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const idRef = useRef(Math.random().toString(36).substring(7));
    const context = useContext(FloatingContext);

    useEffect(() => {
        if (!elementRef.current || !context) return;

        const idNotNull = idRef.current;
        const nonNullDepth = depth ?? 0.01;

        context.registerElement(
            idRef.current,
            elementRef.current,
            nonNullDepth
        );
        return () => context.unregisterElement(idNotNull);
    }, [depth, context]);

    return (
        <div ref={elementRef} {...stylex.props(styles.element, style)}>
            {children}
        </div>
    );
};
