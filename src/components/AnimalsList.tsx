//Vegetables.tsx
const animals: string[] = ["犬", "猫", "猿", "鳥", "鼠"];

export default function List() {
  const listItems = animals.map(animal =>
    <li>{animal}</li>
  );
  return <ul>{listItems}</ul>;
}