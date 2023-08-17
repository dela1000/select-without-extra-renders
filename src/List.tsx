import { Fragment, useState, useMemo, useCallback, useEffect } from "react";
import { Item } from "./Item";
import { ListProps, ItemType } from "./types";



const List = ({ items }: ListProps) => {
  const [listArray, setListArray] = useState<string[]>([]);
  const [listString, setListString] = useState<string>("");
  const [listItems, setListItems] = useState<ItemType[]>(items);

  const allItems = useMemo(() => {
    return listItems;
  }, [listItems]);


const updateListString = useCallback((toUpdate: ItemType) => {
  if (!toUpdate.selected) {
    setListArray((prevListArray) => [...prevListArray, toUpdate.name]);
  } else {
    setListArray((prevListArray) =>
      prevListArray.filter((itemName) => itemName !== toUpdate.name)
    );
  }
}, []);

  const handleClick = useCallback(
    (item: ItemType) => {
      updateListString(item);
      setListItems((prev) => {
        return prev.map((toUpdate) => {
          if (item.name === toUpdate.name) {
            if (!item.selected) {
              return { ...toUpdate, selected: true };
            } else {
              return { ...toUpdate, selected: false };
            }
          }
          return toUpdate;
        });
      });
    },
    [updateListString]
  );

  useEffect(() => {
  setListString(listArray.join(", "));
}, [listArray]);

  return (
    <Fragment>
      {listArray.length > 0 && (
        <div className="list-string">Items: {listString}</div>
      )}
      <div className="list">
        {allItems.map((item) => {
          return (
            <Item key={item.name} item={item} handleClick={handleClick} />
          );
        })}
      </div>
    </Fragment>
  );
};

export default List;
