import React, {useState} from 'react'
//import axios from 'axios'
//import {connect} from 'react-redux'

function Login(props){

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

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

    return(
        <div>
            <section>
                <h1>
                    facebook or whatever
                </h1>
                <div>
                    <input placeholder='Email' type='email' onChange={emailInput} />fddd
                    <input placeholder='Password' type='password' maxLength='20' onChange={passwordInput} />
                </div>
                <div>
                    <button>Log In</button>
                </div>

            </section>
            <section>
                <h1>
                    Create a New Account
                </h1>
                <div>
                    <input placeholder='First Name' onChange={firstNameInput} />
                    <input placeholder='LastName' onChange={lastNameInput} />
                    <input placeholder='Email' type='email' onChange={emailInput} />
                    <input placeholder='Password' type='password' maxLength='20' onChange={passwordInput} />
                </div>
                
                <button>Sign up</button>
            </section>
        </div>
    )
}

export default Login