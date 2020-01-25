import React, { PureComponent } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {getPostDetail} from './../../actions/posts'
import { connect } from "react-redux";
import VoteComment from "./../VoteComment"

const StyledCard = styled(Card)`
  margin-bottom: 15px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

class CommentCard extends PureComponent {



  render(){
    return (
      <StyledCard>
        <CardActionArea>
          <CardContent>
            
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.commentData.username}
            </Typography>
            
            <Typography variant="body2" color="textSecondary" component="p">
            {this.props.commentData.text}
            </Typography>
          </CardContent>
        </CardActionArea>

        <StyledCardActions>
        <VoteComment
            votes={this.props.commentData.votesCount}
            voteDirection={this.props.commentData.userVoteDirection}
            idComment={this.props.commentData.id}
            idPost={this.props.postId}
          />
          
        </StyledCardActions>
      </StyledCard>
      )
  }
}

function mapDispatchToProps(dispatch){
  return{
    goToPost: (idPost) => dispatch(getPostDetail(idPost))
  }
} 

export default connect(null,
  mapDispatchToProps)(CommentCard);
