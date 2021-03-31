import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";
// const items = [
//     {
//       title: "What is React..?",
//       content: "React is Javascript Framework",
//     },
//     {
//       title: "Why we use React ",
//       content: "It is my favourite library ",
//     },
//     {
//       title: "How to we use React",
//       content: "We use React by using Components",
//     },
//   ];

// const options = [
//   {
//     label: "The Colour Red",
//     value: "red",
//   },
//   {
//     label: "The Colour Green",
//     value: "green",
//   },
//   {
//     label: "A shade of Blue",
//     value: "blue",
//   },
// ];
const App = () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div className=" ui container">
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          selected={selected}
          onSelectedChange={setSelected}
          options={options}
        />
      ) : null} */}

      <Translate />
    </div>
  );
};

export default App;
