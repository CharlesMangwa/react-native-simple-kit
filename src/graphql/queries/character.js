import gql from 'graphql-tag'
import RNSK from '@graphql/fragments'

export const HERO_BASIC_INFOS_QUERY = gql`
  query Hero {
    hero {
      ...RNSKHero
    }
  }
  ${RNSK.fragments.hero}
`

export const DROID_INFOS_QUERY = gql`
  query Droid(id: ID!) {
    droid(id: $id) {
      id
      name
      appearsIn
      primaryFunction
    }
  }
`
