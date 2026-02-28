import Carts from "./carts";
import { useState } from 'react';

function PostsList({ posts, activeCategory, searchQuery }) {
    const filteredPosts = posts
        .filter(p => activeCategory === 'All' || p.category.toLowerCase() === activeCategory.toLowerCase())
        .filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6;

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
    return (
        <div>
            <div id="blog" className="container my-5">
                <div className="row g-4 align-items-stretch">

                    {currentPosts.map((post) => (
                        <div className="col-12 col-md-6 col-lg-4" key={post.id}>
                            <Carts post={post} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4 gap-2">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        className={`pag-btn ${currentPage === i + 1 ? 'active' : ''}`}
                        onClick={() => setCurrentPage(i + 1)}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default PostsList;