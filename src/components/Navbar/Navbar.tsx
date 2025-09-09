import Logo from "./Logo"
import Search from "./Search"
import { Darkmode } from "./Darkmode"

const Navbar = () => {
    return (
        <nav>
            <div className="container flex flex-col 
            justify-between py-7 sm:flex-row sm:items-center gap-4">
                { /* Logo */}
                <Logo />
                { /* Search */}
                <Search />
                { /* Darkmode & profile */}
                <div className="flex gap-2">
                    <Darkmode />
                    <h1>Profile</h1>
                </div>
            </div>
        </nav>
    )
}

export default Navbar