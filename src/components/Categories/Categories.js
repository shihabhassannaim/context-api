import React, { useContext, useEffect, useState } from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';
import { CategoryContext } from '../../App';

const  AllProducts = [
    {name : 'lenovo' , category : 'laptop'} ,{name : 'asus' , category : 'laptop'} , {name : 'dell' , category : 'laptop'} ,
    {name : 'xiaomi' , category : 'Mobile'} ,{name : 'Pixel' , category : 'Mobile'} , {name : 'samsung' , category : 'Mobile'} ,
    {name : 'lenovo' , category : 'Camera'} ,{name : 'Nikkon' , category : 'Camera'} , {name : 'sony' , category : 'Camera'} 
]

const Categories = () => {
    const [category]= useContext(CategoryContext);
    const [products , setProducts]= useState([]);
    useEffect(()=>{
        console.log({category});
        const matchedProducts = AllProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    } , [category])
    return (
        <div>
            <h1>This is Categories: {category}</h1>
            {
                products.map(pd =>  <CategoryDetail product = {pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;