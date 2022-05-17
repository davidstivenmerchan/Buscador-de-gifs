import React, { useState, useEffect, Fragment} from "react"
import { getGifs } from "../helpers/getGifs"
import {GifGridItem} from './GifGridItem'
export const GifGrid = ( {category}) => {

    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs(category)
            .then(img => setImages(img))
    }, [category])

    

    return(
        <Fragment>
        <h3>{category}</h3>
        <div className="card-grid">
            
               {
                   images.map( img =>(
                      <GifGridItem 
                      key={img.id}  
                      {...img}
                        
                        />
                   ))
               }
        </div>
        <hr/>
        </Fragment>
        
    )
}

