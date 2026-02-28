import '../App.css';
import aboutImg from '../img/about-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

function About() {
    return (
        <div id="about" className="container text-center">
            <div className="about row ">
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
                    <img
                        src={aboutImg}
                        alt="Blogger"
                        className="about-img"
                    />
                </div>
                <div className="about-content col-12 col-md-8 d-flex flex-column align-items-start justify-content-start ">
                    <h2 className="about-title">About Me ✈️</h2>
                    <p className="about-text">
                        Hi! I'm a passionate travel blogger who loves exploring hidden gems
                        around the world. From street food in Bangkok to sunsets in Santorini,
                        I share every story with you!</p>
                    <div className="about-stats flex-row d-flex justify-content-center align-items-center">
                        <div className="stat-item ">
                            <h3>9+</h3>
                            <p>Posts</p>
                        </div>
                        <div className="stat-item ">
                            <h3>15+</h3>
                            <p>Countries</p>
                        </div>
                        <div className="stat-item ">
                            <h3>3+</h3>
                            <p>Years</p>
                        </div>
                    </div>
                    <div className="about-social d-flex justify-content-center align-items-center">
                        <a href="https://meram-amr.github.io/triptale/" className="social-link">
                            <FontAwesomeIcon icon={faGlobe} />
                        </a>

                        <a href="https://instagram.com" className="social-link">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a href="https://twitter.com" className="social-link">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;