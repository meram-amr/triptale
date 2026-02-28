import heroImg from '../img/home.jpg';

function Home() {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-md-5">
                        <h1 className="hero-title">
                            TripTales ✈️
                        </h1>
                        <p className="hero-subtitle">
                            Explore the world, one story at a time.
                            Discover amazing destinations and adventures.
                        </p>
                        <a href="#blog" className="hero-btn">
                            Explore Now
                        </a>
                    </div>
                    <div className="col-md-6 mt-2 text-md-end">
                        <img
                            src={heroImg}
                            alt="Travel"
                            className="hero-img img-fluid"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Home;