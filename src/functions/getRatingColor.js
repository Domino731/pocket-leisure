/** get color which is depending on rating score */
export const getRatingColor = (rating) => {
       if(rating <= 15){
        return `#f02602`;
      }
      else if (rating < 30) {
        return '#ff8400';
      }
      else if (rating <= 30) {
        return '#ff8400';
      }
      else if (rating < 45) {
        return '#fdd100';
      }
      else if (rating < 60) {
        return '#b7dd16';
      }
      else if (rating < 75) {
        return '#8ce100';
      }
      else if (rating <= 100) {
        return '#4fba1f';
      }
}