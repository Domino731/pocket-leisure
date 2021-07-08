//This component is responsible for logging with firebase
import {Form, FormElement, FormInvalid} from "../../styled-components/elements/user-form/user-form";
import {useEffect, useState} from "react";
import {auth} from "../../firebase/firebase";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";

import {createUserDatabase} from "../../firebase/createUserDatabase";
import {userRegisterValidate} from "../../functions/userRegisterValidate";
// props //
/* @param  switchForm function that switch form to login
 */
export const Register = ({switchForm}) => {
    // state with data
    const [data, setData] = useState({email: "", password: "", passwordRepeat: "", username: ""})

    // state with flag, which enables the display of a button
    const [flag, setFlag] = useState(false)

    // state with information on incorrectly entered register data
    const [invalid, setInvalid] = useState({email: "", password: ""})


    //checking that the data entered are correct and of the correct length
    useEffect(() => {
        if (data.password === data.passwordRepeat && data.email.length > 6 && data.username.length >= 4) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }, [data])

    // changing data by inputs change
    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
        console.log(value.length)
    }


    // register
    const handleRegister = (e) => {
        e.preventDefault()

        auth().createUserWithEmailAndPassword(data.email, data.password)
            .then((userCredential) => {

                // it is an id so that user documents can be downloaded
                const id = generateUniqueID()

                // creating user database in firestore
                createUserDatabase(data.username, id)
                // create a new user with name and id
                const user = userCredential.user;
                return user.updateProfile({
                    displayName: data.username,
                    dataId: id
                })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //setting invalid state by error code
                userRegisterValidate(errorCode, errorMessage, setInvalid)
            })
    }

    // checking if the received props is a function, and switching form if it is
    const handleSwitchForm = () => {
        if (typeof switchForm === "function") {
            return switchForm()
        }
    }

    return <Form>
        <h1>Register</h1>

        <FormInvalid>
            <strong>{invalid.email}</strong>
            <strong>{invalid.password}</strong>
        </FormInvalid>
        <FormElement>
            <i className="fas fa-at"/>
            <input type="email" placeholder="E-mail" onChange={handleChangeData} value={data.email} name="email"/>
        </FormElement>

        <FormElement right>
            <input type="password" placeholder="Password - 6 character minimum" onChange={handleChangeData} value={data.password}
                   name="password" maxLength="29"/>
            <i className="fas fa-lock-open"/>
        </FormElement>

        <FormElement right>
            <input type="password" placeholder="Repeat password" onChange={handleChangeData} value={data.passwordRepeat}
                   name="passwordRepeat"/>
            <i className="fas fa-lock"/>
        </FormElement>

        <FormElement>
            <i className="fas fa-feather"/>
            <input type="text" placeholder="Username" onChange={handleChangeData} value={data.username}
                   name="username"  maxLength="24"/>
        </FormElement>


        {flag && <button onClick={handleRegister}>Register</button>}


        <FormElement>
            <strong onClick={handleSwitchForm}>Already have an account?</strong>
        </FormElement>
    </Form>
}