import * as React from "react";

interface ITagContext {
  tags: any;
  handleChange: (name: string) => void;
}

export const TagContext = React.createContext({} as ITagContext);

interface ITagProvider {
  children: React.ReactNode;
}

export const TagProvider = ({ children }: ITagProvider) => {
  const [tags, setTags] = React.useState([] as string[]);

  const handleChange = (name: string) => {
    debugger;
    let tag = name;
    let temp = tags;
    if (temp.includes(tag)) {
      temp.splice(temp.indexOf(tag), 1);
    } else {
      temp.push(tag.toString());
    }
    setTags(temp);
  };

  React.useEffect(() => {
    debugger;
    console.log("Tags in Context - ", tags);
  }, [tags]);
  return (
    <TagContext.Provider value={{ tags, handleChange }}>
      {children}
    </TagContext.Provider>
  );
};
