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
                    <React.Fragment key={item.multiverseid}>
                        <CharacterItem item={item}></CharacterItem>
                    </React.Fragment>
                    )
                }
            })}
        </section>
    )
}

export default CharacterGrid
