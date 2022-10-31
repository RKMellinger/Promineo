import React from 'react'
import ReplyButton from './reply-button'
import LikeButton from '.like-button'
import Comment from './comment'

let e = React.createElement

export default class Post extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            comment: props.comments,
            context: props.context
        }
    }
  render(){
    let comments = []
    if(this.state.comments){
        for(let comment of this.state.comments){
            comments.push(<Comment {...comment}/>)
        }
    }
    return(
        <div className='card w-75'>
            <div className='card-holder bg-primary text-white'>
                Username and Time
            </div>
            <div className='card-body'>Content here</div>
            <div className='card-footer'>
                <LikeButton/>
                <ReplyButton/>
                {comments}
            </div>
        </div>
    )
    
}
}