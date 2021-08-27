import {NotFoundContainer, NotFoundRedirect, NotFoundTitle} from "../../styled-components/elements/notFound/notFound";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";

/**
 * Component which rendered  when a non-existent file was referenced
 * @param redirectUrl {string} - path to which you want to redirect user, for example: /movies, /games
 * @returns {JSX.Element} - information about error 404, information about redirect

 */
export const NotFound404 = ({redirectUrl}) => {

    // state with number needed to display how much time is left before redirection
    const [redirectTime, setRedirectTime] = useState(10);

    const history = useHistory();

    // when component mounted do a countdown, and after 10s redirect user to specific path
    useEffect(() => {

        // do a countdown
        const countdown = setInterval(() => {
            setRedirectTime(prev => prev - 1)
        }, 1000);

        // redirect after 5s
        return setTimeout(() => {
            clearInterval(countdown)
            history.push(redirectUrl)
        }, 10000);
    }, []);

    return <NotFoundContainer>
        <NotFoundTitle>404 Not found</NotFoundTitle>
        <NotFoundRedirect>You will be redirected after {redirectTime}s </NotFoundRedirect>
        <i className="fas fa-frown-open"/>
    </NotFoundContainer>
};