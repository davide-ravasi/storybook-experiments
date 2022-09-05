import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./Accordion.css";

const Accordion = ({ data }) => {
  const { id } = data;
  return (
    <div className="accordion-component">
      {Array.isArray(data) &&
        data.map(({ title, content }) => {
          return <AccordionItem key={id} title={title} content={content} />;
        })}
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        className="accordion-item__header"
        onClick={() => setActive(!active)}
      >
        {title}
        {active ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      <div
        className={`accordion-item__content ${
          active ? "accordion-item__content--visible" : ""
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
