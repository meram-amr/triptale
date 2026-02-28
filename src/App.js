import Home from "./components/home";
import Navbar from "./components/navbar";
import Search from "./components/search";
import Categories from "./components/categories";
import posts from "./posts";
import { useState } from 'react';
import PostsList from "./components/postslist";
import About from "./components/about";
import Contact from "./components/contact";

function App() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div>
      <Navbar />
      <Home />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Categories
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <PostsList posts={posts} activeCategory={activeCategory} searchQuery={searchQuery} />
      <About />
      <Contact />
    </div>
  );
}

export default App;
