/* @flow */

import { Alert, Linking, Platform, Share } from 'react-native'
import { BRAND_COLOR_GREEN } from '@theme/colors'

type Coordinates = {
  latitude: number,
  longitude: number,
  name: string,
}

type Email = string

type SharedContent = {
  title: string,
  url: string,
  content: string,
}

type PhoneNumber = number

type URL = string

export const share = (sharedContent: SharedContent): void => {
  const { title, content, url } = sharedContent
  Share.share(
    {
      title,
      message: content,
      url,
    },
    {
      dialogTitle: 'Partager',
      tintColor: BRAND_COLOR_GREEN,
    }
  )
}

export const call = (phoneNumber: PhoneNumber): void =>
  Linking.canOpenURL(`tel:${phoneNumber}`)
    .then(supported => {
      return !supported
        ? `We can't open the following phone number 😯: ${phoneNumber}`
        : Linking.openURL(`tel:${phoneNumber}`)
    })
    .catch(error => {
      console.log(error)
      Alert.alert('Something went wrong during the redirection 😯…')
    })
export const email = (address: Email): void =>
  Linking.canOpenURL(`mailto:${address}`)
    .then(supported => {
      return !supported
        ? Alert.alert(`We can't open the following email 😯: ${address}`)
        : Linking.openURL(`mailto:${address}`)
    })
    .catch(error => {
      console.log(error)
      Alert.alert('Something went wrong during the redirection 😯…')
    })
export const openURL = (url: URL): void =>
  Linking.canOpenURL(url)
    .then(supported => {
      return !supported
        ? Alert.alert(`We can't open the following URL 😯: "${url}"`)
        : Linking.openURL(url)
    })
    .catch(error => {
      console.log(error)
      Alert.alert('Something went wrong during the redirection 😯…')
    })
export const startNavigation = (coordinates: Coordinates): void => {
  let url
  if (Platform.OS === 'ios') {
    url =
      `https://maps.apple.com/?q=${coordinates.name}&sll=` +
      `${coordinates.latitude},${coordinates.longitude}`
  } else {
    url =
      `https://maps.google.com/maps?q=${coordinates.name}&sll=` +
      `${coordinates.latitude},${coordinates.longitude}`
  }
  Linking.canOpenURL(url)
    .then(supported => {
      return !supported ? null : Linking.openURL(url)
    })
    .catch(e => console.log(e))
}
