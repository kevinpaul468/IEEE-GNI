import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function CardItem({cardTitlee ="title" , cardImg ='https://hire4event.com/blogs/wp-content/uploads/2019/04/Artist-For-College-Events.jpg', cardContent ='content of the event',cardFooter='footer'}) {
  return (
    <div>
      <div className="border border-white p-4 rounded-xl">
      <h2 className='text-4xl txt text-center font-bold'>{cardTitlee}</h2>
    <div className=" flex justify-center items-center"><img src={cardImg} alt="img " className='cardImg m-4  rounded-2xl overflow-auto' /></div>
      <div className="dec txt text-center text-lg">{cardContent}</div>
      </div>
    </div>
  )
}

export default CardItem
