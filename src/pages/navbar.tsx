import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-16 text-white relative shadow-sm font-mono" role="navigation">
      <Link href="/" className="pl-8">
      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-apple" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
   <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
   <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z"></path>
   <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"></path>
</svg>
      </Link>
      <div className="px-4 cursor-pointer md:hidden">  
      </div>

      <div className="pr-8 md:block hidden">
        <a href="#" className="nav p-7 ">
          ABOUT
        </a>
        <a href="#" className="nav p-7 ">
          SUPPORT
        </a>
        <a href="#" className="nav p-7 ">
          ACCESSORIES
        </a>
      </div>
    </nav>			
  );
};

export default Navbar;
