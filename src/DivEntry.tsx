import useClickCount from "./custom-hooks/useClickCount";

export default function DivEntry() {
  const [countDivEntry, handleMouseEnter] = useClickCount();
  return (
    <div onMouseEnter={handleMouseEnter}>entered {countDivEntry} times</div>
  );
}
