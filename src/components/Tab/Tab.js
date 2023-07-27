import './Tab.scss';

const Tab = ({ className, page, category, brand, product, ...props }) => {
    return (
        <div className={`tab ${className}`} >
            { page && <span> {page} </span> }
            { category && <span>/ {category} </span> }
            { brand && <span>/ {brand} </span> }
            { product && <span>/ {product} </span> }
        </div>
    )
}

export default Tab;