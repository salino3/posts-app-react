import React from "react";
import { Routes, Route } from "react-router-dom";
import { CreatePostLayout, HomeLayout, ListPostsLayout } from "@/layout";
import { SwitchRoutes } from "./interfaces";

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={SwitchRoutes.root} element={<HomeLayout />} />
      <Route path={SwitchRoutes.create} element={<CreatePostLayout />} />
      <Route path={SwitchRoutes.list} element={<ListPostsLayout />} />
    </Routes>
  );
};
