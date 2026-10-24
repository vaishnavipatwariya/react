
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="logo">Vaishnavi<span>.</span></h1>

            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <a href="#contact" className="nav-btn">
                Let's Talk
            </a>
        </nav>
    );
};

export default Navbar;
