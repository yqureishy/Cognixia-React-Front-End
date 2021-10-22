import React from "react";
import { cardGrouping } from "../services/FormatData";
import Card from "./Card";

function CardLayout(props){

    const makeDecks = (input, size) => {
        return cardGrouping(input, size);
    }

    return(

        <div className='pt-3'>
            {makeDecks(props.restaurant, 2).map((deck, idx) => (
                <div className='card-deck container-fluid pt-3 row'>
                    {deck.map((restaurant, idx) => <Card info={restaurant}/>)}
                </div>
            ))}
        </div>

    )

}

export default CardLayout;