/* @flow */

import React from 'react'
import Icon from '@components/Icon'

const getIcon = (
  name: string,
  size: number,
  activated?: boolean,
  defaultColor?: string
): React$Element<*> => (
  <Icon
    activated={activated}
    defaultActivatedColor={activated ? defaultColor : undefined}
    defaultColor={defaultColor || undefined}
    name={name}
    size={size}
  />
)

export default getIcon
