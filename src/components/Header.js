function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item"><a href="#home">Home</a></li>
                    <li className="nav-item"><a href="#about">About</a></li>
                    <li className="nav-item"><a href="#features">Features</a></li>
                    <li className="nav-item"><a href="#contact">Contacts</a></li>
                </ul>
            </nav>
            <h1 className="title">Dream Catcher</h1>
            <button className="button">Learn More</button>
        </header>
    );
}

export default Header;