import { NavLink } from "react-router-dom";

const Navbar = () => {
  // URL to the logo image
  const logoUrl = "https://i.ibb.co/hmSq6LW/gif.gif";

  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logoUrl} alt='logo' className='w-16 h-16 object-contain' />
      </NavLink>
      <a href="https://t.me/messcommunity" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Twitter
  </span>
</a>
<a href="https://t.me/messcommunity" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Telegram
  </span>
</a>

  
    </header>
  );
};

export default Navbar;
