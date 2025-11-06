import Banner from "@/components/banner/Banner";
import NavBar from "@/components/navBar/NavBar";
import Sidebar from "@/components/sidebar/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className=" flex">
        <div className="w-auto">
          <Sidebar />
        </div>
        <div className="w-full">
          <NavBar />
          <div className="flex flex-col gap-5 px-5 py-5">
            

            <Banner />
          </div>



        </div>
      </section>
      
      
    </main>
  );
}
