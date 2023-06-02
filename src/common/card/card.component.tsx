import React from "react";
import { GlobalContext, MyState, Posts } from "@/core";

interface Props {
  first: string;
setFirst: React.Dispatch<React.SetStateAction<string>>};

export const CardInput: React.FC<Props> = (props) => {
  const { first, setFirst } = props;

  const { state } = React.useContext<MyState>(GlobalContext);
  const { posts } = state;

  const onSearchCard = (event: Posts): void => {
    // setFirst(event?.id?.toString());
    setFirst(String(event?.id));
  };

  return (
    <>
      {!posts
        ? "Loading"
        : posts
            .filter((item: Posts) => {
              let searchTerm = "";
              let x: string = first?.toLowerCase() || "";
              searchTerm = x || "";
              const thetitle: string = item.title.toLowerCase() || "";
              const theid =  item?.id?.toString();

              return (
                searchTerm &&
                (theid?.includes(searchTerm) || thetitle.includes(searchTerm)) &&
                (thetitle || theid)
              );
            })
            .slice(0, 10)
            .map((item: Posts) => (
              <div
                onClick={() => onSearchCard(item)}
                className="divRows"
                key={item.id}
              >
                <b>
                  {item.id} ~ {item.title}
                </b>
              </div>
            ))}
    </>
  );
};





