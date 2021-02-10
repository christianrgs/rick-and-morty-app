const characterList = [
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
  {
    id: '8',
    name: 'Adjudicator Rick',
    status: 'Dead',
    species: 'Human',
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
    image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
    episode: [
      {
        air_date: 'September 10, 2017',
      },
    ],
  },
];

export default characterList;
