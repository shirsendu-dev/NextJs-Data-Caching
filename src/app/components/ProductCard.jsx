import Image from "next/image";


const ProductCard = ({product}) => {

    const {id, name, price, image, description} = product;
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                {/* <Image src={image} width={200} height={200} alt={name}></Image> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title text-3xl font-thin">{name}</h2>
                <p>{`$ ${price}`}</p>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;