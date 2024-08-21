// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Hireme from "./components/Hireme";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import "./App.css";
import { sendCustomEmail } from "./email";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

let date = new Date();
let year = date.getFullYear();

const App = () => {
  const [details, setDetails] = useState({
    subject: "",
    message: "",
    to_email: "",
  });

  const sendEmail = (e) => {
    const { name, value} = e.target;

    setDetails((prevDetails) => {
      return {
        ...prevDetails,
      [name]: value,
      }
    });
  };

  const handleSendEmail = () => {
    sendCustomEmail(details);
  };

  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="main">
      <div>
        <span>To:</span>
        <input
          name="to_email"
          value={details.to_email}
          onChange={sendEmail}
          type="email"
          placeholder="Required.."
        />
      </div>
      <div>
        <span>Subject:</span>
        <input
          name="subject"
          value={details.subject}
          onChange={sendEmail}
          type="text"
          placeholder="Required"
        />
      </div>
      <div>
        <span>Message</span>
        <textarea
          name="message"
          value={details.message}
          onChange={sendEmail}
          type="text"
          placeholder="Required.."
        />
      </div>
      <button
        disabled={!details.to_email || !details.subject || !details.message}
        onClick={handleSendEmail}
      >
        <span>Send Email</span>
      </button>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Testimonials />
      <Projects />
      <Hireme />
      <Contact />
      <footer className="p-3 text-center">
        <h6 className="mb-3">SHWE PHUE HMONE</h6>
        <p>© All CopyRights Reserved {year}</p>
      </footer>
    </div>
  );
};

export default App;
