'use client';
import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import { UserContext } from "../contexts/UserContext";

const BookCard = ({ book }) => {

    const {id, title, author, price, image, description, category, rating} = book;

    const user = use(UserContext);

    console.log(`From bookcard context`, user);
    

    return (
        <div className="card bg-base-100 w-full shadow-sm">
            <figure>
                {/* <Image
                src={image}
                fill
                alt={title}
                >

                </Image> */}
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <span>{`Category: ${category} | Rating: ${rating}`}</span>
                <small className="text-amber-400">{`by ${author}`}</small>
                <h3 className="text-2xl">{`$ ${price}`}</h3>
                <p className="mb-5">{description}</p>
                <div className="card-actions justify-start">
                    <button className="btn btn-soft">Buy Now</button>
                    <Link href={`/books/${id}`}>
                    <button className="btn btn-soft">View Detail</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BookCard;