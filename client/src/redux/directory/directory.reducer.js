const INITIAL_STATE = {
  sections: [
    {
      title: 'shop by season',
      imageUrl: 'https://i.ibb.co/RNkDQ6d/Summer.png',
      id: 1,
      linkUrl: 'shop/seasons'
    },
    {
      title: 'shop by occasion',
      imageUrl: 'https://i.ibb.co/jW6tTj6/Anniversary.png',
      id: 2,
      linkUrl: 'shop/occasions'
    },
    {
      title: 'shop by type',
      imageUrl: 'https://i.ibb.co/kKRJz75/Tulip.png',
      id: 3,
      linkUrl: 'shop/types'
    },
    {
      title: 'shop by color',
      imageUrl: 'https://i.ibb.co/TTpCv7G/White-4-Cover.png',
      size: 'large',
      id: 4,
      linkUrl: 'shop/colors'
    },
    {
      title: 'designer choice',
      imageUrl: 'https://i.ibb.co/3ptB61K/5-Cover.png',
      size: 'large',
      id: 5,
      linkUrl: 'shop/designs'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
