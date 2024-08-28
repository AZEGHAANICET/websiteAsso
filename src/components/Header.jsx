import logo from '../assets/logo.png';
import {FaHome, FaPhoneAlt, FaRegCalendarCheck} from "react-icons/fa";
export default function Header() {
    return (
        <header className="flex flex-col justify-between items-center mt-10 text-xl md:flex-row">
            <img src={logo} alt="Logo CMCI" className="ml-10" />
            <ul className="flex flex-col gap-4 md:flex-row">
                <li className="py-2 px-6 rounded-xl transition-colors duration-900 hover:bg-[rgba(0,0,0,0.1)] hover:text-orange-600">
                    <a href="#" className="flex items-center gap-2"><FaHome/>Home</a>
                </li>
                <li className="py-2 px-6 rounded-xl transition-colors duration-900 hover:bg-[rgba(0,0,0,0.1)] hover:text-orange-600">
                    <a href="#" className="flex items-center gap-2"><FaRegCalendarCheck /><span>Events</span></a>
                </li>
                <li className="mr-10 py-2 px-6 rounded-xl transition-colors duration-900 hover:bg-[rgba(0,0,0,0.1)] hover:text-orange-600">
                    <a href="#" className="flex items-center gap-2"><FaPhoneAlt /><span>Contact Us</span></a>
                </li>
            </ul>
        </header>
    );
}
