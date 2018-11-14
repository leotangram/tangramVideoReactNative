import React, { Component } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import Empty from '../components/empty';
import Separator from '../components/vertical-separator';
import Suggestion from '../components/suggestion';

export default class CategoryList extends Component {
  keyExtractor = item => item.id.toString()
  renderEmtpy = () => <Empty text="No hay sugerencias :(" />
  itemSeparator = () => <Separator />
  renderItem = ({item}) => <Suggestion {...item} />
  render() {
    return (
      <FlatList
        horizontal
        keyExtractor={this.keyExtractor}
        data={this.props.list}
        ListEmptyComponent={this.renderEmtpy}
        ItemSeparatorComponent={this.itemSeparator}
        renderItem={this.renderItem}
      />
    )
  }
}