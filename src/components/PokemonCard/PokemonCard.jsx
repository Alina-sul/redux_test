import React from 'react';
import Card from '@mui/material/Card';
import {CardContent} from "@mui/material";

function PokemonCard({pokemon}) {


    return (
        <Card key={pokemon.name} className={'pCard'} >
            <CardContent>
                <img src={pokemon.image} alt={pokemon.name} height="auto" width="200"/>
                <h3>{pokemon.name}</h3>
            </CardContent>
        </Card>
    );
}

export default PokemonCard;
