export interface RouteProps {
  root: string;
  create: string;
  list: string;
  update: string;
  info: string;
};

export const SwitchRoutes: RouteProps = {
  root: "/posts-app-react",
  create: "/posts-app-react/create",
  list: "/posts-app-react/list",
  update: "/posts-app-react/update",
  info: "/posts-app-react/info",
};