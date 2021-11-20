import React from 'react';
import Card from '@mui/material/Card';
import {CardContent} from "@mui/material";

function PokemonCard({pokemon}) {
    return (
        <Card key={pokemon.name} className={'pCard'}>
            <CardContent>
                {pokemon.name}
            </CardContent>
        </Card>
    );
}

export default PokemonCard;
