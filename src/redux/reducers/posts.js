const ADD = 'ADD';
const DELETE = 'DELETE';

const initialState = {
  posts: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD : {
      return {
        ...state,
        posts: [...state.posts, {
          title: action.title,
          price: action.price,
          id: Math.floor(Math.random() * 100000)
        }]
      }
    }

    case DELETE : {
      return {
        ...state,
          posts: state.posts.filter((item) => item.id !== action.id)
      }
    }

    default: return state;
  }
}

export const addPost = (title, price) => {
  return {
    type: ADD,
    title,
    price,
  }
}

export const deletePost = (id) => {
  return {
    type: DELETE,
    id,
  }
}
