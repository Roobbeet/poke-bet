import React, { useState, useEffect } from 'react';
import './App.css';

// pages and main component(s)
import Pokelist from './components/pages/pokelist.component';
import DetailedPokemon from './components/pages/pokedetail.component'
import OwnedPokelist from './components/pages/ownedpoke.component'

import SearchBar from './components/list/searchbar.component'

import { Switch, Route} from 'react-router-dom'
// Context(s)
import OwnedPokemonContext from './components/contexts/owned.context'
import PokemonList from './components/contexts/list.context'
import DetailedPokemonContext from './components/contexts/detailed.context'

const App = () => {

  const [list, newList] = useState([]);
  const [owned, newOwned] = useState([]);
  const [fetchres, newRes] = useState([]);
  const [currentItem, setCurrent] = useState('');
  const [popUpActive, setPopUp] = useState(false)

  useEffect(() => {
    const lastSelected = JSON.parse(localStorage.getItem('selectedItem'))
    const ownedPokes = JSON.parse(localStorage.getItem('ownedPokemon'))
    const lastFetched = JSON.parse(localStorage.getItem('lastFetch'))
    const lastlist = JSON.parse(localStorage.getItem('lastList'))
    if (lastSelected) {
      setCurrent(lastSelected)
    } //last selected checking
    if (ownedPokes) {
      newOwned(ownedPokes)
    } //owned list
    if (lastFetched) {
      newRes(lastFetched)
    } //prevent API fetching on & on
    if (lastlist) {
      newList(lastlist)
    } //prevent API Fetching
    if (!lastFetched || !lastlist) {
      fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
      .then(response => response.json())
      .then(pokelist => {
        console.log(pokelist)
        newRes(pokelist)
        newList(pokelist.results)
        localStorage.setItem('lastFetch', JSON.stringify(pokelist))
        localStorage.setItem('lastList', JSON.stringify(pokelist.results))
      })
    } // fetch if something is missing
    
  }, []) //fetch and store
  useEffect(() => { localStorage.setItem('selectedItem', JSON.stringify(currentItem))
  },
  [currentItem]) //store selected Item
  useEffect(() => { localStorage.setItem('ownedPokemon', JSON.stringify(owned))
  },
  [owned]) //owned pokemons persist

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
  const catchPokemon = () => { //popup open then give name
    const math = Math.floor(Math.random() * (3 - 1) + 1)
    math < 2 ? console.log('failed to catch') : setPopUp(true)
  }

  const updateOwned = async(pokeID, nickname, event) => {
    const sameNickname = owned.filter(el => el.nickname === nickname).length
    const trimmedNick = nickname ? nickname.trim() : ''
    if (sameNickname || nickname === '' || trimmedNick === '') {
      // await event.stopPropagation()
      await event.preventDefault()
      alert('Ooops...Kindly change the nickname')
    } else {
      newOwned([...owned, {pokeID, nickname}])
      setPopUp(false)
    }
  }

  const selectPokemon = (pokeUrl) => {
    fetch(pokeUrl)
      .then(response => response.json())
      .then(pokedetail => {
        setCurrent(pokedetail)
      })
  }

  const releasePokemon = (nickname) => {
    const updatedOwned = owned.filter(el => el.nickname !== nickname)
    newOwned(updatedOwned)
  }

  return (
    <div className="App">
      <h1 className="title">Poke-Bet by <u><a target="_blank" href="https://github.com/Roobbeet">Roobbeet</a></u></h1>
      <h3 className="">Check my cool game <u><a target="_blank" href="https://6-magics.netlify.app/">Here</a></u></h3>

      <div className="List">
        <div className="New list-container">
          <Switch>
            <DetailedPokemonContext.Provider value={{ currentItem, catchPokemon, popUpActive, updateOwned }}>
              <PokemonList.Provider value={{ list, selectPokemon }}>
                <OwnedPokemonContext.Provider value={{ owned, releasePokemon }}>
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
