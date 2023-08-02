import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const Shipment = () => {
    const [category , setCategory] = useContext(CategoryContext);
    return (
        <div>
            <h2>Shipment section</h2>
            <button onClick={()=> setCategory(category)}>Increment from Shipment</button>
        </div>
    );
};

export default Shipment;