import { useState } from "react";
import { Link } from "react-router-dom";

import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

import {
    ParentContainer, ChildDiv1, ChildDiv2, LoginForm, Title,
    Text, HrTag, InputsCon, InputDiv, LabelTag, InputTag, SupTag, Btn, SpanTag, Div, LoginBtn, LabelTag2
} from './StyledComponents'

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [isKeepMeLoggedinActive, setKeepMeLoggedinActive] = useState(false)
    
    const [ShowPassword, setShowPassword] = useState(false)

    const OnChangeCredentials = (value, key) => {
        setCredentials(prev => ({
            ...prev,
            [key]: value
        }))
    }

    const onLogin = () => {
        console.log(credentials)
    }

    return (
        <ParentContainer>
            <ChildDiv1>

                <LoginForm onSubmit={onLogin}>
                    <Title>Login</Title>
                    <Text>Enter your email and password to log in!</Text>
                    <HrTag></HrTag>

                    <InputsCon>
                        <InputDiv>
                            <LabelTag>Email<SupTag>*</SupTag></LabelTag>
                            <InputTag type="text" onChange={(e) => OnChangeCredentials(e.target.value, 'email')} />
                        </InputDiv>

                        <InputDiv>
                            <LabelTag>Password<SupTag>*</SupTag></LabelTag>
                            <InputTag type={ShowPassword ? 'text' : 'password'} onChange={(e) => OnChangeCredentials(e.target.value, 'password')} />
                            {ShowPassword ?
                                <Btn type="button" onClick={() => setShowPassword(false)}> <FaRegEye /> </Btn> :
                                <Btn type="button" onClick={() => setShowPassword(true)}> <FaRegEyeSlash /> </Btn>
                            }
                        </InputDiv>
                    </InputsCon>

                    <Link><SpanTag>Forget Password?</SpanTag></Link>
                    <Div>
                        <InputTag style={{ outline: 'none' }} type="checkbox" />
                        <LabelTag2>Keep me logged in</LabelTag2>
                    </Div>

                    <LoginBtn type="submit">Login</LoginBtn>

                </LoginForm>

            </ChildDiv1>

            <ChildDiv2>
                <Title>NOWIT SERVICES</Title>
            </ChildDiv2>
        </ParentContainer>
    )
}

export default Login