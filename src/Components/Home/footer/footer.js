
import { React  } from "react";

function Footer (){

return (

 <div className="footer-basic">
       <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-yellow-200">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">SUBSCRIBE
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="https://www.google.com/" className="mr-4 hover:underline md:mr-6 ">Home</a>
        </li>
        <li>
            <a href="https://www.google.com/" className="mr-4 hover:underline md:mr-6">Blogs</a>
        </li>
        <li>
            <a href="https://www.google.com/" className="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
            <a href="https://www.google.com/" className="hover:underline">Contact</a>
        </li>
    </ul>
</footer>
    </div>

);
}
export default Footer;