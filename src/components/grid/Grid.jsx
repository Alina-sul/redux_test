import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPokemon,
    selectPokemon
} from "../../features/data/dataSlice";

function Grid() {
    const {pokemon, status} = useSelector(selectPokemon);
    const dispatch = useDispatch();

    console.log(status);

    useEffect(() => {
        dispatch(fetchPokemon())
        console.log(pokemon, status)
    },[dispatch,pokemon,status]);

    return (
        <div>
            test
        </div>
    );
}

export default Grid;
