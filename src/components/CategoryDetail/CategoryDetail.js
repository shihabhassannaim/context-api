import React, { useContext } from 'react';
import Categories from './../Categories/Categories';
import { CategoryContext } from '../../App';

const CategoryDetail = (props) => {
    const {name} = props.product;
    return (
        <div>
            <h1>Category details</h1>
            <h5>selected Product : {name}</h5>
        </div>
    );
};

export default CategoryDetail;