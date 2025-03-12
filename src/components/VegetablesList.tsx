//Vegetables.tsx
const vegetables: string[] = ["tomato", "potato", "onion", "carot", "cabbage"];

export default function List() {
  const listItems = vegetables.map(vegetable =>
    <li>{vegetable}</li>
  );
  return <ul>{listItems}</ul>;
}