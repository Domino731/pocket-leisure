import { connect } from "react-redux";
import gamesImg from "../../images/game_xboxone.jpg";
import moviesImg from "../../images/movie_clapper_board.jpg"
import overwatchImg from "../../images/overwatch.jpg"
import { Container } from "../../styled-components/general/general-styles";
import {
    NavigationList,
    NavigationItem,
    NavigationImg,
    NavigationItemTitle,
    ColorForm,
    ColorFormCheckbox,
} from "../../styled-components/elements/homePage/homePage";
import { useState } from "react";
import { changeMainColor } from "../../redux/actions/mainColor.action";
import { Link } from "react-router-dom";

/**
 * Component with home page for app
 * @param mainColor - REDUX STATE - main color in app
 * @param setMainColor - REDUX ACTION - function that changes main color
 */
const HomePage = ({ mainColor, setMainColor }) => {

    // state with main color(from redux state), which can be change by user
    const [color, setColor] = useState(mainColor);

    /** change theme for app */
    const handleChangeMainColor = (e) => {
        // save selected into local storage
        localStorage.setItem("mainColor", e.target.value);

        // set color state
        setColor(e.target.value);

        // set main color in redux state
        return setMainColor(e.target.value);
    };

    return <Container>
        <nav>
            <NavigationList>

                {/*movies section*/}
                <NavigationItem>
                    <Link to="/movies">
                        <NavigationItemTitle>
                            Movies
                        </NavigationItemTitle>
                        <NavigationImg src={moviesImg} />
                    </Link>
                </NavigationItem>

                {/*games section*/}
                <NavigationItem>

                    <Link to="/games">
                        <NavigationItemTitle>
                            Games
                        </NavigationItemTitle>
                        <NavigationImg src={gamesImg} />
                    </Link>
                </NavigationItem>

                {/*overwatch section*/}
                <NavigationItem>
                    <Link to="/overwatch-search-your-profile">
                        <NavigationItemTitle>
                            Overwatch
                        </NavigationItemTitle>
                        <NavigationImg src={overwatchImg} />
                    </Link>
                </NavigationItem>

            </NavigationList>
        </nav>


        {/*change main color*/}
        <ColorForm>
            <ColorFormCheckbox color="#e63946" backgroundColor="#e63946" title={color === "#e63946" ? 'App has red theme' : 'Set app theme to red'}>
                <input type="radio" value="#e63946" checked={color === "#e63946"}
                    onChange={handleChangeMainColor} />
                <i className="fas fa-times" />
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#30A9DE" backgroundColor="#30A9DE" title={color === "#30A9DE" ? 'App has blue theme' : 'Set app theme to blue'}>
                <input type="radio" value="#30A9DE" checked={color === "#30A9DE"}
                    onChange={handleChangeMainColor} />
                <i className="fas fa-times" />
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#7fb800" backgroundColor="#7fb800" title={color === "#7fb800" ? 'App has green theme' : 'Set app theme to green'}>
                <input type="radio" value="#7fb800" checked={color === "#7fb800"}
                    onChange={handleChangeMainColor} />
                <i className="fas fa-times" />
            </ColorFormCheckbox>

            <ColorFormCheckbox color="#f100e5" backgroundColor="#f100e5" title={color === "#f100e5" ? 'App has pink theme' : 'Set app theme to pink'}>
                <input type="radio" value="#f100e5" checked={color === "#f100e5"}
                    onChange={handleChangeMainColor} />
                <i className="fas fa-times" />
            </ColorFormCheckbox>
        </ColorForm>
    </Container>
};

const mapDispatchToProps = dispatch => ({
    setMainColor: data => dispatch(changeMainColor(data))
});
const mapStateToProps = state => ({
    mainColor: state.mainColor
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);