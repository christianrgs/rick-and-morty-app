import gql from 'graphql-tag';

const CHARACTERS_QUERY = gql`
  query characters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        origin {
          name
          type
          dimension
          residents {
            id
          }
        }
        location {
          name
          type
          dimension
          residents {
            id
          }
        }
        image
        episode {
          air_date
        }
      }
    }
  }
`;

export default CHARACTERS_QUERY;
