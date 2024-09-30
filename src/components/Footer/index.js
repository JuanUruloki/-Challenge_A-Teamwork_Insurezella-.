import { GiUmbrella } from "react-icons/gi";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import {
  FaAddressCard,
  FaUserShield,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdRequestPage } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="relative flex flex-col justify-center items-center  bg-white shadow-md w-full">
      <div className="relative flex 2xl:hidden items-start -ml-24">
        <div className="flex flex-row items-center gap-16 w-[90vw] shadow-cards p-8 bg-white relative z-10 left-0 -mb-16">
          <div className="flex flex-col items-center justify-center w-1/2 h-full">
            <div
              className="w-24 h-24 mb-4 rounded-xl bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/logo.png)" }}
            />
            <p className="text-center text-base font-textRegular text-slate-400 mb-4 px-12">
              "Discover the Peace of Mind You Deserve with Insurezella 'Your
              Reliable Insurance Umbrella'"
            </p>
            <div className="flex space-x-4 text-2xl">
              <FaFacebook className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaTwitter className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaInstagram className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaLinkedin className="text-darkBlue hover:text-lightBlue cursor-pointer" />
            </div>
          </div>

          {/* Servicios */}
          <div className="w-1/2 h-full mb-8">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">Services</h3>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <GiUmbrella className="mr-2 text-darkBlue" />
                Health Insurance
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <MdRequestPage className="mr-2 text-darkBlue" />
                Life Insurance
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaPrescriptionBottleMedical className="mr-2 text-darkBlue" />{" "}
                Medicare Supplement
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaAddressCard className="mr-2 text-darkBlue" />
                Medicare Advantage
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaUserShield className="mr-2 text-darkBlue" />
                (ACA)Obamacare
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex 2xl:hidden w-full h-44 bg-lightBlue relative z-0"></div>
      <div className="relative flex 2xl:hidden items-start -mr-24">
        <div className="flex flex-row items-center gap-16 w-[90vw] shadow-cards p-8 bg-white relative z-10 right-0 -mt-16">
          <div className="w-1/2 h-full mb-8">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">Company</h3>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                About Us
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Careers
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Industry News
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Privacy Policy
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="w-1/2 h-full mb-8">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">
              Get In Touch
            </h3>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaEnvelope className="mr-2 text-darkBlue" />{" "}
                Email: support@insurezella.com
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaPhoneAlt className="mr-2 text-darkBlue" /> +18772270774
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaRegClock className="mr-2 text-darkBlue" /> Mon-Fri 9:00AM -
                5:00PM
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400 pr-8">
                <FaAddressBook className="mr-2 text-darkBlue" />
                300 SE 2nd Street Suite 600, Ft. Lauderdale FL 33301
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="relative hidden 2xl:flex flex-col items-center w-full">
        {/* Contenedor del contenido del footer */}
        <div className="flex flex-row items-center w-[90vw] shadow-cards p-8 bg-white relative z-10 -mb-12">
          {/* Primera Columna */}
          <div className="flex flex-col items-center justify-center md:items-center w-full md:w-1/4 mb-8 md:mb-0">
            <div
              className="w-24 h-24 mb-4 rounded-xl bg-contain bg-center bg-no-repeat"
              style={{ backgroundImage: "url(/logo.png)" }}
            />
            <p className="text-center text-lg font-textRegular md:text-center text-slate-400 mb-4 px-24">
              "Discover the Peace of Mind You Deserve with Insurezella 'Your
              Reliable Insurance Umbrella'"
            </p>
            <div className="flex space-x-4 text-2xl">
              <FaFacebook className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaTwitter className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaInstagram className="text-darkBlue hover:text-lightBlue cursor-pointer" />
              <FaLinkedin className="text-darkBlue hover:text-lightBlue cursor-pointer" />
            </div>
          </div>

          {/* Servicios */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">Services</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <GiUmbrella className="mr-2 text-darkBlue" />
                Health Insurance
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <MdRequestPage className="mr-2 text-darkBlue" />
                Life Insurance
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaPrescriptionBottleMedical className="mr-2 text-darkBlue" />{" "}
                Medicare Supplement
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaAddressCard className="mr-2 text-darkBlue" />
                Medicare Advantage
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaUserShield className="mr-2 text-darkBlue" />
                (ACA)Obamacare
              </li>
            </ul>
          </div>

          {/* Información de la Empresa */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">Company</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                About Us
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Careers
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Industry News
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Privacy Policy
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                Terms & Conditions
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="w-full md:w-1/4">
            <h3 className="font-texts text-3xl text-darkBlue mb-4">
              Get In Touch
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaEnvelope className="mr-2 text-darkBlue" />{" "}
                support@insurezella.com
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaPhoneAlt className="mr-2 text-darkBlue" /> +18772270774
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400">
                <FaRegClock className="mr-2 text-darkBlue" /> Mon-Fri 9:00AM -
                5:00PM
              </li>
              <li className="flex items-center text-lg font-textRegular text-slate-400 pr-8">
                <FaAddressBook className="mr-2 text-darkBlue" />
                300 SE 2nd Street Suite 600, Ft. Lauderdale FL 33301
              </li>
            </ul>
          </div>
        </div>
        {/* Div azul (fondo) */}
        <div className="w-full h-20 bg-lightBlue relative z-0"></div>
      </div>
    </div>
  );
};

export default Footer;
