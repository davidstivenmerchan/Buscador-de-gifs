import React, { useState } from "react";
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one piece']);
    
    return(
        <div>
            <div className="nav">
                <h2>Gif-Shun</h2>
            </div>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <ol className="animate__animated animate__fadeInDown">
                {
                    categories.map(category => (
                       <GifGrid 
                            key={category}     
                            category={category}
                            
                        />
                    ))
                }
            </ol>
        </div>
    )

}