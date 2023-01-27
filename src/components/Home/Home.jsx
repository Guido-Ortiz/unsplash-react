import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPhotos, searchPhotos } from '../../redux/actions/actions';
import Navbar from '../Navbar/Navbar';
import Photos from '../Photos/Photos';

const Home = () => {
  const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(searchPhotos('office'))
  // }, [dispatch])

  return (
    <div>
      <Navbar />
     <Photos />
    </div>
  )
}

export default Home