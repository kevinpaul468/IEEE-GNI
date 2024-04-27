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
        <div className="min-h-[41rem] border-b-8 border-red-500 max-w-screen-xl ">
          <div className="heading text-start txtcolor m-7 text-5xl"><h1>EVENTS</h1></div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
               <CardItem  cardTitlee={"Brumanas"} cardImg="https://www.gniindia.org/news-events/images/bru4.webp" cardContent="BRUMOUS - 2k24 (Annual Techno Cultural Fest) is organized at Guru Nanak Institutions on 1st – 2nd March, 2024 in which 1800 students participated in various Technical and Cultural events.

BRUMOUS - 2k24 was a vibrant showcase of diversity and innovation, where the thrill of dynamic dances, the brilliance of tech showcases, and the richness of cultural performances came together over two unforgettable days. It was a celebration of talent and camaraderie, igniting passions and forging lifelong memories. We celebrated our unified, creative spirit in a spectacular blend of unity and creativity."/>
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
