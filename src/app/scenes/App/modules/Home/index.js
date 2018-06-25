/* @flow */

import React, { Component } from 'react'
import {
  ImageBackground,
  FlatList,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native'

import type { Hero } from '@types'
import { HERO_BASIC_INFOS_QUERY } from '@graphql/queries'
import { BRAND_COLOR_RED, BRAND_COLOR_YELLOW } from '@theme/colors'
import { Button, Query } from '@components'

import background from '@assets/images/background.png'
import styles from './styles'

type State = { isRefreshing: boolean }

class Home extends Component<*, State> {
  state = { isRefreshing: false }

  _refreshFlatList: ?Function

  _keyExtractor = (item: Hero) => String(item.id)

  _onRefresh = (refetch: Function) =>
    this.setState(
      () => ({ isRefreshing: true }),
      () => {
        if (this._refreshFlatList) this._refreshFlatList()
        refetch()
      }
    )

  _renderCharacter = ({ item: character }) => {
    const { isRefreshing } = this.state
    if (isRefreshing) this.setState(() => ({ isRefreshing: false }))
    return <Text style={styles.text}>{character.name}</Text>
  }

  _renderEmptyComponent = (): React$Element<*> => {
    const { isRefreshing } = this.state
    if (isRefreshing) this.setState(() => ({ isRefreshing: false }))
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.title}>No result.</Text>
      </View>
    )
  }

  _renderHeaderComponent = (): React$Element<*> => (
    <Text style={[styles.title, { marginBottom: 10 }]}>R2-D2 friends</Text>
  )

  _renderFooterComponent = (): React$Element<*> => (
    <Text style={styles.footer}>- Pull-to-refresh -</Text>
  )

  render() {
    const { isRefreshing } = this.state
    return (
      <ImageBackground
        resizeMode="cover"
        style={styles.container}
        source={background}
      >
        <Text style={styles.text}>Home</Text>
        <Button
          inactive
          color="red"
          onPress={() => console.log('✈️ ➡️ ⚙️')}
          style={StyleSheet.flatten({ marginBottom: 16 })}
          to="Settings"
          text="Go to settings"
        />
        <Query
          query={HERO_BASIC_INFOS_QUERY}
          render={({ data, refetch }) => {
            this._refreshFlatList = refetch
            return (
              <FlatList
                refreshControl={
                  <RefreshControl
                    refreshing={isRefreshing}
                    onRefresh={this._onRefresh}
                    colors={[BRAND_COLOR_RED, BRAND_COLOR_YELLOW]}
                    tintColor={BRAND_COLOR_RED}
                  />
                }
                style={styles.flatList}
                data={data && data.hero && data.hero.friends}
                ListHeaderComponent={this._renderHeaderComponent}
                ListFooterComponent={this._renderFooterComponent}
                ListEmptyComponent={this._renderEmptyComponent}
                keyExtractor={this._keyExtractor}
                onRefresh={() => this._onRefresh(refetch)}
                refreshing={isRefreshing}
                renderItem={this._renderCharacter}
                showsVerticalScrollIndicator={false}
              />
            )
          }}
        />
      </ImageBackground>
    )
  }
}

export default Home
