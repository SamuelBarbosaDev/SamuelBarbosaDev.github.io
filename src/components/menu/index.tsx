function menu(): void{
    const e = document.querySelector('input.close-menu') as HTMLInputElement;
    e.checked = false;
}

export const Menu = () => {
    return (
        <>
            <input id="close-menu" type="checkbox" />
            <label htmlFor="close-menu" id="menu"></label>
            <header>
                <nav id="header-nav-links">
                    <ul onClick={() => menu()}>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};
