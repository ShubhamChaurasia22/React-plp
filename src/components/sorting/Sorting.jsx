import { useFilterContext } from "../../stores/filter-data";

export default function Sorting() {
    const { sorting } = useFilterContext();

    return (
        <>
            <form action="#">
                <label htmlFor="sort"></label>
                <select name="sort" id="sort" className="selection-style" onClick={sorting}>
                    <option value="lowest">Price (Lowest)</option>
                    <option value="highest">Price (Highest)</option>
                    <option value="priceUp">Product (a-z)</option>
                    <option value="priceDown">Product (z-a)</option>
                </select>
            </form>
        </>
    );
}