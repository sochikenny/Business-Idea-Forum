import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_POST,
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING,
  ADD_COMMENT, //ADDED COMMENT
  SET_CURRENT_COMMENT, //ADDED COMMENT
  ISAUTHENTICATED,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_POST:
      return {
        ...state,
        currentPost: action.post,
        loading: false,
      };

    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
        loading: false,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
        loading: false,
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        }),
      };

    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [action.post, ...state.favorites],
        loading: false,
      };

    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: [...state.favorites],
        loading: false,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter((post) => {
          return post._id !== action._id;
        }),
      };

    //ADDED COMMENTS HERE-------
    case SET_CURRENT_COMMENT:
      return {
        ...state,
        currentComment: action.comment,
        loading: false,
      };

    case ADD_COMMENT:
      const comments = action.comment;
      return {
        ...state,
        currentPost: { ...state.currentPost, comments },
        loading: false,
      };
    //-------------------------------

    case LOADING:
      return {
        ...state,
        loading: true,
      };

    case ISAUTHENTICATED:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    currentPost: {
      _id: 0,
      title: "",
      body: "",
      author: "",
      currentComment: {
        body: "",
      },
    },
    comments: [],
    favorites: [],
    loading: false,
    isAuthenticated: false,
    user: {},
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
