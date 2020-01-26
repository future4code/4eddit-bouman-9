import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "./../PostCard"
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CommentCard from "./../CommentCard"
import { createComment } from './../../actions/posts'
import { push } from "connected-react-router";
import { routes } from '../Router';
import Header from '../Header';

const PostWrapper = styled.div`
  width: 100%;
  height: 70vh;
  gap: 30px;
  place-content: top;
  justify-items: center;
  align-items:center;
  display: flex;
  flex-direction: column;
  margin-top:30px;
`;

const CreatePostContainer = styled.form`
  background-color:rgb(255, 255, 255);
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  width: 500px;
  display: flex;
  margin-bottom: 30px;
  padding: 8px;
`;

const PostContainer = styled.div`
  width:500px;
`;

class PostPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      commentText:'',
    }
    if (!this.props.postDetail) {
      this.props.goToFeedPage()
    }
  }

  handleFieldChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  handleOnSubmit = (id, event) => {
    event.preventDefault();
    if (this.state.commentText !== '' ) {
      const comment = {
        text: this.state.commentText,
      }
      this.props.getComment(id, comment)
      this.setState({ commentText: '' })
    } else {
      window.alert("Digite seu comentário.")
    }
  };

  render() {
    let pageToRender 
    if (this.props.postDetail) {
      pageToRender = (
        <div>
          <Header />
          <PostWrapper>
            <PostContainer>
              <PostCard postData={this.props.postDetail} />
            </PostContainer>
            <PostContainer>
              <CreatePostContainer onSubmit={(e) => this.handleOnSubmit(this.props.postDetail.id, e)}>
                <TextField
                  name="commentText"
                  placeholder="Create Comment"
                  multiline
                  rows="5"
                  variant="standard"
                  fullWidth
                  onChange={this.handleFieldChange}
                  value={this.state.commentText}
                />
                <Button type="submit" style={{ marginLeft:"20px"}} >Post!</Button>   
              </CreatePostContainer>   
            </PostContainer>
            <PostContainer>
              { this.props.postDetail.comments && this.props.postDetail.comments.map( comments => (
                <CommentCard key={comments.id} postId={this.props.postDetail.id} commentData={comments} />
              ))} 
            </PostContainer> 
          </PostWrapper>
        </div>
      )
    } else {
      pageToRender = null
    }
    
    return(
      pageToRender
    );
  }
}

function mapStateToProps(state) {
  return {
    postDetail: state.posts.postDetailArr
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getComment: (postId, commentText) => dispatch(createComment(postId, commentText)),
    goToFeedPage: () => dispatch(push(routes.feed))
  }
} 

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);