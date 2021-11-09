import { CarouselButton } from "../../styled-components/general/general-styles"
import {consts} from  'react-elastic-carousel';
export const CarouselArrow = ({direction, clickHandler}) => {
  // const type = consts.PREV;

   return <CarouselButton onClick={clickHandler}>
       {direction === "PREV" ? <i class="fas fa-arrow-left"/> : <i class="fas fa-arrow-right"/>}
       </CarouselButton>
}