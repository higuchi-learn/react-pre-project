//Fruits.tsx
const fruits: string[] = ["蜜柑", "林檎", "西瓜", "ＢＡＮＡＮＡ", "オレンジ"];

export default function List() {
  const listItems = fruits.map(fruits =>
    <li>{fruits}</li>
  );
  return <ul>{listItems}</ul>;
}