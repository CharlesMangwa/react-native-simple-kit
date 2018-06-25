import gql from 'graphql-tag'

export const HERO_BASIC_INFOS_QUERY = gql`
  query Hero {
    hero {
      id
      name
      friends {
        id
        name
        appearsIn
      }
    }
  }
`

export const DROID_INFOS_QUERY = gql`
  query Droid($id: ID!) {
    droid(id: $id) {
      id
      name
      appearsIn
      primaryFunction
    }
  }
`
