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

      <div className="border border-white p-8 rounded-xl wf flex overflow-hidden">
        <div className=" flex justify-center items-center">
          <img
            src={cardImg}
            alt="img "
            className="cardImg m-4  rounded-2xl overflow-auto"
          />
        </div>
        <div className=" flex  ml-8 flex-col">
          <h2 className="text-4xl txt text-center font-bold">{cardTitlee}</h2>
          <div className="dec txt text-center text-m">
            <p className=" p-5  mt-8 wp">{cardContent}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
