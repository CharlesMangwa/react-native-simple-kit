/* @flow */

import { Platform } from 'react-native'

export type Font = {
  fontFamily: string,
  fontWeight?: '300' | '400' | '500' | '600' | '700' | '800',
  fontStyle?: 'italic',
}

export const AVENIR_BLACK: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '800',
      }
    : {
        fontFamily: 'Avenir-Black',
      }

export const AVENIR_BLACK_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '800',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-BlackOblique',
      }

export const AVENIR_BOLD: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '700',
      }
    : {
        fontFamily: 'Aveni-Heavy',
      }

export const AVENIR_BOLD_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '700',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-HeavyOblique',
      }

export const AVENIR_MEDIUM: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '600',
      }
    : {
        fontFamily: 'Avenir-Medium',
      }

export const AVENIR_MEDIUM_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '600',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-MediumOblique',
      }

export const AVENIR_BOOK: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '500',
      }
    : {
        fontFamily: 'Avenir-Book',
      }

export const AVENIR_BOOK_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '500',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-BookOblique',
      }

export const AVENIR_REGULAR: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '400',
      }
    : {
        fontFamily: 'Avenir-Roman',
      }

export const AVENIR_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '400',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-Oblique',
      }

export const AVENIR_LIGHT: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '300',
      }
    : {
        fontFamily: 'Avenir-Light',
      }

export const AVENIR_LIGHT_ITALIC: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Avenir',
        fontWeight: '300',
        fontStyle: 'italic',
      }
    : {
        fontFamily: 'Avenir-LightOblique',
      }

export const BARIOL_BOLD: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Bariol',
        fontWeight: '700',
      }
    : {
        fontFamily: 'Bariol-Bold',
      }

export const BARIOL_REGULAR: Font =
  Platform.OS === 'ios'
    ? {
        fontFamily: 'Bariol',
        fontWeight: '400',
      }
    : {
        fontFamily: 'Bariol-Regular',
      }
