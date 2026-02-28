import '../App.css';
import '../posts.js';

function Carts({ post }) {
    return (
        <div className="card h-100 ">
            <img src={post.image} className="card-img-top" alt={post.title} />
            <div className="card-body">
                <span className="post-category">{post.category}</span>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.description}</p>
                <p className="post-date">📅 {post.date}</p>
            </div>
        </div>
    );
}

export default Carts;