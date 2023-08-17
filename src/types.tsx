export interface ItemType {
  name: string;
  color: string;
  selected?: boolean
};

export interface ItemProps {
    item: ItemType,
    handleClick: (item: ItemType) => void
}

export interface ListProps {
  items: ItemType[];
}
