import React, {useState} from 'react'
import json from './personalVisits.json'

const Menu = () => {

    return (
        <div id="overlay">
            {json.map(el=>
            <div className="address">
                {el.CENTER_ADDRESS}
            </div>
            )}
        </div>
    )
}

export default Menu;