import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from '@mui/material';
import { orderDate, orderHeigth, orderLikes, orderWidth } from '../../redux/actions/actions';

const SelectOrder = () => {
    const [heigth, setHeigth] = useState('')
    const [width, setWidth] = useState('')
    const [likes, setLikes] = useState('')
    const [date, setDate] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(orderHeigth(e.target.value))
        setHeigth(e.target.value)
    }

    const handleWidth = (e) => {
        e.preventDefault()
        dispatch(orderWidth(e.target.value))
        setWidth(e.target.value)
    }

    const handleLikes = (e) => {
        e.preventDefault()
        dispatch(orderLikes(e.target.value))
        setLikes(e.target.value)
    }

    const handleDate = (e) => {
        e.preventDefault()
        dispatch(orderDate(e.target.value))
        setDate(e.target.value)
    }

    return (
        <div>
            <Typography variant='subttitle2' sx={{ color: '#777777', marginLeft: '30px' }}>Order your photos by heigth, width, likes or date.</Typography>
            <Box sx={{ minWidth: 120, marginLeft: '30px', marginTop: '20px' }}>
                <FormControl sx={{ width: '200px', marginRight: '30px' }}>
                    <InputLabel id="demo-simple-select-label">Height</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={heigth} label="Height" onChange={handleChange}>
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='heigth+'>+ Heigth</MenuItem>
                        <MenuItem value='heigth-'>- Height</MenuItem>
                    </Select>
                </FormControl>

                {/* WIDTH */}
                <FormControl sx={{ width: '200px', marginRight: '30px' }}>
                    <InputLabel id="demo-simple-select-label">Width</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={width} label="Width" onChange={handleWidth}>
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='width+'>+ Width</MenuItem>
                        <MenuItem value='width-'>- Width</MenuItem>
                    </Select>
                </FormControl>

                {/* LIKES */}
                <FormControl sx={{ width: '200px', marginRight: '30px' }}>
                    <InputLabel id="demo-simple-select-label">Likes</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={likes} label="Likes" onChange={handleLikes}>
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='likes+'>+ Likes</MenuItem>
                        <MenuItem value='likes-'>- Likes</MenuItem>
                    </Select>
                </FormControl>

                {/* FECHA */}
                <FormControl sx={{ width: '200px', marginRight: '30px' }}>
                    <InputLabel id="demo-simple-select-label">Date</InputLabel>
                    <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} label="Date" onChange={handleDate}>
                        <MenuItem value='all'>All</MenuItem>
                        <MenuItem value='new'>Newest</MenuItem>
                        <MenuItem value='old'>Oldest</MenuItem>
                    </Select>
                </FormControl>

            </Box>
        </div>
    )
}

export default SelectOrder