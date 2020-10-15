import React from 'react'
import SpinningGif from '../../img/spinner.gif'

const Spinner = ({ items }) => {
    if ( items.length >= 100 ) {
        return (
            <h1 className='center'>
                Please type in a more specific search!
            </h1>
        )
    } else {
    return (
        <h1 className='center'>
            Enter a card name and wait to generate matching cards!
            {/* <img src={SpinningGif} style={{ width: '200px', margin: 'auto', display: 'block'}}/> */}
        </h1>
    )}
}

export default Spinner
