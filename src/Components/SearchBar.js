import { useState } from "react";

export default function SearchBar(props) {
  const [search, setSearch] = useState("");

  const onSearchChangeLocal = (e) => {
    const newSearch = e.currentTarget.value;
    setSearch(newSearch);
    props.onSearchChangeProp(newSearch);
  };

  return (
    <>
      <input type="text" value={search} onChange={onSearchChangeLocal} />
    </>
  );
}
