import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading} ) => {
    return (items.card === undefined) ? (<Spinner />) : (
        <section className='cards'>
            <CharacterItem key={items.card.multiverseid} item={items.card}></CharacterItem>
            {/* {items.map(item => (
                <CharacterItem key={item.char_id} item={item}></CharacterItem>
            ))} */}
        </section>
    )
}

export default CharacterGrid
