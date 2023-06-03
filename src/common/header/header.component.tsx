import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../nav";
import { SearchBar } from "../search-bar/search-bar.component";
import { SwitchRoutes } from "@/router";
import reactImg from '@/assets/react.svg';
import * as classes from "./header.styles";

export const Header: React.FC = () => {

  const navigate = useNavigate();

  return (
    <header className={classes.root}>
       <button
        className={classes.btnHome}
        onClick={() => navigate(SwitchRoutes.root)}
        >
        Home
       </button>
      <Navbar />
      <div className={classes.boxContent}>
       <SearchBar />
       <img src={reactImg} alt="react" className={classes.rotation} />
      </div>
    </header>
  );
};
