import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    fetchPokemon,
    selectPokemon
} from "../../features/data/dataSlice";
import PokemonCard from '../card/PokemonCard';
import './style.css';

function Grid() {
    const {pokemonList, status} = useSelector((state) => {
        return {
            pokemonList: state.dataSlice.pokemonList,
            status: state.dataSlice.status,
        }

    });
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPokemon());
        console.log('pokemon in useEffect',pokemonList);

    },[]);

    return (
        <div className={'grid'}>
            {
                Array.isArray(pokemonList)   && pokemonList.map( x => {
                    return (
                        <PokemonCard key={`card - ${x.name}`} pokemon={x}/>
                    )
                })
            }
        </div>
    );
}

export default Grid;
