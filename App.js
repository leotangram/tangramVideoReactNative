import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import Home from './src/screens/containers/home';
import Header from './src/sections/components/header'
import API from './utils/api'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'
import { Provider } from 'react-redux'
import store from './store'

type Props = {};
export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: []
  }
  async componentDidMount() {
    const categoryList = await API.getMovies()
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
    const suggestionList = await API.getSuggestion(10)
    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })
    // console.log(movies)
    // console.log(categories)
    // this.setState({
    //   suggestionList: movies,
    //   categoryList: categories
    // })
  }
  render() {
    return (
      <Provider
        store={store}
      >
        <Home>
          <Header />
          <Player />
          <Text>Buscador</Text>
          <CategoryList />
          <SuggestionList />
        </Home>
      </Provider>
    );
  }
}
