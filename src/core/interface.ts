interface GET_POSTS {
  type: "GET_POSTS";
  payload: Posts[];
};

interface CREATE_POST {
  type: "CREATE_POST";
  payload: Posts;
};

export type All_Actions = GET_POSTS | CREATE_POST;

//
export interface Posts {
  id?: number | null;
  title: string;
  description: string;
  img: string;
  keyWords: string[];
};

export const posts: Posts[] = [];

export interface State {
    posts: Posts[]
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  createPost: (post: Posts) => void;
};