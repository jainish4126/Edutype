import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "47f8b18d-c0d0-407f-b256-174503bd23c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };



  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our concat information below. your feedback, question, and suggestions are important to us as we strive to provide exceptional service to our university community</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> contact@edusity.com</li>
            <li> <img src={phone_icon} alt="" /> +91 5152165541</li>
            <li> <img src={location_icon} alt="" /> Edusity University, 221 Innovation Drive, Sector 12, Knowledge Park, Ahmedabad, Gujarat – 382421, India</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
