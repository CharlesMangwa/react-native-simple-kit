/* @flow */

import { StyleSheet } from 'react-native'
import { rem, vw } from '@helpers/responsive'
import { DEFAULT_TEXT_COLOR } from '@theme/colors'
import { AVENIR_LIGHT, BARIOL_REGULAR } from '@theme/fonts'

const styles: Object = StyleSheet.create({
  container: {
    flex: 1,
    width: vw(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...AVENIR_LIGHT,
    fontSize: rem(18),
    marginBottom: rem(15),
    backgroundColor: 'transparent',
  },
  modalContainer: {
    alignSelf: 'center',
    width: '70%',
    height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: 'white',
  },
  modalTitle: {
    ...BARIOL_REGULAR,
    fontSize: rem(45),
    color: DEFAULT_TEXT_COLOR,
  },
  modalButtonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: rem(30),
    paddingHorizontal: '12.5%',
  },
  modalButton: {
    width: rem(80),
  },
})

export default styles
