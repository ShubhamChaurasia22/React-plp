import FilterItem from "./FilteeItem";
import ClearFilter from "./ClearFilter";

export default function FilterTiles () {
    
    return (
        <>  
            <div className="filter-lg">
                <h3 className="refinement-title">Filter</h3>
                <FilterItem property="category" />
                <FilterItem property="brand" />
                <ClearFilter />
            </div>
        </>
    );
}
