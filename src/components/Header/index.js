import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex flex-col w-screen h-40 font-texts ">
      <div className="flex flex-row h-16 bg-lightBlue justify-around items-center  text-white">
        <div className="flex text-2xl ">
          <p>Want to Connect with us?</p>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="pr-2 text-2xl" />
          <p className="pr-6 ">Mail us: support@insurzella.com</p>
          <FaPhoneAlt className="pr-2 text-2xl" />
          <p>Call us: (877) 227 0774</p>
        </div>
      </div>
      <div className="flex h-2/3 w-full bg-white justify-around items-center">
        <h1>LOGO</h1>
        <div className="flex w-1/5 justify-evenly">
            <Link href='/' className="underline underline-offset-4">
                Home
            </Link>
            <p>|</p>
            <Link href='/'>
                Find Insurance
            </Link>
            <p>|</p>
            <Link href='/'>
                Learn
            </Link>
            <p>|</p>
            <Link href='/'>
                About
            </Link>
        </div>
        <button className="flex items-center justify-evenly h-14 w-40 bg-midBlue rounded-full text-white font-bold">
          Call Us Now
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Header;