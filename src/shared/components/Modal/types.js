/* @flow */

type AnimationConfig =
  'slideInDown'
  | 'slideInUp'
  | 'slideInLeft'
  | 'slideInRight'
  | 'slideOutDown'
  | 'slideOutUp'
  | 'slideOutLeft'
  | 'slideOutRigh'
  | { from: Object, to: Object }

export type Props = {
  animationIn?: AnimationConfig,
  animationInTiming?: number,
  animationOut?: AnimationConfig,
  animationOutTiming?: number,
  avoidKeyboard?: boolean,
  backdropColor?: string,
  backdropOpacity?: number,
  backdropTransitionInTiming?: number,
  backdropTransitionOutTiming?: number,
  children?: () => React$Element<any> | React$Element<any>,
  content?: () => React$Element<any> | React$Element<any>,
  useNativeDriver?: boolean,
  isVisible: boolean,
  onClosePressed: Function,
  onShow?: Function,
  onHide?: Function,
  style?: StyleSheet,
}
