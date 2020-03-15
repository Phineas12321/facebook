import React, {useState} from 'react'
import Header from '../header/Header'
import './other.scss'

function Other(){

    let [n, setN] = useState(0)

    return(
        <div className='other' >
            <Header/>
            <h1>{`you clicked this button ${n} times`}</h1>
            <button className='other-button' onClick={()=>setN(n+1)}>click it!</button>
        </div>
    )
}
  
export default Other