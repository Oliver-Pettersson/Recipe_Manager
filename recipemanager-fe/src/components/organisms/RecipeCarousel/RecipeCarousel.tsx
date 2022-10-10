import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../../molecules/CarouselItem/CarouselItem'

export default function RecipeCarousel() {
  const items = [1, 2]  
  return (
    <Carousel  sx={{width: "80%"}}>
      {items.map((index) => <CarouselItem key={index} />)}
    </Carousel>
  )
}
