interface GET_POSTS {
  type: "GET_POSTS";
  payload: Posts[];
};

export type All_Actions = GET_POSTS;

//
export interface Posts {
  id?: number | null;
  name: string;
  description: string;
  img: string;
  keyWords: string[];
}

export const posts: Posts[] = [];

export interface State {
    posts: Posts[]
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
};