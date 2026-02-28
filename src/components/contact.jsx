import '../App.css';

function Contact() {
    return (
        <div className="contact-container container col-12 mt-5 ml-2 ">
            <h2 className="contact-title ">Contact Us</h2>
            <p className="contact-text">If you have any questions or would like to get in touch, please feel free to contact us:</p>
            <div className="contact-info mx-auto">
                <label for="fname" className="form-label">First Name:</label>
                <input type="text" id="fname" className="form-control me-2" aria-describedby="fnameHelpBlock">
                </input>
                <label for="lname" className="form-label">Last Name:</label>
                <input type="text" id="lname" className="form-control me-2" aria-describedby="lnameHelpBlock">
                </input>
                <label for="email" className="form-label">Email:</label>
                <input type="email" id="email" className="form-control me-2" aria-describedby="emailHelpBlock">
                </input>
                <label for="message" className="form-label">Message:</label>
                <textarea id="message" className="form-control me-2" rows="4" aria-describedby="messageHelpBlock"></textarea>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
            </div>
        </div>
    );
}

export default Contact;