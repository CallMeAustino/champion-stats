import React, { useState } from 'react'

const Search = ( { getQuery } ) => {
    const [text, setText] = useState('');
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
    return (
        <section className='search'>
            <form>
                <input
                onChange={(e) => onChange(e.target.value)}
                type='text'
                className='form-control'
                placeholder='Type in a card name'
                autoFocus
                value={text}
                ></input>  
            </form>
        </section>
    )
}

export default Search
