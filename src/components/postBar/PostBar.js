import React, {useState} from 'react'
import './friends.scss'

function PostBar(){

    const [n, setN] = useState(0)

    return(
        <div className='friends' >
            
            <p className='friends-invisible-text'>_________________</p>
        </div>
    )
}
  
export default PostBar