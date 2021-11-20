import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPokemon,
    selectPokemon
} from "../../features/data/dataSlice";

function Grid() {
    const {pokemon, status} = useSelector((state) => {
        return {
            pokemon: state.dataSlice.pokemon,
            status: state.dataSlice.status,
        }

    });
    const dispatch = useDispatch();

    console.log('pokemon in component',pokemon);
    console.log('status in component',status);

    useEffect(() => {
        dispatch(fetchPokemon());
        console.log('pokemon in useEffect',pokemon);

    },[]);

    return (
        <div>
            {
                Array.isArray(pokemon) && pokemon.map( (pok) => {
                    return (
                        <div key={pok.name}>{pok.name}</div>
                    )
                })
            }
        </div>
    );
}

export default Grid;
