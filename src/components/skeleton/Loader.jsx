import Skeleton from 'react-loading-skeleton';

export default function Loader({LoaderLength}) {
    const loaders = Array.from({ length: LoaderLength }, (_, index) => index);
    return (
        <>
            {loaders.map((_, index) => (
                <div className="product">
                    <div className="product-tile">
                        <div className="product-tile-container">
                            <div className="image-container">
                                <Skeleton className='image-skeleton' />
                            </div>
                            <div className="tile-body">
                                <Skeleton className='line-skeleton' />
                            </div>
                            <div className="cta-button">
                                <Skeleton className='line-skeleton' />
                            </div>
                        </div>
                    </div>
                </div>
            )) 
            }
        </>
    );
}