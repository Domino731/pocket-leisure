// this component contains a login and registration form and the user can switch between them
import {Login} from "./Login";
import {Register} from "./Register";
import {Container} from "../../styled-components/general/general-styles";
import {useState} from "react";


export const UserForm = () => {
    // flag which allows switching between forms
    const [flag, setFlag] = useState(true)

    // switching form by changing flag
    const handleChangeFlag = () => {
        setFlag(!flag)
    }

    return <Container>
        {flag ? <Login switchForm={handleChangeFlag}/> : <Register switchForm={handleChangeFlag}/>}
    </Container>
}