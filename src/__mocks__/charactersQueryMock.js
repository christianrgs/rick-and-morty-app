import CHARACTERS_QUERY from '../graphql/queries/characters';

const mock = [
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: {
        name: 'rick',
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 5,
            next: 2,
            prev: null,
          },
          results: [
            {
              id: '1',
              name: 'Rick Sanchez',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              origin: {
                name: 'Earth (C-137)',
                type: 'Planet',
                dimension: 'Dimension C-137',
                residents: [
                  {
                    id: '38',
                  },
                  {
                    id: '45',
                  },
                  {
                    id: '71',
                  },
                ],
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                type: 'Planet',
                dimension: 'Replacement Dimension',
                residents: [
                  {
                    id: '1',
                  },
                  {
                    id: '2',
                  },
                  {
                    id: '3',
                  },
                  {
                    id: '4',
                  },
                  {
                    id: '5',
                  },
                ],
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
              episode: [
                {
                  air_date: 'December 2, 2013',
                },
                {
                  air_date: 'December 9, 2013',
                },
                {
                  air_date: 'May 31, 2020',
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: {
        name: 'rick',
        page: 2,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 5,
            next: 3,
            prev: 1,
          },
          results: [
            {
              id: '218',
              name: 'Mechanical Rick',
              status: 'unknown',
              species: 'Robot',
              gender: 'Male',
              origin: {
                name: 'Earth (Replacement Dimension)',
                type: 'Planet',
                dimension: 'Replacement Dimension',
                residents: [
                  {
                    id: '1',
                  },
                  {
                    id: '2',
                  },
                  {
                    id: '3',
                  },
                  {
                    id: '4',
                  },
                  {
                    id: '5',
                  },
                  {
                    id: '9',
                  },
                  {
                    id: '11',
                  },
                ],
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                type: 'Planet',
                dimension: 'Replacement Dimension',
                residents: [
                  {
                    id: '1',
                  },
                  {
                    id: '2',
                  },
                  {
                    id: '3',
                  },
                  {
                    id: '4',
                  },
                  {
                    id: '5',
                  },
                  {
                    id: '9',
                  },
                ],
              },
              image:
                'https://rickandmortyapi.com/api/character/avatar/218.jpeg',
              episode: [
                {
                  air_date: 'July 30, 2017',
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: {
        name: 'rick',
        page: 3,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 5,
            next: 4,
            prev: 2,
          },
          results: [
            {
              id: '299',
              name: 'Robot Rick',
              status: 'unknown',
              species: 'Robot',
              gender: 'Male',
              origin: {
                name: 'unknown',
                type: null,
                dimension: null,
                residents: null,
              },
              location: {
                name: 'Citadel of Ricks',
                type: 'Space station',
                dimension: 'unknown',
                residents: [
                  {
                    id: '8',
                  },
                  {
                    id: '14',
                  },
                  {
                    id: '15',
                  },
                  {
                    id: '18',
                  },
                  {
                    id: '21',
                  },
                  {
                    id: '22',
                  },
                ],
              },
              image:
                'https://rickandmortyapi.com/api/character/avatar/299.jpeg',
              episode: [
                {
                  air_date: 'April 7, 2014',
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: {
        name: 'morty',
        page: 1,
      },
    },
    result: {
      data: {
        characters: {
          info: {
            pages: 5,
            next: 2,
            prev: null,
          },
          results: [
            {
              id: '2',
              name: 'Morty Smith',
              status: 'Alive',
              species: 'Human',
              gender: 'Male',
              origin: {
                name: 'Earth (C-137)',
                type: 'Planet',
                dimension: 'Dimension C-137',
                residents: [
                  {
                    id: '38',
                  },
                ],
              },
              location: {
                name: 'Earth (Replacement Dimension)',
                type: 'Planet',
                dimension: 'Replacement Dimension',
                residents: [
                  {
                    id: '1',
                  },
                  {
                    id: '2',
                  },
                  {
                    id: '3',
                  },
                ],
              },
              image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
              episode: [
                {
                  air_date: 'May 31, 2020',
                },
              ],
            },
          ],
        },
      },
    },
  },
  {
    request: {
      query: CHARACTERS_QUERY,
      variables: {
        name: 'rock',
        page: 1,
      },
    },
    result: {
      errors: [
        {
          message: '404: Not Found',
          locations: [
            {
              line: 2,
              column: 3,
            },
          ],
          path: ['characters'],
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            response: {
              url: 'http://localhost:8080/api/character/?name=rock&page=1',
              status: 404,
              statusText: 'Not Found',
              body: {
                error: 'There is nothing here',
              },
            },
          },
        },
      ],
      data: {
        characters: null,
      },
    },
  },
];

export default mock;
