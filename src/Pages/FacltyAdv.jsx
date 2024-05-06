import React from 'react'
import MemItem from "@/components/Items/MemItem";

import MemInfo from "@/info/meminfo";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FacultyInfo from "@/info/facultyinfo";

function FacltyAdv() {
  return (
    <div>
      <div className="" id='advisors'>
        <p>.</p>
      <div className="faclty mt-16 border-b-4 w-full h-screen ">
            <div className="">
            <div className=" heading mt-12 ">Faculty Advisors</div>
            </div>
            <div className=" memcard flex overflow-hidden gap-4 mt-20 m-6">
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
              <CarouselContent className="-ml-4 ">
                {FacultyInfo.map((data) => {
                  return (
                    <CarouselItem className="basis-1/4  ml-10" key={data.id}>
                      <MemItem
                        memimg={data.img}
                        memname={data.name}
                        memrole={data.role}
                      />
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
           
          </div>
          </div>
      </div>
    </div>
  )
}

export default FacltyAdv
