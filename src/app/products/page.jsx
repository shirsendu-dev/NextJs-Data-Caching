import ProductCard from "../components/ProductCard";

const getProducts = async() => {

    const res = await fetch('http://localhost:3001/products');
    return res.json(); 
}


const ProductsPage = async() => {

    const products = await getProducts();

    return (
        <div className="py-15 container mx-auto">
            {/* <h2>Product Page : {products.length}</h2> */}
            <div className="grid grid-cols-3 gap-4">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;