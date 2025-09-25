const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold text-[#0096C7]">Logo</div>

          {/* Desktop Menu */}
          <ul className="flex space-x-6">
            <li className="hover:text-[#0096C7] cursor-pointer">Home</li>
            <li className="hover:text-[#0096C7] cursor-pointer">About Us</li>
            <li className="hover:text-[#0096C7] cursor-pointer">Services</li>
            <li className="hover:text-[#0096C7] cursor-pointer">Find a doctor</li>
            <li className="hover:text-[#0096C7] cursor-pointer">Login</li>
            <li className="hover:text-[#0096C7] cursor-pointer">Admin</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
