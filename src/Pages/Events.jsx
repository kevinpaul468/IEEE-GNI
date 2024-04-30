import React from "react";
import EventInfo from "@/info/events";
import Autoplay from "embla-carousel-autoplay";

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
      <div className="h-screen">
        <div className="   eventsbg border-b-8   w-full">
          <p>.</p>
          <div className=" flex justify-between items-center mt-6 gap-3">
            <div className=" heading ">Events</div>
            <div className=" flex justify-center items-center mt-1 mr-6 gap-3">
              <span className=" btn1 text-white border-2 rounded-xl text-lg cursor-pointer l">
                Previous
              </span>
              <span className=" btn1 text-white border-2 rounded-xl text-lg cursor-pointer ">
                Next
              </span>
            </div>
          </div>
          <div className="cerodrag m-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
            >
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
