import useLocalStorage from "./custom-hooks/useLocalStorage";

export default function LocalStorage() {
  const [storageValue, handleChange, handleClick] = useLocalStorage()
  return (
    <div>
      <input onChange={handleChange} value={storageValue} />

      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
