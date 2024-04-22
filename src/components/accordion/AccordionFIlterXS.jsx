import { useRef } from 'react';
import FilterItem from "../filter/FilteeItem";
import ClearFilter from "../filter/ClearFilter";

export default function AccordionFilterXS (props) {
    const contentEl = useRef();
    const { handleToggle, active, id } = props;

    return (
        <>
            <div className="rc-accordion-header">
                <div className={`rc-accordion-toggle p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
                    <h5 className="rc-accordion-title">Filters</h5>
                    <i className="fa fa-chevron-down rc-accordion-icon"></i>
                </div>
            </div>
            <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                active === id
                    ? { height: contentEl.current.scrollHeight }
                    : { height: "0px" }
            }>
                <div className="rc-accordion-body">
                    <FilterItem property="category" />
                    <FilterItem property="brand" />
                    <ClearFilter />
                </div>
            </div>
        </>
    )
};
