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
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#posts">Post</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
