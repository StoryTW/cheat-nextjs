export const fakeGameData = {
  valorant: {
    slug: 'valorant',
    name: 'Valorant',
    info: {
      title: 'Valorant the game',
      description:
        'VALORANT Converse all star – is a model of casual shoe manufactured by Converse (a subsidiary of Nike, Inc. since 2003) that was initially developed as a basketball shoe in the early 20th century.',
      images: [
        {
          src: '/img/valorant/valorang_1.png',
          alt: 'valorant_1',
        },
        {
          src: '/img/valorant/valorant_2.webp',
          alt: 'valorant_2',
        },
      ],
    },
    tariffs: [
      {
        name: 'Подписка #1 VAL',
      },
      {
        name: 'Подписка #2 VAL',
      },
      {
        name: 'Подписка #3 VAL',
      },
      {
        name: 'Подписка #4 VAL',
      },
    ],
  },
  cs: {
    slug: 'cs',
    name: 'CS2',
    info: {
      title: 'CS2 the game',
      description:
        'CS2 Converse all star – is a model of casual shoe manufactured by Converse (a subsidiary of Nike, Inc. since 2003) that was initially developed as a basketball shoe in the early 20th century.',
      images: [
        {
          src: '/img/cs/cs_1.jpg',
          alt: 'cs_1',
        },
        {
          src: '/img/cs/cs_2.jpg',
          alt: 'cs_2',
        },
      ],
    },
    tariffs: [
      {
        name: 'Подписка #1 CS',
      },
      {
        name: 'Подписка #2 CS',
      },
      {
        name: 'Подписка #3 CS',
      },
      {
        name: 'Подписка #4 CS',
      },
    ],
  },
  dota2: {
    slug: 'dota2',
    name: 'DOTA 2',
    info: {
      title: 'DOTA 2 the game',
      description:
        'DOTA 2 Converse all star – is a model of casual shoe manufactured by Converse (a subsidiary of Nike, Inc. since 2003) that was initially developed as a basketball shoe in the early 20th century.',
      images: [
        {
          src: '/img/dota/dota_1.jpeg',
          alt: 'dota_2_1',
        },
        {
          src: '/img/dota/dota_2.jpeg',
          alt: 'dota_2_2',
        },
      ],
    },
    tariffs: [
      {
        name: 'Подписка #1 DOTA2',
      },
      {
        name: 'Подписка #2 DOTA2',
      },
      {
        name: 'Подписка #3 DOTA2',
      },
      {
        name: 'Подписка #4 DOTA2',
      },
    ],
  },
};

export const fakeGameList = [
  {
    slug: 'valorant',
    name: 'Valorant',
  },
  {
    slug: 'cs',
    name: 'CS2',
  },
  {
    slug: 'dota2',
    name: 'DOTA 2',
  },
];

export const fakeProfileData = {
  account: {
    name: 'Name',
    id: '23213123',
    email: 'example@mail.ru'
  },
  subscription: [
    {
      id: '1',
      name: 'CS',
      status: 'Отсутствует',
      price: '1500',
      expired: {
        d: '27',
        h: '12',
        m: '43',
      },
    },
    {
      id: '2',
      name: 'Valorant',
      status: 'Приобретена',
      price: '7500',
      expired: {
        d: '27',
        h: '15',
        m: '21',
      },
    },
  ],
};
