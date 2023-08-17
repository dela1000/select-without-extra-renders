import { ItemType } from "./types";

const sizes = ['tiny', 'small', 'medium', 'large', 'huge'];
const colors = ['navy', 'blue', 'aqua', 'teal', 'olive', 'green', 'lime', 'yellow', 'orange', 'red', 'maroon', 'fuchsia', 'purple', 'silver', 'gray', 'black'];
const fruits = ['apple', 'banana', 'watermelon', 'orange', 'peach', 'tangerine', 'pear', 'kiwi', 'mango', 'pineapple'];


const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const items: ItemType[] = sizes.reduce<ItemType[]>(
  (items, size) =>
    items.concat(
      fruits.reduce<ItemType[]>(
        (acc, fruit) =>
          acc.concat(
            colors.map<ItemType>((color) => ({
              name: `${capitalize(size)} ${capitalize(color)} ${capitalize(fruit)}`,
              color,
            }))
          ),
        []
      )
    ),
  []
);
