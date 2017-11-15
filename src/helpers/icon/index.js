/* @flow */

import React from 'react'
import Icon from '@components/Icon'

const getIcon = (
  name: string,
  size: number,
  actived?: boolean,
  defaultColor?: string,
): React$Element<any> => (
  <Icon
    actived={actived}
    defaultactivedColor={actived ? defaultColor : undefined}
    defaultColor={defaultColor || undefined}
    name={name}
    size={size}
  />
)

export default getIcon
