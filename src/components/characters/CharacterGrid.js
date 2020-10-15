import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading} ) => {

    return (items.length === 0 || items.length >= 100) ? (<Spinner items={items} />) : (
        <section className='cards'>
            {items.map(item => {
                if (item.imageUrl === undefined ) {
                    return;
                } else {
                    return(
                    <CharacterItem key={item.multiverseid} item={item}></CharacterItem>
                    )
                }
            })}
        </section>
    )
}

export default CharacterGrid
