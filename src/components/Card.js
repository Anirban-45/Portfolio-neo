import React from 'react';
import '../styles/Card.css'

function Card(props) {
    return(
        <div className="card-body">
            <div className="icon-holder">
                <img src={props.image} alt=""/>
            </div>
            <p className="card-title">{props.title}</p>
            <p className="card-desc">{props.description}</p>
        </div>
    )
}

export default Card;
