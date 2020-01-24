import React, { PureComponent } from 'react';
import styled from 'styled-components';
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

class PostCard extends PureComponent {

  render(){
    return (
      <StyledCard>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.postData.title}
              {this.props.postData.username}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            {this.props.postData.text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <StyledCardActions>
          <Button size="small" color="primary">
            {this.props.postData.votesCount}
          </Button>
          <Button size="small" color="primary">
            {this.props.postData.commentsNumber}
          </Button>
        </StyledCardActions>
      </StyledCard>
      )
  }
}

export default PostCard;