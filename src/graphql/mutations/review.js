import { gql } from 'apollo-boost'
import RNSK from '@graphql/fragments'

export const CREATE_REVIEW_MUTATION = gql`
  mutation CreateReview($episode: Episode, $review: ReviewInput!) {
    createReview(episode: $episode, review: $review) {
      ...RNSKReview
    }
  }
  ${RNSK.fragments.review}
`
