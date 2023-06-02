import React from "react";
import { useNavigate } from "react-router-dom";
import { cx } from "@emotion/css";
import { CardInput } from "../card/card.component";
import * as classes from "./search-bar.styles";

export const SearchBar: React.FC = () => {
  const navigate = useNavigate();

  const [text, setText] = React.useState<string>("");
  const [toggleList, setToggleList] = React.useState<boolean>(true);

  const divCardRef = React.useRef<HTMLDivElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setText(event.target.value);
    setToggleList(true);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: any
  ) => {
    event.preventDefault();
    //
    let Searching: string = "";
    if (
      event &&
      event?.target &&
      event?.target?.keyWords &&
      event?.target?.keyWords.value
    ) {
      Searching = event?.target?.keyWords?.value;
    }
    navigate(`/info/${Searching}`);
    setText("");
  };

  //
  React.useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (
        divCardRef.current &&
        // con contains() se comprueba si ese elemento es un ancestro del elemento que fue clickeado
        !divCardRef.current.contains(event.target)
      ) {
        setToggleList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <label className={classes.label} htmlFor="keyWords">
        Key Words
      </label>
      <input
        onChange={handleChange}
        value={text}
        className={classes.input}
        name="keyWords"
        placeholder="What do you look for?"
        type="text"
      />
      <button
        className={cx(classes.btn, { [classes.btnActive]: !!text })}
        disabled={text ? false : true}
        type="submit"
      >
        Search
      </button>
      <div className="divCard" ref={divCardRef}>
        {toggleList && text ? <CardInput text={text} setText={setText} /> : ""}
      </div>
    </form>
  );
};
