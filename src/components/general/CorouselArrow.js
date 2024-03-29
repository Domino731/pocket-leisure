import { CarouselButton } from "../../styled-components/general/general-styles"

export const CarouselArrow = ({direction, clickHandler}) => {
  // const type = consts.PREV;

   return <CarouselButton onClick={clickHandler}>
       {direction === "PREV" ? <i className="fas fa-arrow-left"/> : <i className="fas fa-arrow-right"/>}
       </CarouselButton>
}