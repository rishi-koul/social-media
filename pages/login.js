import {HeaderMsg, FooterMsg} from "../components/Common/WelcomeMsg"
import React, {useState, useEffect} from "react"
import {Form, Button, Message, Segment, Divider} from "semantic-ui-react"
import {loginUser} from "../utils/authUser"

function Login() {
    const [user, setUser] = useState({
        email:"",
        password:"",
    });
    
    const {email, password} = user

    const [showPassword, setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)
    const [formLoading, setFormLoading] = useState(false)
    const [submitDisabled, setSubmitDisabled] = useState(true)

    useEffect(()=> {
        const isUser = Object.values({email, password}).every(item=>Boolean(item))

        isUser? setSubmitDisabled(false):setSubmitDisabled(true)
    }, [user])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUser(prev => ({ ...prev, [name]:value}))
    }

    const handleSubmit = async e => {
        e.preventDefault()
        setFormLoading(true)
        await loginUser(user, setErrorMsg, setFormLoading)
        setFormLoading(false)
    }
    return (
        <>
        <HeaderMsg />

        <Form loading={formLoading} error={errorMsg!==null} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={errorMsg} onDismiss={()=>setErrorMsg(null)} />

        <Segment>
        <Form.Input label="Email" placeholder="Email" name="email" value={email} onChange={handleChange} fluid icon="envelope" iconPosition="left" type="email" required/>
        <Form.Input label="Password" placeholder="Password" name="password" value={password} onChange={handleChange} fluid icon={{name:"eye", circular:true, link:true, onClick:()=>setShowPassword(!showPassword)}} iconPosition="left" type={showPassword?"text":"password"} required/>
        
        <Divider hidden />
        <Button icon="signup" content="Login" type="submit" color="orange" disabled={submitDisabled} />

        </Segment>

        </Form>

        <FooterMsg />
        </>
    )
}

export default Login
