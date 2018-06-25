/* @flow */
/* eslint react/no-unused-prop-types: 0 */

import { Component } from 'react'
import { propType } from 'graphql-anywhere'
import gql from 'graphql-tag'

/** This is just here for learning purposes,
 *  not used in the app.
 */

class RNSK extends Component<*> {
  static fragments = {
    review: gql`
      fragment RNSKReview on Review {
        stars
        commentary
      }
    `,
  }

  static propTypes = {
    review: propType(RNSK.fragments.review).isRequired,
  }
}

export default RNSK
