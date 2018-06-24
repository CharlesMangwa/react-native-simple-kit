/* @flow */

import React, { Children, createElement } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import {
  Query as ApolloQuery,
  type ApolloError,
  type ApolloQueryResult,
} from 'react-apollo'
import PropTypes from 'prop-types'

import { BRAND_COLOR_RED } from '@theme/colors'

type DocumentNode = any
type OperationVariables = { [key: string]: any }

type ApolloRefetch = (
  variables?: ?OperationVariables
) => Promise<ApolloQueryResult<Object>>

type ChildrenProps = {
  data: ?Object,
  error: ?ApolloError,
  fetchMore: ({
    query?: DocumentNode,
    variables?: OperationVariables,
    updateQuery: Function,
  }) => Promise<*>,
  refetch: ApolloRefetch,
}

type Props = {
  children?: React$StatelessFunctionalComponent<ChildrenProps>,
  component?: React$ComponentType<ChildrenProps>,
  error?: ({ error: ApolloError, refetch: ?ApolloRefetch }) => React$Element<*>,
  loader?: () => ?React$Element<*>,
  query: DocumentNode,
  render?: React$StatelessFunctionalComponent<ChildrenProps>,
  variables?: OperationVariables,
}

const isEmptyChildren = children => Children.count(children) === 0

const loaderComponent = (): React$Element<*> => (
  <View style={{ alignSelf: 'center' }}>
    <StatusBar networkActivityIndicatorVisible />
    <ActivityIndicator color={BRAND_COLOR_RED} />
  </View>
)

// Check here if you need more props:
// https://www.apollographql.com/docs/react/essentials/queries.html
const Query = ({
  children,
  component,
  error: renderError,
  loader: renderLoader,
  query,
  render,
  variables,
  ...remainingProps
}: Props): React$Element<*> => {
  if (!query) throw new Error('<Query> requires at least a GraphQL `query`')
  if (!children && !component && !render) {
    throw new Error(
      '<Query> requires at least one of the following' +
        ': children, `component` or `render`'
    )
  }
  return (
    <ApolloQuery query={query} variables={variables} {...remainingProps}>
      {({ data, error, fetchMore, loading, refetch }) => {
        // $FlowFixMeProps
        if (error && renderError) return renderError({ error, refetch })

        if (loading && renderLoader) return renderLoader()

        if (component)
          return createElement(component, { data, error, fetchMore, refetch })

        if (typeof render === 'function')
          return render({ data, error, fetchMore, refetch })

        if (typeof children === 'function')
          return children({ data, error, fetchMore, refetch })

        if (children && !isEmptyChildren(children))
          return Children.only(children)

        return null
      }}
    </ApolloQuery>
  )
}

Query.defaultProps = {
  children: undefined,
  component: undefined,
  error: undefined,
  loader: loaderComponent,
  render: () => null,
  variables: undefined,
}

Query.propTypes = {
  children: PropTypes.oneOf([PropTypes.func, PropTypes.element]),
  component: PropTypes.element,
  error: PropTypes.func,
  loader: PropTypes.func,
  query: PropTypes.object.isRequired, // eslint-disable-line
  render: PropTypes.func,
  variables: PropTypes.object, // eslint-disable-line
}

export default Query
