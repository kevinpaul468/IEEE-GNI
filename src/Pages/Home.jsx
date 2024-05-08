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
import Autoplay from "embla-carousel-autoplay"
import IEEE from "../assets/IEEE.png"

function Home() {
  return (
    <div
      id="home"
      className="h-screen w-full mt-16 flex justify-center items-center"
    >
      <div className="container flex h-[90%] w-[98%] p-4 m-4  ">
        <div className="  w-3/5">


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
            <Carousel
             opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}>
              <CarouselContent>
             
                  {
                    EventInfo.map((eve)=>{
                      return(
                        <>
                           <CarouselItem>
                         <CardItem2  cardTitlee={eve.title} cardImg={eve.img}/>
                         </CarouselItem>
                        </>
                      )
                    })
                  }
                 
             
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
