//This component is responsible for logging with firebase
import {Form, FormElement, FormInvalid} from "../../styled-components/elements/user-form/user-form";
import {useState} from "react";
import {auth} from "../../firebase/firebase";
import {Link} from "react-router-dom";

/* @param switchForm  function that switch form to register
 */
export const Login = ({switchForm}) => {
    // state with data
    const [data, setData] = useState({email: "", password: ""})

    // state with incorrect login data
    const [invalid, setInvalid] = useState("")
    // changing data by inputs change
    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // login
    const handleLogin = (e) => {
        e.preventDefault()
        auth().signInWithEmailAndPassword(data.email, data.password)
            .then(() => {
                // Signed in
                console.log("successfully logged in");

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
                setInvalid("Niepoprawny login lub hasło")
            });
    }

    // checking if the received props is a function
    const handleSwitchForm = () => {
        if (typeof switchForm === "function") {
            return switchForm()
        }
    }

    return <Form>
        <h1>Login</h1>
        <FormInvalid><strong>{invalid}</strong></FormInvalid>
        <FormElement>
            <i className="fas fa-at"/>
            <input type="email" placeholder="E-mail" onChange={handleChangeData} value={data.email} name="email"/>
        </FormElement>
        <FormElement right>
            <input type="password" placeholder="Password" onChange={handleChangeData} value={data.password}
                   name="password"/>
            <i className="fas fa-lock-open"/>
        </FormElement>

        <button onClick={handleLogin}>Login</button>

        <FormElement>
            <strong onClick={handleSwitchForm}>Create account</strong>
            <Link to="/password-reset">Forgot password?</Link>
        </FormElement>
    </Form>
}