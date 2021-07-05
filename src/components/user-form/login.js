import {Form, FormElement} from "../../styled-components/elements/user-form/user-form";
import {useState} from "react";

export const Login = () => {
    const [data, setData] = useState({email: "", password: ""})
    const handleChangeData = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }));
    }
    const handleLogin = (e) => {
        e.preventDefault()
        console.log(data)
    }
    return <Form>
        <h1>Login</h1>
        <FormElement>
            <i>i</i>
            <input type="text" placeholder="E-mail" onChange={handleChangeData} value={data.email} name="email"/>
        </FormElement>
        <FormElement>
            <input type="text" placeholder="Password" onChange={handleChangeData} value={data.password}
                   name="password"/>
            <i>i</i>
        </FormElement>

        <button onClick={handleLogin}>Login</button>
        <strong>Create account</strong>
    </Form>
}