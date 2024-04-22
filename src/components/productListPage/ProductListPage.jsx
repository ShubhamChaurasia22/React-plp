import { useProductHook } from "../../stores/product-data";
import { useFilterContext } from "../../stores/filter-data";
import { useMediaQuery } from 'react-responsive';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import ProductTiles from "./ProductTiles";
import FilterTiles from "../filter/FilterTiles";
import Accordion from "../accordion/Accordion";
import './ProductListPage.css'
import Loader from "../skeleton/Loader.jsx";
import Sorting from "../sorting/Sorting.jsx";

export default function ProductListPage () {
    const { isLoading } = useProductHook();
    const { filterProducts, filterProductsLength } = useFilterContext();

    const isMobile = useMediaQuery({ maxWidth: 768 });

    if (isLoading) {
        return (
            <>
                <SkeletonTheme color="grey" highlightColor="#444">
                    <section className="loading-page">
                        <Loader LoaderLength={8} />
                    </section>
                </SkeletonTheme>
            </>
        );
    }
    return (
        <>
            <section className= "product-list-page">
                <div className="product-conatiner">

                    {/* filters */}
                    <div className="row refinement">
                        <div className="refinement-options">
                            {isMobile ? <Accordion /> : <FilterTiles />}
                        </div>
                    </div>

                    <div className="grid-wrapper">

                        {/* Sorting Filter */}
                        <div className="row selection-row">
                            <div className="result-count"> 
                                {filterProductsLength} Result{filterProductsLength > 1 ? 's' : ''}
                            </div>
                            <div className="sorting-feature">
                                <Sorting />
                            </div>
                        </div>

                        {/* Product Tiles */}
                        <div className="row product-grid-wrapper">
                            {filterProducts?.map((product) => (
                                <div key={product.id} className="grid-tile-wrapper">
                                    <ProductTiles key={product.id} {...product} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
