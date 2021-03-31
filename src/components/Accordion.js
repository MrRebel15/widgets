import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeindex, setActiveindex] = useState(null);

  const onTitleClicked = (index) => {
    setActiveindex(index);
  };

  const RenderedItems = items.map((item, index) => {
    const active = index === activeindex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="ui styled accordion">
      {RenderedItems}
      <h1>{activeindex}</h1>
    </div>
  );
};

export default Accordion;
