import {connect} from "react-redux";
import {useHistory} from "react-router";
import gamesImg from "../../images/game_xboxone.jpg";
import moviesImg from "../../images/movie_clapper_board.jpg"
import overwatchImg from "../../images/overwatch.jpg"
// styles
import {Container} from "../../styled-components/general/general-styles";
import {
    NavigationList,
    NavigationItem, NavigationImg, NavigationItemTitle, ColorForm, ColorFormCheckbox
} from "../../styled-components/elements/homePage/homePage";
import {useState} from "react";
import {changeMainColor} from "../../redux/actions/mainColor.action";
import {Link} from "react-router-dom";

const HomePage = ({mainColor, setMainColor}) => {

    // flags responsible for animations
    const [animation, setAnimation] = useState({movies: false, series: false, games: false, books: false})

    // state with main color(from redux state), which can be change by user
    const [color, setColor] = useState(mainColor)

    // to move the user to another subpage at the end of the animation
    let history = useHistory()

    // when the user clicks on the item, add the animation and when it is finished, redirect the user to the subpage
    /** @param item {string} - so that the function knows where to place the animation and where to redirect the user
     */
    const handleRedirect = (item) => {
        // add animation
        setAnimation(prev => ({
            ...prev,
            [item]: true
        }))

        // redirect after 0.6s
        setTimeout(() => {
            history.push(`/${item}`)
        }, 600)

    }

    const handleChangeMainColor = (e) => {
        localStorage.setItem("mainColor", e.target.value)
        setColor(e.target.value)
        setMainColor(e.target.value)
    }
    return <Container>
        <nav>
            <NavigationList>
                <NavigationItem>
                    <Link to="/movies">
                        <NavigationItemTitle>
                            Movies
                        </NavigationItemTitle>
                        <NavigationImg src={moviesImg}/>
                    </Link>
                </NavigationItem>


                <NavigationItem >
                    <Link to="/games"><NavigationItemTitle>
                        Games
                    </NavigationItemTitle>
                        <NavigationImg src={gamesImg}/>
                    </Link>
                </NavigationItem>


                <NavigationItem>
                    <Link to="/overwatch-search-your-profile">
                        <NavigationItemTitle>
                            Overwatch
                        </NavigationItemTitle>
                        <NavigationImg src={overwatchImg}/>
                    </Link>
                </NavigationItem>

            </NavigationList>
        </nav>


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