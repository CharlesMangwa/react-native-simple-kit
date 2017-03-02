/* @flow */

import React from 'react'
import { StyleSheet } from 'react-native'
import { BottomNavigationBar } from 'react-router-navigation'
import { BRAND_COLOR_50 } from '@theme/colors'

const styles: Object = StyleSheet.create({
  activeLabel: {
    color: BRAND_COLOR_50,
  },
})

const TabBar = (props: Object): React$Element<any> => (
  <BottomNavigationBar
    labelStyle={({ isActive }: Object): void => isActive && styles.activeLabel}
    {...props}
  />
)

export default TabBar
