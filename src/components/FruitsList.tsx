//Fruits.tsx
const fruits: string[] = ["みかん", "林檎", "西瓜", "バナナ", "オレンジ"];

export default function List() {
  const listItems = fruits.map(fruits =>
    <li>{fruits}</li>
  );
  return <ul>{listItems}</ul>;
}
