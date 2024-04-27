import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

function CardItem({cardTitlee ="title" , cardDescription ='descrition', cardContent ='content',cardFooter='footer'}) {
  return (
    <div>
        <Card>
  <CardHeader>
    <CardTitle>{cardTitlee}</CardTitle>
    <CardDescription>{cardDescription}</CardDescription>
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
