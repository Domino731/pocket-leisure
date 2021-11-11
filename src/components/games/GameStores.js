import {
    GameItemTitle,
    GameStoresContainer,
    GameStoresList,
    GameStoreItem,
} from "../../styled-components/elements/games/specificGame";
import buyBtn from "../../images/buy_btn.svg";

/**
 * component with list of stores where user can buy a game
 * @param stores - array with stores
 */
export const GameStores = ({ stores }) => {

   /**
   game state have details about game store, but dont have url to stores, these are in gameStores component.
   store are rendered automatically, this function returns url for game store
   * @param num {number} - number of store that you want to get
   */
    const getGameStoreUrl = (num) => {
        if (stores !== undefined && stores[num] !== undefined) {
            return stores[num].url;
        }
    };

    return <GameStoresContainer>
        <GameItemTitle>Stores</GameItemTitle>
        <GameStoresList>
            {stores.map((el, num) => <GameStoreItem key={`gameStore_${el.id}_${num}`}>
                <a href={getGameStoreUrl(num)} target="_blank" rel="noopener noreferrer">
                    <img src={buyBtn} alt='Cart'/>
                    {el.store.name}
                </a>
            </GameStoreItem>)}
        </GameStoresList>
    </GameStoresContainer>
}