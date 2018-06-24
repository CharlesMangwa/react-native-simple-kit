/* @flow */
/* eslint react/no-unused-prop-types: 0 */

import { Component } from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

class RNSK extends Component<*> {
  static fragments = {
    hero: gql`
      fragment RNSKHero on User {
        id
        name
        friends {
          name
          appearsIn
        }
      }
    `,
    review: gql`
      fragment RNSKReview on User {
        stars
        commentary
      }
    `,
  }

  static propTypes = {
    hero: propType(RNSK.fragments.hero).isRequired,
    review: propType(RNSK.fragments.review).isRequired,
  }
}

export default RNSK
