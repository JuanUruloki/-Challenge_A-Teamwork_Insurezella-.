import "./styles/index.css";
// import Image from "next/image";
import Hero from "../components/Hero/index";
import Products from "../components/Products/index";
import Insurances from "../components/Insurances/index";
import Plans from "../components/Plans/index";

export default function Home() {
  return(

  <>
    <Hero />
    <Products />
    <Insurances />
    <Plans />
  </>
  )
}
