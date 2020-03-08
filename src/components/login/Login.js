import React, {useState} from 'react'
import axios from 'axios'
import { getUser } from '../../redux/reducer'
import './login.scss'
//import {connect} from 'react-redux'

function Login(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    
    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const firstNameInput = (e) => {
        setFirstName(e.target.value)
    }

    const lastNameInput = (e) => {
        setLastName(e.target.value)
    }

    const handleRegister = () => {
        axios.post('/api/register', {email: email, password: password, first_name: first_name, last_name: last_name}).then(res =>{
            getUser(res.data)
            props.history.push('/home')
        }).catch(err => console.log(`just so you know, ${err}`))
    }

    const handleLogin = () => {
        axios.post('/api/login', {email: email, password: password}).then(res => {
            getUser(res.data)
            props.history.push('./home')
        }).catch(err => console.log(`didn't you hear, ${err}`))
    }

    return(
        <div>
            <section className='login-login'>
                <h1>
                    facebook or whatever
                </h1>
                <div className='login-inputs'>
                    <input className='l-in' placeholder='Email' type='email' onChange={emailInput} />
                    <input className='l-in' placeholder='Password' type='password' maxLength='20' onChange={passwordInput} />
                </div>
                <div>
                    <button className='login-button' onClick={handleLogin} >Log In</button>
                </div>

            </section>
            <section className='login-register'>
                <h1>
                    Create New Account
                </h1>
                <div className='login-register-inputs'>
                    <input className='lr-in' placeholder='First Name' onChange={firstNameInput} />
                    <input className='lr-in' placeholder='Last Name' onChange={lastNameInput} />
                    <input className='lr-in' placeholder='Email' type='email' onChange={emailInput} />
                    <input className='lr-in' placeholder='Password' type='password' maxLength='20' onChange={passwordInput} />
                </div>
                <button className='login-register-button' onClick={handleRegister} >Sign Up</button>
            </section>
        </div>
    )
}

export default Login