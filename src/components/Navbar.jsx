import { NavLink } from "react-router-dom";

const Navbar = () => {
  // URL to the logo image
  const logoUrl = "https://i.ibb.co/hmSq6LW/gif.gif";

  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logoUrl} alt='logo' className='w-16 h-16 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Twitter
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Telegram
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
