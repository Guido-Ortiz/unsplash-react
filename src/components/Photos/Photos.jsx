import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Photo from '../Photo/Photo';

const Photos = () => {
  const photos = useSelector(state => state.photos)
  console.log(photos)
  return (
    <div>
      <Header title='Unsplash' subtitle='Internets photo source' />
      <div style={{border: '1px solid red'}}>
        {
          photos
            ? 
              photos.results.map(e => {
                return(
                  <div key={e.id}>
                    <Photo id={e.id} />
                  </div>
                )
              })
            
            : <p>no hay fotos yet</p>
        }
      </div>
    </div>
  )
}

export default Photos