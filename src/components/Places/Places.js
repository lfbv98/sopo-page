import React from 'react';
import TouristPlaceCard from '../TouristPlaceCard/TouristPlaceCard';

export default function Places(props) {
    return (
        <div>
            {props.touristPlaces.map(place => {
                return (
                    <TouristPlaceCard
                        title={place.title}
                        description={place.description}
                        img={place.img}
                    />
                )
            })}
        </div>
    )
}
