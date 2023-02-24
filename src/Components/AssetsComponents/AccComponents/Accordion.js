import React from "react";
import AccordionItem from "./Accordionitem";
import {faqs} from "./data";

const Accordion = () => {
    return (
        <ul className={'accordion'}>
            {faqs.map((faq, index) => (
                <AccordionItem key={index} faq={faq} />
            ))}
        </ul>
    );
};

export default Accordion;