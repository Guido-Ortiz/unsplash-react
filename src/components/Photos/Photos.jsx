import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
import Photo from '../Photo/Photo';
import s from './Photos.module.css';

const Photos = () => {
  const photos = useSelector(state => state.photos)
  
  return (
    <div>
      <Header title='Unsplash' subtitle='Internets photo source' />
        {
          photos
            ? <div className={s.container}>

              {photos.results?.map(e => {
                return(
                  <div key={e.id}>
                    <Photo id={e.id} title={e.description} description={e.alt_description} width={e.width} heigth={e.height} likes={e.likes} url_full={e.urls.full} url_thumb={e.urls.thumb}  />
                  </div>
                )
              })}
            
              </div>
            : <p>no hay fotos yet</p>
        }
    </div>
  )


  
}

export default Photos