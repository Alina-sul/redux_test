import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPokemon,
    selectPokemon
} from "../../features/data/dataSlice";
import PokemonCard from '../PokemonCard/PokemonCard';
import './style.css';
import Filter from "../Filter/Filter";

function Grid() {
    const {pokemonList, status} = useSelector(selectPokemon);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemon());
        console.log('pokemon in useEffect',pokemonList);

    },[]);

    return (
        <>
            <div>
                <Filter color={'secondary'}/>
            </div>
            <div className={'grid'}>
                {
                    Array.isArray(pokemonList)   && pokemonList.map( x => {
                        return (
                            <PokemonCard key={`card - ${x.name}`} pokemon={x}/>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Grid;
