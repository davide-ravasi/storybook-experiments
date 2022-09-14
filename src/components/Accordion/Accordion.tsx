import React from 'react'
import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import "./Accordion.css";

export interface Data {
  id: number;
  title: string;
  content: string;
}

interface AccordionProps {
  data: Data[]
}

const Accordion = ({ data }: AccordionProps) => {
  return (
    <div className="accordion-component">
      {Array.isArray(data) &&
        data.map(({ id, title, content }: Data) => {
          return <AccordionItem key={id} title={title} content={content} />;
        })}
    </div>
  );
};

const AccordionItem = ({ title, content }: Omit<Data, 'id'>) => {
  const [active, setActive] = useState(false);

  return (
    <div className="accordion-item">
      <div
        role="button"
        className="accordion-item__header"
        onClick={() => setActive(!active)}
      >
        {title}
        {active ? <FaArrowUp /> : <FaArrowDown />}
      </div>
      <div
        role="region"
        className={`accordion-item__content ${active ? "accordion-item__content--visible" : ""
          }`}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
