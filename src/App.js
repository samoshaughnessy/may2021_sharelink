import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import AddButton from "./Components/AddButton";
import LinkList from "./Components/LinkList";
import SearchBar from "./Components/SearchBar";

export default function App() {
  const storedLinks = localStorage.getItem("links");
  const parsedLinks =
    storedLinks === "" || storedLinks === null ? [] : JSON.parse(storedLinks);
  const [links, setLinks] = useState(
    Array.isArray(parsedLinks) ? parsedLinks : []
  );
  const [search, setSearch] = useState("");

  const filteredLinks = (search) => {
    const lowerSearch = search.toLowerCase();
    return links.filter((link) => {
      return (
        link.name.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.url.toLowerCase().indexOf(lowerSearch) > -1 ||
        link.tags
          .map((tag) => {
            return tag.name.toLowerCase().indexOf(lowerSearch) > -1;
          })
          .indexOf(true) > -1
      );
    });
  };

  const onAddButtonAddLink = (name, url, tags) => {
    const newLinks = links.concat([
      {
        name,
        url,
        tags,
      },
    ]);
    setLinks(newLinks);
    localStorage.setItem("links", JSON.stringify(newLinks));
  };

  const onSearchBarChange = (search) => {
    setSearch(search);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-4 left-panel centered">
          <img src={logo} className="App-logo" alt="logo" />
          <br />
          <p>King of JavaScript</p>
          <br />
          <p>Links Shared: {links.length}</p>
          <AddButton onAddLinkProps={onAddButtonAddLink} />
        </div>
        <div className="col-8 right-panel centered">
          <h4>Search Stored Links :</h4>
          <SearchBar onSearchChangeProp={onSearchBarChange} />

          <h3>Links for: {search}</h3>
          <LinkList links={filteredLinks(search)} />
        </div>
      </div>
    </div>
  );
}
