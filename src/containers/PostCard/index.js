import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const StyledCard = styled(Card)`
  margin-bottom: 15px;
`;

const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

function PostCard(props) {
  return (
    <StyledCard>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.postData.title}
            {props.postData.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.postData.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <StyledCardActions>
        <Button size="small" color="primary">
          {props.postData.votesCount}
        </Button>
        <Button size="small" color="primary">
          {props.postData.commentsNumber}
        </Button>
      </StyledCardActions>
    </StyledCard>
    )
}

export default PostCard;