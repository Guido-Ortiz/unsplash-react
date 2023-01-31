import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from '@mui/material';
import { orderDate, orderHeigth, orderLikes, orderWidth, resetFilters } from '../../redux/actions/actions';

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

    const handleReset = () => {
        window.location.reload()
        dispatch(resetFilters())
    }

    return (
        <Box sx={{ minWidth: 120, marginLeft: {xs: '20px', md: '60px'}, marginRight: {xs: '20px'},marginTop: '20px', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: {xs: 'space-between', md: 'flex-start'}, alignItems: {xs: 'center', md: 'flex-start'}}}>
            <FormControl sx={{ width: {md: '12.5rem', xs: '7rem'}, marginRight: {md: '30px', xs: '10px'}, marginBottom: {xs: '10px'} }}>
                <InputLabel id="demo-simple-select-label">Height</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={heigth} label="Height" onChange={handleChange} sx={{background: '#fff'}}>
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='heigth+'>+ Heigth</MenuItem>
                    <MenuItem value='heigth-'>- Height</MenuItem>
                </Select>
            </FormControl>

            {/* WIDTH */}
            <FormControl sx={{ width: {md: '12.5rem', xs: '7rem'}, marginRight: {md: '30px', xs: '10px'}, marginBottom: {xs: '10px'} }}>
                <InputLabel id="demo-simple-select-label">Width</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={width} label="Width" onChange={handleWidth} sx={{background: '#fff'}}>
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='width+'>+ Width</MenuItem>
                    <MenuItem value='width-'>- Width</MenuItem>
                </Select>
            </FormControl>

            {/* LIKES */}
            <FormControl sx={{ width: {md: '12.5rem', xs: '7rem'}, marginRight: {md: '30px', xs: '10px'}, marginBottom: {xs: '10px'} }}>
                <InputLabel id="demo-simple-select-label">Likes</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={likes} label="Likes" onChange={handleLikes} sx={{background: '#fff'}}>
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='likes+'>+ Likes</MenuItem>
                    <MenuItem value='likes-'>- Likes</MenuItem>
                </Select>
            </FormControl>

            {/* FECHA */}
            <FormControl sx={{ width: {md: '12.5rem', xs: '7rem'}, marginRight: {md: '30px', xs: '10px'}, marginBottom: {xs: '10px'} }}>
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} label="Date" onChange={handleDate} sx={{background: '#fff'}}>
                    <MenuItem value='all'>All</MenuItem>
                    <MenuItem value='new'>Newest</MenuItem>
                    <MenuItem value='old'>Oldest</MenuItem>
                </Select>
            </FormControl>

            <Button variant='contained' sx={{height: '50px', width: {md: '100px', xs: '100%'}, letterSpacing: '1px'}} onClick={handleReset}>Reset</Button>

        </Box>
    )
}

export default SelectOrder