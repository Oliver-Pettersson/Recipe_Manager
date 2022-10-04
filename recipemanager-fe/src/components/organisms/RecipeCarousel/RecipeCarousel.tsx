import React from 'react'
import Carousel from 'react-material-ui-carousel'
import CarouselItem from '../../molecules/CarouselItem/CarouselItem'

export default function RecipeCarousel() {
  return (
    <Carousel sx={{width: "80%"}}>
      <CarouselItem />
      <CarouselItem />
      <CarouselItem />
    </Carousel>
  )
}
