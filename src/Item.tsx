import { memo }from "react"
import './App.css';
import { ItemProps } from "./types";

export const Item = memo(({ item, handleClick }: ItemProps) => {
  return (
    <div
      key={item.name}
      className={`list-item list-item-${item.color} ${
        item.selected ? 'list-item-selected' : ''
      }`}
      onClick={() => handleClick(item)}
    >
      {item.name}
    </div>
  );
});
