import {connect} from "react-redux";
import {auth} from "../../firebase/firebase";
import {useHistory} from "react-router";
// styles
import {Container} from "../../styled-components/general/general-styles";
import {
    NavigationList,
    NavigationItem,
    UserStatistics,
    UserStatisticsItem,
    LogOut
} from "../../styled-components/elements/homePage/homePage";
import {useState} from "react";


 const HomePage = ({user}) => {

     // flags responsible for animations
     const [animation, setAnimation] = useState({movies: false, series: false, games: false, books: false})

     // to move the user to another subpage at the end of the animation
     let history = useHistory()

     // when the user clicks on the item, add the animation and when it is finished, redirect the user to the subpage
     /* @param item so that the function knows where to place the animation and where to redirect the user
     */
     const handleRedirect = (item) => {
         // add animation
         setAnimation(prev => ({
             ...prev,
             [item]: true
         }))

         // redirect after 0.6s
         setTimeout(()=>{
             history.push(`/${item}`)
         },600)

     }
     // log out
     const handleLogOut = () => {
         return auth().signOut()
     }


    return <Container>
        <LogOut onClick={handleLogOut}>
            <i className="fas fa-door-open"/> <span>Log out</span>
        </LogOut>
         <nav>
           <NavigationList>
               <NavigationItem animation={animation.movies} onClick={() => handleRedirect("movies")}>
                   <i className="fas fa-film"/>
                   <span>Movies</span>
               </NavigationItem>

               <NavigationItem animation={animation.series} onClick={() => handleRedirect("series")}>
                   <i className="fas fa-film"/>
                   <span>Series</span>
               </NavigationItem>

               <NavigationItem animation={animation.games} onClick={() => handleRedirect("games")}>
                   <i className="fas fa-gamepad"/>
                   <span>Games</span>
               </NavigationItem>

               <NavigationItem animation={animation.books} onClick={() => handleRedirect("books")}>
                   <i className="fas fa-book"/>
                   <span>Books</span>
               </NavigationItem>

           </NavigationList>
        </nav>

        <UserStatistics>
            <h2>Statistics</h2>
            <UserStatisticsItem>
                <i className="fas fa-film"/>
                <span>Saved movies: 24</span>
            </UserStatisticsItem>
            <UserStatisticsItem>
                <i className="fas fa-film"/>
                <span>Saved series: 24</span>
            </UserStatisticsItem>
            <UserStatisticsItem>
                <i className="fas fa-gamepad"/>
                <span>Saved games: 24</span>
            </UserStatisticsItem>
            <UserStatisticsItem>
                <i className="fas fa-book"/>
                <span>Saved books: 24</span>
            </UserStatisticsItem>
        </UserStatistics>
    </Container>
}
const mapStateToProps = state => ({
    user: state.currentUser
})
export default connect(mapStateToProps)(HomePage)