import * as React from "react";
import { TagContext } from "./TagContext";

let AllTags = [
  "Html",
  "CSS",
  "JavaScript",
  "ReactJS",
  "GitHub",
  "TypeScript",
  "Celebal"
];

const Tags = () => {
  const { tags, handleChange } = React.useContext(TagContext);

  const handleAllChange = () => {};

  React.useEffect(() => {
    console.log("Tags - ", tags);
  }, [tags]);

  return (
    <>
      <h1>Filter Tags</h1>
      <div className="tags-container">
        <div className="w-fit p-2 m-2">
          <button
            className="p-1 border-2 border-black rounded font-semibold"
            onClick={handleAllChange}
          >
            Apply All
          </button>
        </div>
        {AllTags.map((tag, i) => {
          return (
            <div className="w-fit p-2 m-2" key={i}>
              <input
                className="mt-2"
                type="checkbox"
                value={tag}
                name={tag}
                onChange={(e) => handleChange(e.target.value)}
                // checked={tags.includes("html")}
              />
              <label htmlFor={tag}>#{tag}</label>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Tags;
