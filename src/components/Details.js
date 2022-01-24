import React from 'react'

function Details({ cardname,value }) {
    return (
        <div className="detailscard">
            <div className="cardname"> { cardname } </div>
            <div className="value">{ value }</div>
        </div>
    )
}

export default Details

