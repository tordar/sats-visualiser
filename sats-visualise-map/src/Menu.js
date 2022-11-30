import React, {useState} from 'react'
import json from './personalVisits.json'


    



const Menu = () => {

    const addCountVisited = (element) => {
        json.map(el => {
            if(!el.COUNT_VISITED){
                el.COUNT_VISITED = 0
            }
        })
    }  
    
    addCountVisited()

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
            {[...json]
            .sort((a, b) => b.COUNT_VISITED - a.COUNT_VISITED)
            .map(el=> {
                return (
            <div className="address" >
                <div className="name">
                {el.CENTER_NAME}
                </div>
                <div className="visits">
                {el.COUNT_VISITED}
                </div>
            </div>
            )
        })}        
    </div>
    )
}

export default Menu;