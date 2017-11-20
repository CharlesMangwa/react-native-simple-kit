/* @flow */

import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet } from 'react-native'
import ModalModule from 'react-native-modal'

import type { Props } from './types'
import styles from './styles'

const Modal = (props: Props): React$Element<any> => (
  <ModalModule
    animationIn={props.animationIn}
    animationInTiming={props.animationInTiming}
    animationOut={props.animationOut}
    animationOutTiming={props.animationOutTiming}
    avoidKeyboard={props.avoidKeyboard}
    backdropColor={props.backdropColor}
    backdropOpacity={props.backdropOpacity}
    backdropTransitionInTiming={props.backdropTransitionInTiming}
    backdropTransitionOutTiming={props.backdropTransitionOutTiming}
    isVisible={props.isVisible}
    onBackButtonPress={props.onClosePressed}
    onBackdropPress={props.onClosePressed}
    onModalShow={props.onShow}
    onModalHide={props.onHide}
    style={StyleSheet.flatten([styles.container, props.style])}
    useNativeDriver={props.useNativeDriver}
  >
    {props.content ? props.content() : props.children}
  </ModalModule>
)

Modal.propTypes = {
  animationIn: PropTypes.oneOf(['slideInDown', 'slideInUp', 'slideInLeft', 'slideInRight']),
  animationOut: PropTypes.oneOf(['slideOutDown', 'slideOutUp', 'slideOutLeft', 'slideOutRigh']),
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
