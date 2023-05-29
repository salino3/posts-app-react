import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../nav";
import { SwitchRoutes } from "@/router";
import * as classes from "./header.styles";

export const Header: React.FC = () => {

  const navigate = useNavigate();

  return (
    <header className={classes.root}>
      <button className={classes.btnHome} onClick={() => navigate(SwitchRoutes.root)}>Home</button>
      <Navbar />
    </header>
  );
};
