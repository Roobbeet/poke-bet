import React, { useState, useEffect } from 'react';
import './App.css';

// pages and main component(s)
import Pokelist from './components/pages/pokelist.component';
import DetailedPokemon from './components/pages/pokedetail.component'
import SearchBar from './components/list/searchbar.component'
import OwnedPokelist from './components/pages/ownedpoke.component'

import { Switch, Route, BrowserRouter} from 'react-router-dom'
// Context(s)
import OwnedPokemonContext from './components/contexts/owned.context'
import PokemonList from './components/contexts/list.context'
import DetailedPokemonContext from './components/contexts/detailed.context'

const App = () => {

  const [list, newList] = useState([]);
  const [owned, newOwned] = useState([]);
  const [fetchres, newRes] = useState([]);
  const [currentItem, setCurrent] = useState('');

  useEffect(() => {
    const lastSelected = JSON.parse(localStorage.getItem('selectedItem'))
    const ownedPokes = JSON.parse(localStorage.getItem('ownedPokemon'))
    if (lastSelected) {
      setCurrent(lastSelected)
    }
    if (ownedPokes) {
      newOwned(ownedPokes)
    }
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20')
      .then(response => response.json())
      .then(pokelist => {
        console.log(pokelist)
        newRes(pokelist)
        newList(pokelist.results)
      })
  }, [])
  useEffect(() => { localStorage.setItem('selectedItem', JSON.stringify(currentItem)); }, [currentItem]) //store selected Item
  useEffect(() => { localStorage.setItem('ownedPokemon', JSON.stringify(owned)); }, [owned]) //owned pokemons persist

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
    math < 2 ? console.log('failed to catch') : newOwned([...owned, pokeID])
    // console.log('gotcha')
    console.log(owned)
    
  }
  const selectPokemon = (pokeUrl) => {
    console.log(pokeUrl);
    fetch(pokeUrl)
      .then(response => response.json())
      .then(pokedetail => {
        console.log(pokedetail)
        setCurrent(pokedetail)
        console.log(currentItem)
      })

    // newOwned(...owned, pokeID)

  }
  const releasePokemon = (pokeID) => {
    console.log(pokeID)
    // const updatedOwned = owned.filter(el => el !== pokeID)
    // newOwned(updatedOwned)
  }

  return (
    <div className="App">
      <h1 className="title">Poke-Bet by <u><a target="_blank" href="https://github.com/Roobbeet">Roobbeet</a></u></h1>
      <h3 className="">Check my cool game <u><a target="_blank" href="https://6-magics.netlify.app/">Here</a></u></h3>

      <div className="List">
        <div className="New list-container">
            <Switch>
              <DetailedPokemonContext.Provider value={{ currentItem, catchPokemon }}>
                <PokemonList.Provider value={{ list, selectPokemon }}>
                  <OwnedPokemonContext.Provider value={{owned, releasePokemon}}>
                    <SearchBar></SearchBar>
                    <button onClick={prevPage}>prev</button>
                    <button onClick={nextPage}>next</button>
                    <Route exact path='/' component={Pokelist} />
                    <Route path='/detailed' component={DetailedPokemon} />
                    <Route path='/mypoke' component={OwnedPokelist} />
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
