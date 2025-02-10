function closeMenu(): void {
    const e = document.querySelector('input#close-menu') as HTMLInputElement;
    e.checked = false;
}

export const Menu = () => {
    return (
        <>
            <input id="close-menu" type="checkbox" />
            <label htmlFor="close-menu" id="menu"></label>
            <header>
                <nav id="header-nav-links">
                    <ul onClick={closeMenu}>
                        <li>
                            <a href="#home">HOME</a>
                        </li>
                        <li>
                            <a href="#posts">POST</a>
                        </li>
                        <li>
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
