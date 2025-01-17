// Generated from https://coolshap.es by realvjy

export const Wheel5 = ({ className }: { className?: string }) => (
    <svg
        className={className}
        fill="none"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
    >
        <g clipPath="url(#cs_clip_1_wheel-5)">
            <mask
                height="200"
                id="cs_mask_1_wheel-5"
                style={{ maskType: "alpha" }}
                width="200"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <path
                    d="M108 0H92v80.686L34.946 23.632 23.632 34.946 80.686 92H0v16h80.686l-57.054 57.054 11.314 11.314L92 119.314V200h16v-80.686l57.053 57.053 11.314-11.313L119.313 108H200V92h-80.686l57.053-57.054-11.313-11.313L108 80.686V0z"
                    fill="#fff"
                />
            </mask>
            <g mask="url(#cs_mask_1_wheel-5)">
                <path d="M200 0H0v200h200V0z" fill="#fff" />
                <path
                    d="M200 0H0v200h200V0z"
                    fill="url(#paint0_linear_748_4824)"
                    fillOpacity="0.75"
                />
            </g>
        </g>
        <g style={{ mixBlendMode: "overlay" }} mask="url(#cs_mask_1_wheel-5)">
            <path
                d="M200 0H0v200h200V0z"
                fill="gray"
                stroke="transparent"
                filter="url(#cs_noise_1_wheel-5)"
            />
        </g>
        <defs>
            <linearGradient
                id="paint0_linear_748_4824"
                gradientUnits="userSpaceOnUse"
                x1="200"
                x2="0"
                y1="0"
                y2="200"
            >
                <stop stopColor="#FF1F00" />
                <stop offset="1" stopColor="#FFD600" />
            </linearGradient>
            <clipPath id="cs_clip_1_wheel-5">
                <path d="M0 0H200V200H0z" fill="#fff" />
            </clipPath>
        </defs>
        <defs>
            <filter
                height="100%"
                id="cs_noise_1_wheel-5"
                width="100%"
                x="0%"
                y="0%"
                filterUnits="objectBoundingBox"
            >
                <feBlend result="out3" in="SourceGraphic" in2="out2" />
            </filter>
        </defs>
    </svg>
);
