import React, {useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {register, login} from '../../redux/reducer'
import './login.scss'
import {connect} from 'react-redux'

function Login(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    //const [registered, setRegistered] = useState(true)
    
   
    return(
        <div>
            <section className='login-login'>
                <h1>
                    facebook or whatever
                </h1>
                <div className='login-inputs'>
                    <input className='l-in' placeholder='Email' type='email' onChange={e=>setEmail(e.target.value)} />
                    <input className='l-in' placeholder='Password' type='password' maxLength='20' onChange={e=>setPassword(e.target.value)} />
                </div>
                <div>
                    <Link to='/home' ><button className='login-button' onClick={()=>props.login(email, password)} >Log In</button>
                    </Link>
                </div>

            </section>
            <section className='login-register'>
                <h1>
                    Create New Account
                </h1>
                <div className='login-register-inputs'>
                    <input className='lr-in' placeholder='First Name' onChange={e=>setFirstName(e.target.value)} />
                    <input className='lr-in' placeholder='Last Name' onChange={e=>setLastName(e.target.value)} />
                    <input className='lr-in' placeholder='Email' type='email' onChange={e=>setEmail(e.target.value)} />
                    <input className='lr-in' placeholder='Password' type='password' maxLength='20' onChange={e=>setPassword(e.target.value)} />
                </div>
                <Link to='/home'>
                <button className='login-register-button' onClick={()=>{props.register(email, password, first_name, last_name)
                axios.post(`/api/email`, {email})}} >Sign Up</button>
                </Link>
            </section>
        </div>
    )
}

const mapStateToProps = reduxState => {
    return {
        reducer: reduxState.reducer
    }
}

export default connect(mapStateToProps, {login, register})(Login)