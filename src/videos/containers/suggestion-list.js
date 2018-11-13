import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'

export default class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  render() {
    const list = [
      {
        title: 'Advengers',
        key: '1'
      },
      {
        title: 'Pókemon',
        key: '2'
      }
    ]
    return (
      <Layout
        title="Recomendado para ti"
      >
        <FlatList
          data={list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    )
  }
}
