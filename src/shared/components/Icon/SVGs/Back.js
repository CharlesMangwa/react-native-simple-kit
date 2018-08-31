/* @flow */
/* eslint max-len: ["error", 1000] */

import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  color: string,
  size: number,
}

const Back = ({ color, size }: Props): React$Element<*> => {
  const ratio = 16 / 13
  return (
    <Svg width={size * ratio} height={size} viewBox="0 0 16 13">
      <Path
        d="M14.647 5.225H3.302L6.877 1.65c.388-.387.388-1.01 0-1.36-.39-.387-1.01-.387-1.36 0L.272 5.498c-.194.195-.272.467-.272.7 0 .233.078.505.272.7L5.478 12.1c.39.39 1.01.39 1.36 0 .388-.388.388-1.01 0-1.36L3.263 7.168h11.345c.505 0 .894-.427.894-.97 0-.545-.35-.973-.855-.973z"
        fill={color}
        fillRule="evenodd"
      />
    </Svg>
  )
}

export default Back
