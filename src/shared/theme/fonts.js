/* @flow */

export type Font = {
  fontFamily: 'Avenir' | 'Bariol',
  fontWeight: '300' | '400' | '500' | '600' | '700' | '800',
  fontStyle?: 'italic',
}

export const AVENIR_BLACK: Font = {
  fontFamily: 'Avenir',
  fontWeight: '800',
}

export const AVENIR_BLACK_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '800',
  fontStyle: 'italic',
}

export const AVENIR_BOLD: {fontFamily: 'Avenir', fontWeight: string} = {
  fontFamily: 'Avenir',
  fontWeight: '700',
}

export const AVENIR_BOLD_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '700',
  fontStyle: 'italic',
}

export const AVENIR_MEDIUM: Font = {
  fontFamily: 'Avenir',
  fontWeight: '600',
}

export const AVENIR_MEDIUM_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '600',
  fontStyle: 'italic',
}

export const AVENIR_BOOK: Font = {
  fontFamily: 'Avenir',
  fontWeight: '500',
}

export const AVENIR_BOOK_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '500',
  fontStyle: 'italic',
}

export const AVENIR_REGULAR: Font = {
  fontFamily: 'Avenir',
  fontWeight: '400',
}

export const AVENIR_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '400',
  fontStyle: 'italic',
}

export const AVENIR_LIGHT: Font = {
  fontFamily: 'Avenir',
  fontWeight: '300',
}

export const AVENIR_LIGHT_ITALIC: Font = {
  fontFamily: 'Avenir',
  fontWeight: '300',
  fontStyle: 'italic',
}

export const BARIOL_BOLD: Font = {
  fontFamily: 'Bariol',
  fontWeight: '700',
}

export const BARIOL_REGULAR: Font = {
  fontFamily: 'Bariol',
  fontWeight: '400',
}
