import React from 'react'

class Login extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <section>
                    <h1>
                        facebook or whatever
                    </h1>
                    <div>
                        <input placeholder='Email' type='email'/>
                        <input placeholder='Password' type='password'/>
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
                        <input placeholder='First Name'/>
                        <input placeholder='LastName'/>
                        <input placeholder='Email' type='email'/>
                        <input placeholder='Password' type='password'/>
                    </div>
                    
                    <button>Sign up</button>
                </section>
            </div>
        )
    }
}

export default Login