import React, { Component } from "react";
import styled from "styled-components";
import PostCard from "./../PostCard"
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import CommentCard from "./../CommentCard"

const PostWrapper = styled.form`
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
  }


  componentDidMount() {
    console.log(this.props.postDetail.comment)
  }


  handleFieldChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  };

  handleOnSubmit = event => {
    event.preventDefault();
    if (this.state.commentText !== '' ) {
      const comment = {
        text: this.state.commentText,
      }
      // colocar dispatch aqui
      this.setState({ postText: '', title: '' })
    }
  };
  render() {
    let pageToRender 
    if (this.props.postDetail) {
        pageToRender =  
        <PostWrapper>
        <PostContainer>
            <PostCard  postData={this.props.postDetail} />
        </PostContainer>
        <PostContainer>
            <CreatePostContainer onSubmit={this.handleOnSubmit}>
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
            {
            this.props.postDetail.comments.map( comment => (
              <CommentCard key={comment.id} commentData={comment} />
            )
            )} 
        </PostContainer>
       
  
    </PostWrapper>
    } else {
      pageToRender =
      <PostWrapper>
        <PostContainer>
            <PostCard  postData={this.props.postDetail} />
        </PostContainer>
        <PostContainer>
            <CreatePostContainer onSubmit={this.handleOnSubmit}>
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
           
        </PostContainer>
        </PostWrapper>
    }
    return (pageToRender

    );
  }
}

function mapStateToProps(state) {
  return {
    postDetail: state.posts.postDetailArr
  }
}
export default connect(
  mapStateToProps)(PostPage);
