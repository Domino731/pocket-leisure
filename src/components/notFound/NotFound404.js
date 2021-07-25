import {NotFoundContainer, NotFoundRedirect, NotFoundTitle} from "../../styled-components/elements/notFound/notFound";
import {useEffect, useState} from "react";
import {useHistory} from "react-router";

export const NotFound404 = ({redirectUrl}) => {
     const[redirectTime, setRedirectTime] = useState(5)

    const history = useHistory()
    useEffect(()=>{
        const countdown = setInterval(()=>{
           setRedirectTime(prev => prev - 1)
        },1000)
        setTimeout(()=>{
            clearInterval(countdown)
            history.push(redirectUrl)
        },5000)
    },[])

    return <NotFoundContainer>
        <NotFoundTitle>404 Not found</NotFoundTitle>
        <NotFoundRedirect>You will be redirected after {redirectTime}s </NotFoundRedirect>
        <i className="fas fa-frown-open"/>
    </NotFoundContainer>
}