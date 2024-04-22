import { useFilterContext } from "../../stores/filter-data";

export default function ClearFilter () {
    const { clearFilters } = useFilterContext();

    return (
        <>
            <div className="clear-btn">
                <button className="clear-filters" onClick={clearFilters}>Clear Filter</button>
            </div>
        </>
    );
}