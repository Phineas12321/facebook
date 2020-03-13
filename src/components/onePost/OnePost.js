import React from 'react'
import './onePost.scss'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import axios from 'axios'

class OnePost extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            post: {},
            isEdit: false,
            post_content: this.props.post.post_content
        }
    }

    componentDidMount() {
        this.setState({isEdit: false})
      }

      postInput = (e) => {
        console.log(this.state.content)
        this.setState({content: e.target.value})
      }

      editPost = () => {
        const {post_id} = this.props.post
        const {post_content} = this.state
        axios.put(`/api/posts/${post_id}`, {post_content}).then(() => {
            this.setState({isEdit: false})
            this.props.handleGetPosts()
        }).catch(err => console.log(err))
      }

      deletePost = () => {
          const {post_id} = this.props.post
          axios.delete(`/api/posts/${post_id}`).then(()=>{
              this.setState({isEdit: false})
              this.props.handleGetPosts()
          }).catch(err => console.log(err))
      }

    render(){

        return(
            <div>
                {this.props.post.user_id === this.props.user.user_id ? (
                    <section className='post'>
                        <div className='post-top'>
                            <div className='post-top-first'>
                                <div className='post-pic'></div>
                                <p>
                                    {this.props.post.first_name}
                                </p>
                            </div>
                                <button className='one-post-button' onClick={()=>this.setState({isEdit: !this.state.isEdit})}>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </button>
                            
                        </div>
                        {this.state.isEdit ?  (
                            <>
                                <button onClick={()=>this.deletePost()} >delete</button>
                                <button onClick={()=>this.editPost()} >edit</button>
                                <textarea className='post-edit' defaultValue={this.props.post.post_content} onChange={(e)=> this.setState({post_content: e.target.value})} ></textarea>
                                {console.log(this.state.content)}
                            </>
                        ) : (
                            <p className='post-content'>
                                {this.props.post.post_content}
                            </p>
                        )}
                        
                    </section>
                    
                ) : (
                    <section className='post'>
                        <div className='post-top'>
                            <div className='post-top-first'>
                                <div className='post-pic'></div>
                                <p>
                                    {this.props.post.first_name}
                                </p>
                            </div>
                        </div>
                        <p className='post-content'>
                            {this.props.post.post_content}
                        </p>
                    </section>
                )}
                <section className='filler'></section>
            </div>
        )
    }
    
}

const mapStateToProps = reduxState => {
    const {user} = reduxState
    return {user}
}

export default withRouter(connect(mapStateToProps)(OnePost))