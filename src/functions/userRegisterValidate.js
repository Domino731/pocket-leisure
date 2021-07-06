//function that sets errors based on code

/*
@param code  state is set by this code
 @param msg  displaying msg and code in console
 @param set  state to set
 */
export const userRegisterValidate = (code, msg, set) => {
    if (code === "auth/invalid-email") {
        set(prev => ({...prev, email: "*E-mail is incorrect"}))
    }
    if (code === "auth/email-already-in-use") {
        set(prev => ({...prev, email: "*E-mail is already is use"}))
    }
    if (code === "auth/weak-password") {
        set(prev => ({...prev, password: "*Password should contain 6 characters"}))

    }
    console.log(code, msg)
}