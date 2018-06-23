/* @flow */

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ModalModule from 'react-native-modal'

import type { Props } from './types'
import styles from './styles'

const Modal = ({
  animationIn,
  animationInTiming,
  animationOut,
  animationOutTiming,
  avoidKeyboard,
  backdropColor,
  backdropOpacity,
  backdropTransitionInTiming,
  backdropTransitionOutTiming,
  children,
  content,
  isVisible,
  onClosePressed,
  onHide,
  onShow,
  style,
  useNativeDriver,
}: Props): React$Element<*> => (
  <ModalModule
    animationIn={animationIn}
    animationInTiming={animationInTiming}
    animationOut={animationOut}
    animationOutTiming={animationOutTiming}
    avoidKeyboard={avoidKeyboard}
    backdropColor={backdropColor}
    backdropOpacity={backdropOpacity}
    backdropTransitionInTiming={backdropTransitionInTiming}
    backdropTransitionOutTiming={backdropTransitionOutTiming}
    isVisible={isVisible}
    onBackButtonPress={onClosePressed}
    onBackdropPress={onClosePressed}
    onModalShow={onShow}
    onModalHide={onHide}
    onSwipe={onClosePressed}
    swipeDirection="down"
    style={StyleSheet.flatten([styles.container, style])}
    useNativeDriver={useNativeDriver}
  >
    {content ? content() : children}
  </ModalModule>
)

Modal.propTypes = {
  animationIn: PropTypes.oneOf([
    'slideInDown',
    'slideInUp',
    'slideInLeft',
    'slideInRight',
  ]),
  animationOut: PropTypes.oneOf([
    'slideOutDown',
    'slideOutUp',
    'slideOutLeft',
    'slideOutRigh',
  ]),
  animationInTiming: PropTypes.number,
  animationOutTiming: PropTypes.number,
  avoidKeyboard: PropTypes.bool,
  backdropColor: PropTypes.string,
  backdropOpacity: PropTypes.number,
  backdropTransitionInTiming: PropTypes.number,
  backdropTransitionOutTiming: PropTypes.number,
  children: PropTypes.element,
  content: PropTypes.oneOfType([PropTypes.func, PropTypes.element]),
  isVisible: PropTypes.bool.isRequired,
  onClosePressed: PropTypes.func.isRequired,
  onHide: PropTypes.func,
  onShow: PropTypes.func,
  style: PropTypes.any, // eslint-disable-line react/forbid-prop-types
  useNativeDriver: PropTypes.bool,
}

Modal.defaultProps = {
  animationIn: 'slideInUp',
  animationInTiming: 400,
  animationOut: 'slideOutDown',
  animationOutTiming: 500,
  avoidKeyboard: false,
  backdropColor: '#000',
  backdropOpacity: 0.7,
  backdropTransitionInTiming: 300,
  backdropTransitionOutTiming: 300,
  children: undefined,
  content: undefined,
  onHide: () => null,
  onShow: () => null,
  style: undefined,
  useNativeDriver: false,
}

export default Modal
