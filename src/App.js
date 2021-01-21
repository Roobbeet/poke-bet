import React, { useState, useEffect } from 'react';
import './App.css';

import Pokelist from './components/pages/pokelist.component';
import DetailedPokemon from './components/pages/pokedetail.component'
import SearchBar from './components/list/searchbar.component'
import OwnedPokelist from './components/pages/ownedpoke.component'

import { Switch, Route } from 'react-router-dom'
import { createContext } from 'react';
import OwnedPokemonContext from './components/contexts/owned.context'
import PokemonList from './components/contexts/list.context'

const App = (myState) => {

  const [list, newList] = useState([]);
  const [owned, newOwned] = useState([])
  const [past, newPast] = useState([]);

  const [currentItem, setCurrent] = useState('');
  const [title, setTitle] = useState('')


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=25')
    .then(response => response.json())
    .then(pokelist => {
      console.log(pokelist)
      newList(pokelist.results)
    })
  }, [])


  //handle add list
  const handleAddList = async event => {
    event.preventDefault();
    await event.target.reset();
    const { name, isDone } = currentItem;
    // console.log(name)

    if ((!list.includes(currentItem)) && (!past.includes(name)) && (!!currentItem)) {
      newList([
        { name: currentItem, isDone }, ...list,
      ])
    } else {
      alert('List item is already exist / input field is blank')
    }
    setCurrent('');
  }

  //state sementara
  const handleChange = async event => {
    const { value } = await event.target
    setCurrent(value);
    // console.log(value)
  }
  //set done
  const handleDone = (item) => {
    newPast([...past, { name: item, isDone: true }])
    list.filter(name => name.name !== item);
    newList([
      ...list.filter(name => name.name !== item), { name: item, isDone: true }
    ])
  }
  //set Title
  const handleTitle = async event => {
    event.preventDefault();
    const { value } = await event.target;
    setTitle(value)
  }
  //Open Poke Details
  const handleOpen = async item => {
    fetch(item.url)
    .then(response => response.json())
    .then(pokelist => {
      setCurrent(pokelist)
    })
  }

  //RESET FIELD
  const resetField = () => {
    localStorage.clear();
    newList([]);
    // console.log(list);
  }

  //SAVE LIST {
  const saveList = () => {
    alert('Your list is saved on the local storage, dont worry');
    // console.log(list)
    localStorage.setItem('listItem', JSON.stringify(list));
    localStorage.setItem('listTitle', JSON.stringify(title));
  }

  //catch function
  const catchPokemon = (pokeID) => {
    const math = Math.floor(Math.random() * (3 - 1) + 1)
    math < 2 ? console.log('failed to catch') : newOwned(...owned, pokeID)
    
  }

  return (
    <div className="App">
      <h1 className="title">Poke-Bet by <a href="https://github.com/Roobbeet">Roobbeet</a></h1>
      <SearchBar></SearchBar>
      <div className="List">
        <div className="New list-container">
          <h2 className="list-title">{title} List</h2>
          <Switch>
            <PokemonList.Provider value={list}>
            <OwnedPokemonContext.Provider value={owned}>
              <Route exact path='/' component={Pokelist} catchPokemon={catchPokemon} />
              <Route exact path='/detailed' isOwned={currentItem.isDone} ownNo={0} handleOpen={handleOpen} key={`${currentItem.name}`} item={currentItem.name} component={DetailedPokemon} />
              <Route exact path='/mypoke' component={OwnedPokelist} />
            </OwnedPokemonContext.Provider>
            </PokemonList.Provider>
          </Switch>
          
        </div>
      </div>
    </div>
  )

}

export default App;
