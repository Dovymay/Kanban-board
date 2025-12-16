import logo from "../assets/Images/Logo.png"

function Navbar () {
    return (
        <nav className="navbar">
                    <div className = "nav-left"><img src= {logo} alt="Logo-Icon" />
                    </div>
                    <h1>Kanban Board</h1>
                    <button className ="about-us-btn">About Us</button>
                </nav>
    )
} 

export default Navbar