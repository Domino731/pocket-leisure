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

    return <GameStoresContainer>
        <GameItemTitle>Stores</GameItemTitle>
        <GameStoresList>
            {stores.map((el, num) => <GameStoreItem key={`gameStore_${el.id}_${num}`}>
                <div>
                    <img src={buyBtn} alt='Cart'/>
                    {el.store.name}
                </div>
            </GameStoreItem>)}
        </GameStoresList>
    </GameStoresContainer>
}