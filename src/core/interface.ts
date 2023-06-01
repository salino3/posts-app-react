interface GET_POSTS {
  type: "GET_POSTS";
  payload: Posts[];
};

interface CREATE_POST {
  type: "CREATE_POST";
  payload: Posts;
};

interface DELETE_POST {
  type: "DELETE_POST";
  payload: number;
};

interface UPDATE_POST {
  type: "UPDATE_POST";
  payload: number;
};

export type All_Actions = GET_POSTS | CREATE_POST | DELETE_POST | UPDATE_POST;

//
export interface Posts {
  id?: number | null;
  title: string;
  description: string;
  img: string;
  keyWords: string[];
};

export const posts: Posts[] = [
  {
    id: 1,
    title: "Gato",
    description: "Gato con ojos bicolores amarillo y azúl",
    img: "https://tse3.mm.bing.net/th?id=OIP.pq0brUL3WChYQ-S1BSsigQHaFj&pid=Api&P=0&h=180",
    keyWords: ["Gato", "Blanco", "Bicolor"],
  },
  {
    id: 2,
    title: "Gato",
    description: "Gato con ojos bicolores amarillo y azúl",
    img: "https://tse3.mm.bing.net/th?id=OIP.pq0brUL3WChYQ-S1BSsigQHaFj&pid=Api&P=0&h=180",
    keyWords: ["Gato", "Blanco", "Bicolor"],
  },
  {
    id: 3,
    title: "Gato",
    description: "Gato con ojos bicolores amarillo y azúl",
    img: "https://tse3.mm.bing.net/th?id=OIP.pq0brUL3WChYQ-S1BSsigQHaFj&pid=Api&P=0&h=180",
    keyWords: ["Gato", "Blanco", "Bicolor"],
  },
];

// export const posts: Posts[] = [];

export interface State {
    posts: Posts[]
};

export interface MyState {
  state: State;
  dispatch: React.Dispatch<All_Actions>;
  createPost: (post: Posts) => void;
  deletePost: (id: number) => void
};