import { All_Actions, Posts, State } from "./interface";

export const MyReducer = (state: State, action: All_Actions) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "CREATE_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case "DELETE_POST":
      return {
        ...state,
        posts: state.posts.filter((post: Posts) => post.id !== action.payload),
      };
    case "UPDATE_POST":
      return {
        ...state,
        posts: state.posts.map((post: Posts) =>
          post.id !== action.payload.id ?  post : action.payload
        ),
      };

    default:
      return state;
  }
};
