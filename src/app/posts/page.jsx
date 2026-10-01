// const postsPromise = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
//     return res.json();
// }

import Link from "next/link";


// const getPosts = async() => {
//     const res =  await fetch('https://jsonplaceholder.typicode.com/posts/');
//     return res.json();
// }


// const getPosts = async () => {

//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
//         return res.json();
//     }
//     catch(error){
//             throw new Error ('Failed to fetch data');
//     }
// }


const PostsPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await res.json();

    // const posts = await postsPromise();

    // const posts = await getPosts();

    return (
        <div className="py-10">
            <h2 className="text-3xl mb-10 text-center">Posts</h2>

            <div className="grid grid-cols-3 gap-4 container mx-auto">
                {
                    posts.slice(0,6).map(post =>
                        <div key={post.title} className="card bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title text-2xl">{post.title}</h2>
                                <p>{post.body}</p>
                                <div className="card-actions justify-start">
                                    <Link href={`/posts/${post.id}`}>
                                        <button className="btn">Read More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default PostsPage;