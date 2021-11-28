import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Products from './Products';

const loadItems = async (orderType) => {
    try {
        const response = await axios.get(`http://localhost:5000/${orderType}`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
};

const Type = ({orderType}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        loadItems(orderType).then((v) => {
            setItems(v);
        });
    }, [orderType]);


    const ItemComponent = orderType === 'products' ? Products : null;

    const optionItems = items.map((item) => <ItemComponent
        key={item.name}
        name={item.name}
        imagePath={item.imagePath}
    />);

    return <div>{optionItems}</div>;
}
export default Type;