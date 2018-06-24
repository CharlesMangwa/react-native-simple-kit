/* @flow */

import React, { Children } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'
import {
  Mutation as ApolloMutation,
  type ApolloError,
  type MutationOptions,
} from 'react-apollo'
import PropTypes from 'prop-types'

import { BRAND_COLOR_RED } from '@theme/colors'

type DocumentNode = any
type OperationVariables = { [key: string]: any }

type ChildrenProps = {
  data: Object,
  error: ApolloError,
  loading: boolean,
  mutate: (options?: MutationOptions<*>) => Promise<*>,
}

type Props = {
  children?: React$StatelessFunctionalComponent<ChildrenProps>,
  component?: React$ComponentType<ChildrenProps>,
  error?: ({ error: ApolloError }) => React$Element<*>,
  loader?: React$StatelessFunctionalComponent<*>,
  mutation: DocumentNode,
  onCompleted?: (data: Object) => *,
  onError?: (error: ApolloError) => *,
  optimisticResponse?: Object,
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
// https://www.apollographql.com/docs/react/essentials/mutations.html
const Mutation = ({
  children,
  component,
  error: renderError,
  loader: renderLoader,
  mutation,
  onCompleted,
  onError,
  optimisticResponse,
  render,
  variables,
  ...remainingProps
}: Props): React$Element<*> => {
  if (!mutation)
    throw new Error('<Mutation> requires at least a GraphQL `mutation`')
  if (!children && !component && !render) {
    throw new Error(
      '<Query> requires at least one of the following' +
        ': children, `component` or `render`'
    )
  }
  return (
    <ApolloMutation
      mutation={mutation}
      variables={variables}
      onCompleted={onCompleted}
      onError={onError}
      optimisticResponse={optimisticResponse}
      {...remainingProps}
    >
      {(mutate, { data, error, loading }) => {
        if (error && renderError) return renderError({ error })

        if (loading && renderLoader) return renderLoader()

        // if (component)
        //   return createElement(component, { data, error, loading, mutate })

        if (typeof render === 'function')
          return render({ data, error, loading, mutate })

        if (typeof children === 'function')
          return children({ data, error, loading, mutate })

        if (children && !isEmptyChildren(children))
          return Children.only(children)

        return null
      }}
    </ApolloMutation>
  )
}

Mutation.defaultProps = {
  children: undefined,
  component: undefined,
  error: undefined,
  loader: loaderComponent,
  onCompleted: undefined,
  onError: undefined,
  optimisticResponse: undefined,
  render: undefined,
  variables: undefined,
}

Mutation.propTypes = {
  children: PropTypes.oneOf([PropTypes.func, PropTypes.element]),
  component: PropTypes.element,
  error: PropTypes.func,
  loader: PropTypes.func,
  mutation: PropTypes.object.isRequired, // eslint-disable-line
  onCompleted: PropTypes.func,
  onError: PropTypes.func,
  optimisticResponse: PropTypes.object, // eslint-disable-line
  render: PropTypes.func,
  variables: PropTypes.object, // eslint-disable-line
}

export default Mutation
