import Logo from "./Logo"
import Search from "./Search"

const Navbar = () => {
    return (
        <nav>
            <div className="flex justify-between">
                { /* Logo */}
                <Logo />
                { /* Search */}
                <Search />
                { /* Darkmode & profile */}
                <div className="flex gap-2">
                    <h1>Darkmode</h1>
                    <h1>Profile</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar