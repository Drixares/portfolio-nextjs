export const PAGES = {
    HOME: "/",
    PROJECTS: "/projects",
    WRITINGS: "/writings",
    CONTACT: "/contact",
};

export const ROUTES = [
    {
        label: "Home",
        path: PAGES.HOME,
    },
    {
        label: "Projects",
        path: PAGES.PROJECTS,
    },
    // {
    //     label: "Writings",
    //     path: PAGES.WRITINGS,
    // },
    {
        label: "Contact",
        path: PAGES.CONTACT,
    },
];

export const NAVLINKS = [
    {
        label: "Github",
        path: "https://github.com/drixares",
    },
    {
        label: "Linkedin",
        path: "https://www.linkedin.com/in/matt%C3%A9o-marchelli-541b3b224/",
    },
    {
        label: "X",
        path: "https://x.com/drixares",
    },
    {
        label: "CV",
        path:
            process.env.NODE_ENV === "production"
                ? "https://matteo-marchelli.com/CV.pdf"
                : "http://localhost:3000/CV.pdf",
    },
];
