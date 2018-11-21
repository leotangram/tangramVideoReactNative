import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Layout from '../components/suggestion-list-layout'
import Empty from '../components/empty'
import Separator from '../components/vertical-separator'
import Suggestion from '../components/suggestion'
import { connect } from 'react-redux'

function mapStateToProps(state) {
  return {
    list: state.suggestionList
  }
}
class SuggestionList extends Component {
  keyExtractor = item => item.id.toString()
  itemSeparator = () => <Separator />
  renderEmpty = () => <Empty text="No hay sugerencias :(" />
  renderItem = ({ item }) => <Suggestion {...item} />
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
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={this.renderEmpty}
          ItemSeparatorComponent={this.itemSeparator}
          renderItem={this.renderItem}
        />
      </Layout>
    )
  }
}

export default connect(mapStateToProps)(SuggestionList)