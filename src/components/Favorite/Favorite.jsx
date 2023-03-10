import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { useDispatch } from 'react-redux';
import { editPhoto, removePhoto } from '../../redux/actions/actions';
import { Card, CardHeader, CardMedia, CardContent, CardActions, IconButton, Chip, Stack, Tooltip, Modal, Box, Typography, TextField, Button, } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import { FavoriteOutlined } from '@mui/icons-material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {md: 400, xs: 200},
    bgcolor: 'background.paper',
    border: '1px solid #007DED',
    boxShadow: 24,
    p: 4,
};


const Favorite = ({ id, title, description, width, heigth, likes, url_full, url_thumb, liked }) => {

    const [open, setOpen] = useState(false);
    const [newDescription, setNewDescription] = useState(title)
    
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => setOpen(false);

    const dispatch = useDispatch()

    const handleDelete = () => {
        setOpen(true)
        dispatch(removePhoto(id))
    }

    const handleEdit = () => {
        dispatch(editPhoto({ id, newDescription }))
        setOpen(false)
    }

    const handleDownload = () => {
        saveAs(url_full, 'image.jpg')
    }

    return (
        <div>
            <Card sx={{ width: {md: 300, xs: 265}, borderRadius: '4px', margin: '26px', boxShadow: '0px 0px 0px 1px #E0E0E0' }}>
                <CardMedia component="img" height="194" image={url_full} alt={description} />
                <CardHeader title={title ? title : 'Photo'} subheader={liked} sx={{height: 120 }} />
                <CardContent sx={{ padding: '0 10px' }}>
                    <Stack direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={1}>
                        <Chip label={`Height: ${heigth}`} sx={{
                            background: '#E8EAF6', color: '#3F51B5', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px'
                        }} />
                        <Chip label={`Width: ${width}`} sx={{ background: '#E8EAF6', color: '#673AB7', fontWeight: '400', fontSize: '13px', letterSpacing: '0,16px', lineHeight: '18px', padding: '6px 3px' }} />
                    </Stack>
                    <Stack direction="row" justifyContent="flex-start" alignItems="center" sx={{ color: '#777777', marginTop: '10px', padding: '5px' }}>
                        <FavoriteOutlined />
                        <Typography variant='subtitle2' sx={{ color: '#777777', marginLeft: '10px' }}>{likes}</Typography>
                    </Stack>
                </CardContent>

                <CardActions>
                    <Stack direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={2} sx={{ width: '100%' }}>
                        <Tooltip title='Remove from My Photos' onClick={handleDelete}>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Edit Photo description' onClick={handleOpen}>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Download Photo' onClick={handleDownload}>
                            <IconButton>
                                <DownloadIcon />
                            </IconButton>
                        </Tooltip>
                    </Stack>
                </CardActions>
            </Card>

            {/* MODAL */}
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">Edit Photo Description {id}</Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    <Stack direction='column' justifyContent='flex-start' alignItems='flex-start'>
                        <TextField fullWidth  variant='outlined' label='Description' name='newDescription' value={newDescription} onChange={e => setNewDescription(e.target.value)} sx={{margin: '20px 0'}} />
                        <Button variant="contained" onClick={handleEdit}>Edit Description</Button>
                    </Stack>

                </Box>
            </Modal>

        </div>
    );
}

export default Favorite