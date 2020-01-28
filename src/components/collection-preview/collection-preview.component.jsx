import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';


const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {items.filter((item, index) => index < 4)
                .map(({ id, ...otherItemsProps }) => (
                    <CollectionItem key={id}{...otherItemsProps} />
                ))}
        </div>
    </div>
);


export default CollectionPreview;

