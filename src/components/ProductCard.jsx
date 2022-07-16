import React from 'react';
import '../css/ProductCard.css';
import del from '../Assets/delete-icon.svg'
import edit from '../Assets/edit-icon.svg'
import fav from '../Assets/star.svg'

//  creating product card

const ProductCard = (props) => {
    const  product  = props.product;

    return(
        <>
        <tbody>
            <tr>
            <th scope="row" className='primary'>{product.sku}</th>
            <td className='td-primary'>{product.image}</td>
            <td className='td-primary'>{product.name}</td>
            <td className='td-primary'>{product.price}</td>
            <td className='td-primary'>
                <button className='btn'>
                <img src={del} alt='delete icon'></img>
                </button>
                <button className='btn'>
                <img src={edit} alt='edit icon'></img>
                </button>
                <button className='btn'>
                <img src={fav} alt='favourite icon'></img>
                </button>
            </td>
            </tr>
        </tbody>
    </>
    )
};

export default ProductCard;
