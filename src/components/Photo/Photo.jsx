import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto } from '../../redux/actions/actions';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Chip, Stack, Tooltip, Snackbar, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Photo = ({ id, title, description, width, heigth, likes, url_full, url_thumb }) => {

  const dispatch = useDispatch()
  const favorites = useSelector(state => state.favorites)

  const liked = new Date().toLocaleDateString('es-SP')

  const handleClick = (id) => {
    if(!favorites.find(e => e.id === id)){
      // setInput({
      //     ...input,
      //     diets: [...input.diets, e.target.value]

      // })
      // setErrors(validate({
      //     ...input,
      //     [e.target.name]: e.target.value
      // })) 
      setOpen(true)
    dispatch(addPhoto({ id, title, description, width, heigth, likes, url_full, url_thumb, liked }))
  }
  else{
      alert('Photo already selected!')
  }
    // setOpen(true)
    // dispatch(addPhoto({ id, title, description, width, heigth, likes, url_full, url_thumb, liked }))
  }

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
        <IconButton size="small" aria-label="close"  color="inherit" onClick={handleClose}>
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Card sx={{ width: {md: 300, xs: 265}, borderRadius: '4px', margin: '26px', boxShadow: '0px 0px 0px 1px #E0E0E0' }}>
      <CardMedia component="img" height="194" image={url_thumb} alt={description} />
      <CardHeader title={description ? description : 'Photo'} subheader={"September 14, 2016"} sx={{height: 120 }} />
      <CardContent sx={{padding: '0 10px'}}>
        <Stack direction="row" spacing={1}>
          <Chip label={`Height: ${heigth}`} sx={{ background: '#E8EAF6', color: '#3F51B5', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
          <Chip label={`Width: ${width}`} sx={{ background: '#E8EAF6', color: '#673AB7', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
        </Stack>
        <Typography variant='subtitle2' sx={{color: '#777777', marginLeft: '5px', marginTop: '10px'}}>{likes} Likes</Typography>
      </CardContent>

      <CardActions disableSpacing>
        {/* <Tooltip title={`Likes: ${likes}`}>
          <IconButton>
            <FavoriteIcon />
          </IconButton>
        </Tooltip> */}
        <Tooltip title="Add to My Photos" onClick={() => handleClick(id)}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Tooltip>
      </CardActions>

      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} message="Added to my photos" action={action} sx={{width: {xs: 200}}} />

    </Card>
  );
}

export default Photo