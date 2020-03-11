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
            isEdit: false
        }
    }

    componentDidMount() {
        this.getPost()
      }

      postInput = (e) => {
        this.setState({post_content: e.target.value})
      }
    
      getPost = () => {
          console.log(this.props)
        const { post_id } = this.props.post
        axios
          .get(`/api/post/${post_id}`)
          .then(res => {
            this.setState({ post: this.props.post })
          })
          .catch(err => console.log(err))
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
                            <textarea className='post-edit' defaultValue={this.props.post.post_content} onChange={()=>this.postInput} ></textarea>
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