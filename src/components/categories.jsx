import '../App.css';

function Categories({ activeCategory, onCategoryChange }) {
    const categories = ['All', 'Travel', 'Food', 'Culture', 'Tech', 'Adventure'];

    return (
        <div className="categories-section">
            <div className="container">
                <div className="categories-btns">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => onCategoryChange(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Categories;