import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import CardItem from "@/components/Items/CardItem";

function Events() {
  return (
    <div>
      <div>
        <div className="min-h-[41rem] border-b-8 border-red-500 ">
          <div className="heading text-start txtcolor m-7 text-5xl"><h1>EVENTS</h1></div>

          <Carousel
            opts={{
              // align: "",
              loop: true,
            }}>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
               <CardItem  cardTitlee={"Brumanas"} />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardItem />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardItem />
              </CarouselItem> <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardItem />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardItem />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Events;
