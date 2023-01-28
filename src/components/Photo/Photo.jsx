import React from 'react';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography, Chip, Stack, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';

const Photo = ({ id, title, description, width, heigth, likes, url_full, url_thumb }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 300, borderRadius: '4px', margin: '26px', boxShadow: '0px 0px 0px 1px #E0E0E0'}}>
      {/* <CardHeader
        title={title ? title : 'Photo'}
        subheader="September 14, 2016"
      /> */}
      <CardMedia
        component="img"
        height="194"
        image={url_full}
        alt={description}
      />
      <CardHeader
        title={title ? title : 'Photo'}
        subheader="September 14, 2016"
      />
      <CardContent>
        {/* <Typography variant="body2" color="text.secondary">
          {description}
        </Typography> */}
        <Stack direction="row" spacing={1}>
          <Chip label={`Height: ${heigth}`} sx={{ background: '#E8EAF6', color: '#3F51B5', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
          <Chip label={`Width: ${width}`} sx={{ background: '#E8EAF6', color: '#673AB7', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        {/* <Stack direction="row" spacing={2} sx={{border: '1px solid red'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> 
        </IconButton>
          <Typography >{likes}</Typography>
        </Stack>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon /> {likes}
        </IconButton> */}
        <Tooltip title={`Likes: ${likes}`}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to My Photos">
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
        {/* <IconButton aria-label="share">
          <AddIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default Photo