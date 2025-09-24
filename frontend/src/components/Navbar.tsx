
const Navbar = () => {
    return (
        <div className="flex justify-between ">
            <div>Logo</div>
            <div>
                <ul className="flex justify-between mx-10">
                    <li className="mx-3">Home</li>
                    <li className="mx-3">About Us</li>
                    <li className="mx-3">Services</li>
                    <li className="mx-3">Find a doctor</li>
                    <li className="mx-3">Login</li>
                    <li className="mx-3">Admin</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;