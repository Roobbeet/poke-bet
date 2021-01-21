import React, { useState, useEffect } from 'react';
import './App.css';

import Pokelist from './components/pages/pokelist.component';
import DetailedPokemon from './components/pages/pokedetail.component'
import SearchBar from './components/list/searchbar.component'
import OwnedPokelist from './components/pages/ownedpoke.component'

import { Switch, Route } from 'react-router-dom'
import OwnedPokemonContext from './components/contexts/owned.context'
import PokemonList from './components/contexts/list.context'
import DetailedPokemonContext from './components/contexts/detailed.context'

const App = () => {

  const [list, newList] = useState([]);
  const [owned, newOwned] = useState([]);
  const [fetchres, newRes] = useState([]);

  const [currentItem, setCurrent] = useState('');

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then(response => response.json())
      .then(pokelist => {
        console.log(pokelist)
        newRes(pokelist)
        newList(pokelist.results)
      })
  }, [])


  //Open Poke Details
  const handleOpen = async item => {
    fetch(item.url)
      .then(response => response.json())
      .then(pokelist => {
        setCurrent(pokelist)
      })
  }
  const nextPage = () => {
    console.log(fetchres.next)
    fetch(`${fetchres.next}`)
    .then(res => res.json())
    .then(fetch => {
      console.log(fetch)
      newList(fetch.results)
      newRes(fetch)
    })
  }
  const prevPage = () => {
    console.log(fetchres.previous)
    fetch(`${fetchres.previous}`)
    .then(res => res.json())
    .then(fetch => {
      console.log(fetch)
      newList(fetch.results)
      newRes(fetch)
    })
  }

  //catch function
  const catchPokemon = (pokeID) => {
    const math = Math.floor(Math.random() * (3 - 1) + 1)
    math < 2 ? console.log('failed to catch') : newOwned(...owned, pokeID)

  }

  return (
    <div className="App">
      <h1 className="title">Poke-Bet by <u><a target="_blank" href="https://github.com/Roobbeet">Roobbeet</a></u></h1>
      <h3 className="">Check my cool game <u><a target="_blank" href="https://6-magics.netlify.app/">Here</a></u></h3>
      <SearchBar></SearchBar>
      <div className="List">
        <div className="New list-container">
          <button onClick={nextPage}>next</button>
          <button onClick={prevPage}>prev</button>
          <h2 className="list-title">List</h2>
          <Switch>
            <DetailedPokemonContext.Provider value={currentItem}>
              <PokemonList.Provider value={list}>
                <OwnedPokemonContext.Provider value={owned}>
                  <Route exact path='/' component={Pokelist} catchPokemon={catchPokemon} />
                  <Route exact path='/detailed' component={DetailedPokemon} />
                  <Route exact path='/mypoke' component={OwnedPokelist} />
                </OwnedPokemonContext.Provider>
              </PokemonList.Provider>
            </DetailedPokemonContext.Provider>
          </Switch>

        </div>
      </div>
    </div>
  )

}

export default App;
