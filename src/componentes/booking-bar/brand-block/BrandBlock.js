import React from 'react'
import './BrandBlock.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function BrandBlock(props) {

    const stars = [];

    for (var i=0; i<props.starsCount; i++) {

        stars.push(<FontAwesomeIcon key={ i } className="icon-stars" icon={ faStar } />)
    }

    return (
        <div className="brand-block booking-block">
            <div className="row">
                <div className="col">
                    <span>
                        { props.companyType }
                        { stars }
                    </span>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <span>{ props.companyName }</span>
                </div>
            </div>
        </div>
    );
}

export default BrandBlock