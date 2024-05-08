import React from "react";


function CardItem({ cardContent, cardTitlee, cardImg }) {
  return (
    <div className="">
      {/* <div className="border border-white p-4 rounded-xl wf flex overflow-hidden">
    <div className=" flex justify-center items-center"><img src={cardImg} alt="img " className='cardImg m-4  rounded-2xl overflow-auto' /></div>
      <div className=" flex flex-col">
      <h2 className='text-4xl txt text-center font-bold'>{cardTitlee}</h2>
      <div className="dec txt text-center text-m"><p className='border-2 wp'>{cardContent}</p></div>
      </div>
      </div> */}

      <div className="border evecard border-white p-8 rounded-xl wf md:w-[95vw]  flex  h-96  md:flex-row  overflow-hidden">
        <div className=" flex justify-center  eveimg items-center">
          <img
            src={cardImg}
            alt="img "
            className="cardImg m-4  rounded-2xl overflow-auto"
          />
        </div>
        <div className=" flex  md:ml-8 ml-4 flex-col">
          <h2 className="md:text-4xl text-2xl txt text-center font-bold">{cardTitlee}</h2>
          <div className="dec txt text-center text-m">
            <p className=" p-4  md:mt-8  mt-2 wp">{cardContent}</p>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default CardItem;
