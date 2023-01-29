import React from 'react';
import { useDispatch } from 'react-redux';
import { addPhoto } from '../../redux/actions/actions';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Chip, Stack, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';

const Photo = ({ id, title, description, width, heigth, likes, url_full, url_thumb }) => {

  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(addPhoto({ id, title, description, width, heigth, likes, url_full, url_thumb }))
  }

  return (
    <Card sx={{ width: 300, borderRadius: '4px', margin: '26px', boxShadow: '0px 0px 0px 1px #E0E0E0' }}>

      <CardMedia component="img" height="194" image={url_full} alt={description} />
      {/* <CardHeader title={title ? title : 'Photo'} subheader="September 14, 2016" /> */}
      <CardHeader title={description ? description : 'Photo'} subheader="September 14, 2016" />
      <CardContent sx={{padding: '0px'}}>
        <Stack direction="row" spacing={1}>
          <Chip label={`Height: ${heigth}`} sx={{ background: '#E8EAF6', color: '#3F51B5', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
          <Chip label={`Width: ${width}`} sx={{ background: '#E8EAF6', color: '#673AB7', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
        </Stack>
      </CardContent>

      <CardActions disableSpacing>
        <Tooltip title={`Likes: ${likes}`}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add to My Photos" onClick={handleClick}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </CardActions>

    </Card>
  );
}

export default Photo