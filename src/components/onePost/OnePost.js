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
            content: this.props.post.post_content
        }
    }

    componentDidMount() {
        this.getPost()
        this.setState({isEdit: false})
      }

      postInput = (e) => {
        console.log(this.state.content)
        this.setState({content: e.target.value})
      }
    
      getPost = () => {
        const { post_id } = this.props.post
        axios
          .get(`/api/post/${post_id}`)
          .then(res => {
            this.setState({ post: res.data })
          })
          .catch(err => console.log(err))
      }

      editPost = () => {
          console.log(this.props.post)
        const {post_id} = this.props.post
        axios.put(`/api/posts/${post_id}`, this.state.content).then(() => {
            this.getPost()
        }).catch(err => console.log(err))
      }

      deletePost = () => {
          const {post_id} = this.props.post
          axios.delete(`/api/posts/${post_id}`).then(()=>{
              this.getPost()
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
                                <textarea className='post-edit' defaultValue={this.props.post.post_content} onChange={(e)=> this.setState({content: e.target.value})} ></textarea>
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