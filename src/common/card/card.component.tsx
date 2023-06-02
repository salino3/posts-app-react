import React from "react";
import { GlobalContext, MyState, Posts } from "@/core";
import * as classes from './card.styles';

interface Props {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const CardInput: React.FC<Props> = (props) => {
  const { text, setText } = props;

  const { state } = React.useContext<MyState>(GlobalContext);
  const { posts } = state;

  const onSearchCard = (event: Posts): void => {
    setText(String(event?.id));
  };

  return (
    <>
      {!posts
        ? "Loading"
        : posts
            .filter((post: Posts) => {
              let searchTerm = "";
              let x: string = text?.toLowerCase() || "";
              searchTerm = x || "";
              const thetitle: string = post.title.toLowerCase() || "";
              const theid =  post?.id?.toString();

              return (
                searchTerm &&
                (theid?.includes(searchTerm) || thetitle.includes(searchTerm)) &&
                (thetitle || theid)
              );
            })
            .slice(0, 10)
            .map((post: Posts) => (
              <div
                onClick={() => onSearchCard(post)}
                className={classes.content}
                key={post.id}
              >
                <b>
                  {post.id} ~ {post.title}
                </b>
              </div>
            ))}
    </>
  );
};





