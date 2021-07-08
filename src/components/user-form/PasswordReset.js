//the component responsible for password recovery

import {useState} from "react";
import {auth} from "../../firebase/firebase";
import {Link} from "react-router-dom";
// styles
import {
    Form,
    FormElement,
    FormInvalid,
    FormPasswordRecovery
} from "../../styled-components/elements/user-form/user-form";
import {TriangleBot, TriangleTop} from "../../styled-components/general/general-styles";

export const PasswordReset = () => {

    // state with email to which a password reset link will be sent
    const [email, setEmail] = useState("")

    // state with message about sent reset or incorrect e mail
    const [msg, setMsg] = useState("")

    // state with flag, which will display a message that the password reset link has been successfully sent
    const [flag, setFlag] = useState(false)
    // changing email
    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    // sending reset
    const handleReset = (e) => {
        e.preventDefault()
        setFlag(true)
        console.log(flag)
        // auth().sendPasswordResetEmail(email)
        //     .then(() => {
        //       console.log("a password reset link has been sent to your email")
        //     })
        //     .catch((error) => {
        //         if(error.code === "auth/invalid-email"){
        //             setMsg("E-mail is incorrect")
        //         }
        //        else if (error.code === "auth/user-not-found"){
        //            setMsg("No user with this e-mail address")
        //         }
        //     });

    }

    return <Form>
        <TriangleTop/>

        {flag === false && <><h1>Password Reset</h1>
        <FormInvalid>
            <strong>{msg}</strong>
        </FormInvalid>
        <FormElement>
            <i className="fas fa-at"/>
            <input type="email" placeholder="E-mail" onChange={handleChangeEmail}/>
        </FormElement>
        <button onClick={handleReset}>Reset</button>
        <FormElement>
            <Link to="/">Login</Link>
        </FormElement> </>}

        {flag && <FormPasswordRecovery>
            <strong>Check your mailbox for further instructions.</strong>
            <i className="fas fa-envelope-open-text"/>
        </FormPasswordRecovery>}

        <TriangleBot/>
    </Form>
}