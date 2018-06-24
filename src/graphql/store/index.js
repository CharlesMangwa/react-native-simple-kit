/* @flow */

import merge from 'lodash.merge'

import appStatus from './app'
import currentUser from './user'
import networkStatus from './network'

export const resolvers = merge(appStatus, currentUser, networkStatus)
