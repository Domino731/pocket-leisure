import { ErrorContainer } from "../../styled-components/elements/notFound/notFound";
import { useEffect, useState } from "react";
import error404Graphic from "../../images/error404.svg"

/**
 * Component responsible for handling 404 error
 * @param redirectUrl {string} - path to which you want to redirect user, for example: /movies, /games
 * @returns {JSX.Element} - information about error 404, information about redirect
 */
export const NotFound404 = ({ redirectUrl }) => {
    
    // state with number needed to display how much time is left before redirection
    const [redirectTime, setRedirectTime] = useState(5);

    // when component mounted do a countdown, and after 10s redirect user to specific path
    useEffect(() => {
        // do a countdown
        const interval = setInterval(() => {
            setRedirectTime(prev => prev - 1)
        }, 1000)

        // redirect after 5s
        const timeout = setTimeout(() => {
            window.location = redirectUrl;
            clearInterval(interval);
        }, 5000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
            console.log('Unmounted');
        }
    },[]);

    return <ErrorContainer>
         <img src={error404Graphic} title='Page not found' alt='Page not found'/>
         <h1>You will be redirected after {redirectTime}s</h1>
    </ErrorContainer>
};