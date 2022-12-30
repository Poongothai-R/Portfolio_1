import '../styles/contact.css';
import ContactData from '../data/Contact_data.json';
import ContactCard from '../components/ContactCard';
import Footer from "../components/Footer";

export default function Contact() {
    const contactItem = ContactData.map((recs) => (
        <ContactCard key={recs.id} ContactData={recs} />
    )
    );
    return (
        <div className="contact" id="contact">
            <div className="contact-title"><h1>Contact</h1></div>
            <div className="contact-container">
                <div className="contact-desc">
                    <p>Here is my contact information if you are interested in starting a collaboration</p></div>
                <div className="contact-detail">
                    {contactItem}
                </div>

            </div>
            <Footer/>
        </div>
    );
};