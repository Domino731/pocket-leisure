//This component is responsible for logging with firebase
import {Form, FormElement} from "../../styled-components/elements/user-form/user-form";
import {useState} from "react";

// props //
// switchForm --> switch form to register
export const Register = ({switchForm}) => {
    // state with data
    const [data, setData] = useState({email: "", password: ""})

    // changing data by inputs change
    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    // register
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(data)
    }

    // checking if the received props is a function, and switching form if it is
    const handleSwitchForm = () => {
        if (typeof switchForm === "function") {
            return switchForm()
        }
    }

    return <Form>
        <h1>Register</h1>
        <FormElement>
            <i className="fas fa-at"/>
            <input type="text" placeholder="E-mail" onChange={handleChangeData} value={data.email} name="email"/>
        </FormElement>
        <FormElement>
            <input type="text" placeholder="Password" onChange={handleChangeData} value={data.password}
                   name="password"/>
            <i className="fas fa-lock-open"/>
        </FormElement>
        <FormElement>
            <input type="text" placeholder="Password" onChange={handleChangeData} value={data.password}
                   name="password"/>
            <i className="fas fa-lock"/>
        </FormElement>

        <button onClick={handleLogin}>Register</button>

        <FormElement>
            <strong onClick={handleSwitchForm}>Already have an account?</strong>
        </FormElement>
    </Form>
}