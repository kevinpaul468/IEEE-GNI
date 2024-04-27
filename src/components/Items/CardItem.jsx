import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function CardItem({cardTitlee ="title" , cardImg ='https://hire4event.com/blogs/wp-content/uploads/2019/04/Artist-For-College-Events.jpg', cardContent ='content',cardFooter='footer'}) {
  return (
    <div>
        <Card>
  <CardHeader>
    <CardTitle>{cardTitlee}</CardTitle>
    <CardDescription><img src={cardImg} alt="img" /></CardDescription>
  </CardHeader>
  <CardContent>
    <p>{cardContent}</p>
  </CardContent>
  <CardFooter>
    <p>{cardFooter}</p>
  </CardFooter>
</Card>

      
    </div>
  )
}

export default CardItem
