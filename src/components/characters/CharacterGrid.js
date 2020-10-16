import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading} ) => {

    return (isLoading === true) ? 
        <section>
            <Spinner items={items} isLoading={isLoading} />
         </section> : (
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
