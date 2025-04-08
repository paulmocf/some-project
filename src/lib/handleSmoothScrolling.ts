import React from "react";

export default function handleSmoothScrolling() {
    return (event: React.SyntheticEvent) => {
        console.log(event.target)
        event.preventDefault();
        const target = event.target as HTMLAnchorElement;
        const id = target.getAttribute('href')?.replace('#', '');
        const element = document.getElementById(String(id));
        const navbar = document.getElementById('aaa'); // Ia înălțimea navbarului

        if (element) {
            const navbarHeight = navbar?.offsetHeight ?? 0; // Obține înălțimea navbarului (fallback la 0)
            const targetPosition = element.offsetTop - navbarHeight; // Ajustează poziția de scroll
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }

    };
}