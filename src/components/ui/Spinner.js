import React from 'react'
import SpinningGif from '../../img/spinner.gif'

const Spinner = () => {
    return (
        <div>
            <img src={SpinningGif} style={{ width: '200px', margin: 'auto', display: 'block'}}/>
        </div>
    )
}

export default Spinner
