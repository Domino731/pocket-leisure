import {connect} from "react-redux";
import gamesImg from "../../images/game_xboxone.jpg";
import moviesImg from "../../images/movie_clapper_board.jpg"
import overwatchImg from "../../images/overwatch.jpg"
import {Container} from "../../styled-components/general/general-styles";
import {
    NavigationList,
    NavigationItem,
    NavigationImg,
    NavigationItemTitle,
    ColorForm,
    ColorFormCheckbox,
    NavigationItemTitleGames,
    NavigationItemTitleOverwatch
} from "../../styled-components/elements/homePage/homePage";
import {useState} from "react";
import {changeMainColor} from "../../redux/actions/mainColor.action";
import {Link} from "react-router-dom";

/**
 *
 * @param mainColor - REDUX - main color in app
 * @param setMainColor {function} - REDUX - function that changes main color
 * @returns {JSX.Element} - home page with links to sections (movies, games, overwatch stats), also returns form on which user can change main color
 */
const HomePage = ({mainColor, setMainColor}) => {

    // state with main color(from redux state), which can be change by user
    const [color, setColor] = useState(mainColor)

    const handleChangeMainColor = (e) => {

        // save selected into local storage
        localStorage.setItem("mainColor", e.target.value)

        // set color state
        setColor(e.target.value)

        // set main color in redux
        setMainColor(e.target.value)
    }

    return <Container>
        <nav>
            <NavigationList>
                <NavigationItem>

                    {/*movies section*/}
                    <Link to="/movies">
                        <NavigationItemTitle>
                            Movies
                        </NavigationItemTitle>
                        <NavigationImg src={moviesImg}/>
                    </Link>
                </NavigationItem>


                <NavigationItem>

                    {/*games section*/}
                    <Link to="/games"><NavigationItemTitleGames>
                        Games
                    </NavigationItemTitleGames>
                        <NavigationImg src={gamesImg}/>
                    </Link>
                </NavigationItem>


                <NavigationItem>

                    {/*overwatch section*/}
                    <Link to="/overwatch-search-your-profile">
                        <NavigationItemTitleOverwatch>
                            Overwatch
                        </NavigationItemTitleOverwatch>
                        <NavigationImg src={overwatchImg}/>
                    </Link>
                </NavigationItem>

            </NavigationList>
        </nav>


        {/*change main color*/}
        <ColorForm>
            <ColorFormCheckbox color="#e63946">
                <input type="radio" value="#e63946" checked={color === "#e63946"}
                       onChange={handleChangeMainColor}/>
                <label><i className="fas fa-times"/>Top Rated</label>
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#30A9DE">
                <input type="radio" value="#30A9DE" checked={color === "#30A9DE"}
                       onChange={handleChangeMainColor}/>
                <label><i className="fas fa-times"/>Top Rated</label>
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#7fb800">
                <input type="radio" value="#7fb800" checked={color === "#7fb800"}
                       onChange={handleChangeMainColor}/>
                <label><i className="fas fa-times"/>Top Rated</label>
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#f100e5">
                <input type="radio" value="#f100e5" checked={color === "#f100e5"}
                       onChange={handleChangeMainColor}/>
                <label><i className="fas fa-times"/>Top Rated</label>
            </ColorFormCheckbox>
        </ColorForm>
    </Container>
}

const mapDispatchToProps = dispatch => ({
    setMainColor: data => dispatch(changeMainColor(data))
})
const mapStateToProps = state => ({
    mainColor: state.mainColor
})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage)