import {HeaderMsg, FooterMsg} from "../components/Common/WelcomeMsg"
import React, {useState, useEffect, useRef} from "react"
import {Form, Button, Message, Segment, TextArea, Divider} from "semantic-ui-react"
import CommonInputs from "../components/Common/CommonInputs"
import ImageDropDiv from "../components/Common/ImageDropDiv"

const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;

function Signup() {

    const [user, setUser] = useState({
        name:"",
        email:"",
        password:"",
        bio:"",
        facebook:"",
        youtube:"",
        twitter:"",
        instagram:""
    });
    
    const {name, email, password, bio} = user

    const [showSocialLinks, setShowSocialLinks] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [errorMsg, setErrorMsg] = useState(null)

    const [username, setUsername] = useState("")
    const [usernameLoading, setUsernameLoading] = useState(false)
    const [usernameAvailable, setUsernameAvailable] = useState(false)
    const [formLoading, setFormLoading] = useState(false)

    const [media, setMedia] = useState(null)
    const [mediaPreview, setMediaPreview] = useState(null)
    const [highlighted, setHighlighted] = useState(false)

    const inputRef = useRef()

    const [submitDisabled, setSubmitDisabled] = useState(true)

    useEffect(()=> {
        const isUser = Object.values({name, email, password, bio}).every(item=>Boolean(item))

        isUser? setSubmitDisabled(false):setSubmitDisabled(true)
    }, [user])

    const handleSubmit = e => e.preventDefault()
    const handleChange = (e) => {
        const {name, value, files} = e.target
        if(name === "media"){
            setMedia(files[0])
            setMediaPreview(URL.createObjectURL(files[0]))
        }
        setUser(prev => ({ ...prev, [name]:value}))
    }
    return (
        <>
        <HeaderMsg />

        <Form loading={formLoading} error={errorMsg!==null} onSubmit={handleSubmit}>
        <Message error header="Oops!" content={errorMsg} onDismiss={()=>setErrorMsg(null)} />

        <Segment>
        <ImageDropDiv mediaPreview={mediaPreview} setMediaPreview={setMediaPreview} setMedia={setMedia} highlighted={highlighted} setHighlighted={setHighlighted} inputRef={inputRef} handleChange={handleChange}/>
            <Form.Input label="Name" placeholder="Name" name="name" value={name} onChange={handleChange} fluid icon="user" iconPosition="left" required/>
            <Form.Input label="Email" placeholder="Email" name="email" value={email} onChange={handleChange} fluid icon="envelope" iconPosition="left" type="email" required/>
            <Form.Input label="Password" placeholder="Password" name="password" value={password} onChange={handleChange} fluid icon={{name:"eye", circular:true, link:true, onClick:()=>setShowPassword(!showPassword)}} iconPosition="left" type={showPassword?"text":"password"} required/>
            <Form.Input loading={usernameLoading} error={!usernameAvailable} required label="Username" placeholder="Username" value={username}
             onChange={e=>{
                setUsername(e.target.value);
                if(regexUserName.test(e.target.value)){
                    setUsernameAvailable(true)
                }else{
                    setUsernameAvailable(false)
                }
                }} fluid icon={usernameAvailable?"check":"close"} iconPosition="left"/>
            
            <CommonInputs user={user} showSocialLinks={showSocialLinks} setShowSocialLinks={setShowSocialLinks} handleChange={handleChange} />

            <Divider hidden />

            <Button icon="signup" content="Signup" type="submit" color="orange" disabled={submitDisabled || !usernameAvailable} />
        </Segment>

        </Form>
        <FooterMsg />
        </>
    )
}

export default Signup
