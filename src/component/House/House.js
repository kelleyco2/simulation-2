import React from 'react'

function House(props) {
    return(
        <div>
            <img src={`${props.img}`} alt=''/><br/>
            {props.name}<br/>
            {props.address}<br/>
            {props.city}<br/>
            {props.state}<br/>
            {props.zip}<br/>
            {props.monthlyMortgage}<br/>
            {props.desiredRent}<br/>
            <button onClick={e => props.deleteHouse(props.id)}>Delete</button>
        </div>
    )
}

export default House