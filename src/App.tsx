import * as React from "react";
import Tags from "./Tags";
import { db } from "./db";
import "./styles.css";
import { TagContext } from "./TagContext";

export default function App() {
  const { tags } = React.useContext(TagContext);

  React.useEffect(() => {
    console.log("Tags in App - ", tags);
  }, [tags]);
  const [searchTerm, setSearchTerm] = React.useState("");
  return (
    <div className="App">
      <Tags />
      <br />
      <input
        name="search"
        placeholder="Search..."
        type="text"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {db
        .filter((item) => {
          if (!searchTerm || searchTerm === "") return item;
          if (
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.url.toLowerCase().includes(searchTerm.toLowerCase())
          )
            return item;
          if (item.tags) {
            if (item.tags.includes(tags[0])) return item;
          }
          return item;
        })
        .map((item, i) => {
          return (
            <div key={i}>
              <p key={i}>{item.name}</p>
              {item.tags.map((tag, i) => (
                <span key={i}>#{tag}, </span>
              ))}
            </div>
          );
        })}
    </div>
  );
}
