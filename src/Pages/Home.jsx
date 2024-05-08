import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CardItem2 from "@/components/Items/CardItem2";
import EventInfo from "@/info/events";
<<<<<<< HEAD
import Autoplay from "embla-carousel-autoplay"
import IEEE from "../assets/IEEE.png"
=======
import Autoplay from "embla-carousel-autoplay";
import HomeLogo from "../assets/HomeLogoi.png";
>>>>>>> 120f02a04cac8f1fc991fa82abd0f2c3d41398ff

function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full  flex overflow-hidden justify-center items-center"
    >
      <div className="container flex h-[90%] w-[98%]   md:flex-row  p-4 m-4 flex-col ">
       
         

<<<<<<< HEAD

        {/* <img src={IEEE} alt=""  className="m-5 ml-10 mt-28"/> */}
        <div className=""></div>
        <div className="mt-44  flex ">
          <img src={IEEE} alt="logo" className="h-40"/>
          <span className="text-8xl text-white mt-9 font-serif"> IEEE GNITC </span></div>

        </div>
        <div className=" ">
          <div
            className="events ml-56 w-80 flex overflow-hidden"
          >
=======
          <div className="  flex  p-2  mt-24 ml-4  md:mt-52 ">
            <img src={HomeLogo} alt="logo" className="h-20 mt-6 md:h-40" />
            <span className="text-4xl text-white mt-12 md:mt-14 md:text-8xl md:w- wrap font-serif">
             
              <p className="">IEEE GNITC</p>
            </span>
          </div>
     
        <div className=" mt-32 flex ml-6 md:ml-56 md:w-96">
          <div className="events flex overflow-hidden">
>>>>>>> 120f02a04cac8f1fc991fa82abd0f2c3d41398ff
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                }),
              ]}
            >
              <CarouselContent>
                {EventInfo.map((eve) => {
                  return (
                    <>
                      <CarouselItem>
                        <CardItem2 cardTitlee={eve.title} cardImg={eve.img} />
                      </CarouselItem>
                    </>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="bg-slate-700"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
