import Image from "next/image";

const BookDetailPage = async ({ params }) => {

    const { bookId } = await params;

    const res = await fetch(`http://localhost:3001/books/${bookId}`);
    const book = await res.json();

    const { id, title, author, price, image, description } = book;

    return (
        <div className="flex flex-col items-center py-15">

            <div className=" flex flex-col gap-4 px-[25px] py-[25px] w-2xl container mx-auto shadow-sm border">
                
                <h1 className="text-3xl leading-[1em]">{title}</h1>
                <p className="text-amber-200">{`by ${author}`}</p>
                <p>{description}</p>
                <h3 className="text-2xl font-bold">{`$ ${price}`}</h3>
            </div>
        </div>
    );
};

export default BookDetailPage;