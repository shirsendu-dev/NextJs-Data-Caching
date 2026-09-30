import Link from "next/link";


const PostDetailPage = async ({ params }) => {

    const { postId } = await params;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await res.json();

    return (
        <div className="py-10 container mx-auto">
            <h2 className="text-3xl mb-10 text-center">Post Detail</h2>
            <div className="flex flex-col gap-4 justify-center items-center px-6.25 py-6.25 border container mx-auto">
                <h2 className="uppercase text-3xl">{post.title}</h2>
                <p>{post.body}</p>
            </div>
            <Link href={`/posts`}>
                <button className="btn btn-soft block mx-auto mt-5">Back to post page</button>
            </Link>
        </div>
    );
};

export default PostDetailPage;