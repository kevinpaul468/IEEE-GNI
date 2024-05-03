import MemItem from "@/components/Items/MemItem";
import React from "react";
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

function Memebers() {
  return (
    <div id="members" className="">
      <div className=" w-full">
        <div className="    border-b-8   w-full">
          <p>.</p>
          <div className=" flex justify-between items-center mt-6 gap-3">
            <div className=" heading ">Members </div>
            <div className=" flex justify-center items-center mt-1 mr-6 gap-3">
              <a href="/IEEE-GNI/members">
              <span className=" btn1 text-white border-2 rounded-xl text-lg cursor-pointer l">
               See All
              </span>
              </a>
            </div>
          </div>
          <div className=" memcard flex overflow-hidden gap-4 m-6">
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
                {MemInfo.map((data) => {
                  return (
                    <CarouselItem className="basis-80" key={data.id}>
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
          <div className="faclty ">
            <div className="">
            <div className=" heading ">Faculty Advisors</div>
            </div>
            <div className=" memcard flex overflow-hidden gap-4 m-6">
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
                {FacultyInfo.map((data) => {
                  return (
                    <CarouselItem className="basis-80" key={data.id}>
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
    </div>
  );
}

export default Memebers;
