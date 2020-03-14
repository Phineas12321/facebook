import React, {useState, useEffect} from 'react'
import './onePost.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'
  
function OnePost(props){

    //const [post, setPost] = useState({})
    const [isEdit, setIsEdit] = useState(false)
    const [post_content, setPostContent] = useState(props.post.post_content)

    useEffect(() => {
        setIsEdit(false)
    }, [])

    const editPost = () => {
    const {post_id} = props.post
    axios.put(`/api/posts/${post_id}`, {post_content}).then(() => {
        setIsEdit(false)
        props.handleGetPosts()
    }).catch(err => console.log(err))
    }

    const deletePost = () => {
        const {post_id} = props.post
        axios.delete(`/api/posts/${post_id}`).then(()=>{
            setIsEdit(false)
            props.handleGetPosts()
        }).catch(err => console.log(err))
    }

    return(
        <div>
            {props.post.user_id === props.user.user_id ? (
                <section className='post'>
                    <div className='post-top'>
                        <div className='post-top-first'>
                            <div className='post-pic'></div>
                            <p>
                                {props.post.first_name}
                            </p>
                        </div>
                            <button className='one-post-button' onClick={()=>setIsEdit(!isEdit)}>
                                <li></li>
                                <li></li>
                                <li></li>
                            </button>
                        
                    </div>
                    {isEdit ?  (
                        <>
                            <button onClick={()=>deletePost()} >delete</button>
                            <button onClick={()=>editPost()} >edit</button>
                            <textarea className='post-edit' defaultValue={props.post.post_content} onChange={(e)=> setPostContent(e.target.value)} ></textarea>
                        </>
                    ) : (
                        <p className='post-content'>
                            {props.post.post_content}
                        </p>
                    )}
                    
                </section>
                
            ) : (
                <section className='post'>
                    <div className='post-top'>
                        <div className='post-top-first'>
                            <div className='post-pic'></div>
                            <p>
                                {props.post.first_name}
                            </p>
                        </div>
                    </div>
                    <p className='post-content'>
                        {props.post.post_content}
                    </p>
                </section>
            )}
            <section className='filler'></section>
        </div>
    )
}
    


const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps)(OnePost))