import { useFilterContext } from "../../stores/filter-data";

export default function FilterItem ({ property }) {
    const {
        filters: { category, brand },
        allProducts, 
        updateFilterValue
     } = useFilterContext();

    const getUniqueCategoryData = (data, props) => {
        let newVal = data.map((currEle) => {
            return currEle[props];
        });
        return newVal = [ ...new Set(newVal) ];
    }

    const propertyData = getUniqueCategoryData(allProducts, property);

    return (
        <>
            <h4>{property.charAt(0).toUpperCase() + property.slice(1)}</h4>
            <div className="refinement-container">
                {propertyData?.map((propData, index) => {
                    return (
                    <button 
                        key={index} 
                        type="button" 
                        name={property} 
                        className={`refinement-value ${(propData === category || propData === brand) ? "active" : ""}`}
                        value={propData}
                        onClick={updateFilterValue}>{propData.charAt(0).toUpperCase() + propData.slice(1)}
                    </button>
                    );
                })}
            </div>
        </>
    )
}