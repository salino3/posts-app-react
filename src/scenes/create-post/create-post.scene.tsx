import React from "react";
import { Footer, Header } from "@/common";
import { CreatePost } from "@/pods";
import * as classes from "./create-post.styles";

export const CreatePostScene: React.FC = () => {
  return (
    <div className={classes.root}>
      <Header />
      <CreatePost />
      <Footer />
    </div>
  );
};
