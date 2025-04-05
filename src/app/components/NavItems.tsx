import React from "react";

const navItems = [
    {name: "Home", href: "#home"},
    {name: "Services", href: "#services"},
    {name: "About", href: "#about"},
    {name: "Case Studies", href: "#case-studies"},
    {name: "Contact", href: "#contact"},
]

function getOnClick() {
    return (event: React.SyntheticEvent) => {
        event.preventDefault();
        // setIsOpen(false)
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

export default function NavItems(){
    return(
        <>
            {navItems.map((item) => (
                <a key={item.name} href={item.href}
                   className="text-sm font-medium transition-colors hover:text-blue-600"
                   onClick={getOnClick()}>
                    {item.name}
                </a>
            ))}
        </>
    )
}