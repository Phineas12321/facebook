import React, {useState} from 'react'
import './other.scss'

function PostBar(){

    const [n, setN] = useState(0)

    return(
        <div className='friends' >
            
            <p className='friends-invisible-text'>_________________</p>
        </div>
    )
}
  
export default PostBar