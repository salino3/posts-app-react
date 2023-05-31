export interface RouteProps {
    root: string;
    create: string;
    list: string;

};

export const SwitchRoutes: RouteProps = {
  root: "/posts-app-react",
  create: "/posts-app-react/create",
  list: "/posts-app-react/list",
};