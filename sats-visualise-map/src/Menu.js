import React, {useState} from 'react'
import json from './personalVisits.json'


    



const Menu = () => {

    const ele = (element) => {
        console.log(element)
    }
    

    return (
        
        <div id="overlay">
        <div className="address">
        <div className="name">
                Center
                </div>
                <div className="visits">
                Number of visits
                </div>
            </div>
            {json.map(el=>
            <div className="address" onClick={() => ele(el.CENTER_ID)}>
                <div className="name">
                {el.CENTER_NAME}
                </div>
                <div className="visits">
                {el.COUNT_VISITED}
                </div>
            </div>
            )}
        </div>
    )
}

export default Menu;