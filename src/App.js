import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
const items = [
  {
    title: "What is React..?",
    content: "React is Javascript Framework",
  },
  {
    title: "Why we use React ",
    content: "It is my favourite library ",
  },
  {
    title: "How to we use React",
    content: "We use React by using Components",
  },
];

const options = [
  {
    label: "The Colour Red",
    value: "red",
  },
  {
    label: "The Colour Green",
    value: "green",
  },
  {
    label: "A shade of Blue",
    value: "blue",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div className=" ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/search">
        <Search />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Colour"
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      </Route>
    </div>
  );
};

export default App;
