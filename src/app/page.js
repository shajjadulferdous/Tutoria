import Banner from "@/components/Banner/Banner";
import ExtraSectionOne from "@/components/ExtraSectionOne";
import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function Home() {
  return (
      <div>
         <NavBar></NavBar>
         <Banner></Banner>
         <ExtraSectionOne></ExtraSectionOne>
      </div>
  );
}
