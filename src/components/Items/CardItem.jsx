import React from 'react'


function CardItem({cardContent,cardTitlee,cardImg,}) {
  return (
    <div>
      <div className="border border-white p-4 rounded-xl">
      <h2 className='text-4xl txt text-center font-bold'>{cardTitlee}</h2>
    <div className=" flex justify-center items-center"><img src={cardImg} alt="img " className='cardImg m-4  rounded-2xl overflow-auto' /></div>
      <div className="dec txt text-center text-m">{cardContent}</div>
      </div>
    </div>
  )
}

export default CardItem
