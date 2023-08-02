import React, { useContext, useState } from 'react';
import { CategoryContext } from '../../App';

const Head = (props) => {
    const [category , setCategory] = useContext(CategoryContext)
    return (
        <div>
            <h1>This is header.{category}</h1>
            <button onClick={()=> setCategory('Laptop')}>laptop</button>
            <button onClick={()=> setCategory( 'Mobile')}>Mobile</button>
            <button onClick={()=> setCategory('Camera')}>Camera</button>
        
        </div>
    );
};

export default Head;