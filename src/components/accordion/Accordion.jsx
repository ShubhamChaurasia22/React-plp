import { useState } from 'react';
import AccordionFilterXS from './AccordionFIlterXS';
import './AccordionFilter.css';


export default function Accordion () {
    const [active, setActive] = useState(null);

    const handleToggle = (index) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            <div className="filter-xs">
                <div className="row ">
                    <div className="card">
                        <div className="card-body">
                            <div className="rc-accordion-card">
                                <AccordionFilterXS key={1} active={active} handleToggle={handleToggle} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}