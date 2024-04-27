import React from "react";
import EventInfo from "@/info/events";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import CardItem from "@/components/Items/CardItem";


function Events() {
  return (
    <div id="events">
      <div>
        <div className="  h-screen eventsbg border-b-8 border-red-500  w-full">
          <p>.</p>
          <div className="heading  txtcolor  text-5xl  ">
            <p className=" ml-[25px] mt-12 text-white">EVENTS</p>
          </div>
          <div className="cerodrag m-6">
            {/* <CarouselContent>
                <CarouselItem className="md:basis-1/2  pl-16 lg:basis-2/3">
                  <CardItem />
                </CarouselItem>
               
                <CarouselItem className="md:basis-1/2  pl-16 lg:basis-2/3">
                  <CardItem />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 pl-16  lg:basis-2/3">
                  <CardItem />
                </CarouselItem>
              </CarouselContent> */}
                 <Carousel>
                 <CarouselContent> 
            {EventInfo.map((eve) => {
              return (
                <div key={eve.id}>
               
                    <CarouselItem className="md:basis-1/2  pl-16 lg:basis-2/3">
                      <CardItem
                        cardImg={eve.img}
                        cardContent={eve.content}
                        cardTitlee={eve.title}
                      />
                    </CarouselItem>
                 
                  </div>
              );
            })}
             </CarouselContent> 
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
