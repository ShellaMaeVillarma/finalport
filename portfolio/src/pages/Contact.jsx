import React, { useState } from "react";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you for your message! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="contact-page">
      {/* Animated Background Elements */}
      <div className="floating-elements">
        <div className="floating-element element-1">✉</div>
        <div className="floating-element element-2">💬</div>
        <div className="floating-element element-3">✨</div>
        <div className="floating-element element-4">📱</div>
      </div>

      <div className="contact-container">
        {/* Header Section */}
        <div className="contact-header">
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's create something amazing together. 
            Send me a message and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Content */}
        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-container">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <div className="input-container">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-input textarea-input"
                    rows="5"
                  />
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <div className="input-underline"></div>
                </div>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message 
                    <span className="btn-arrow">→</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email Me</h3>
              <p>shellamaevillarma@gmail.com</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Call Me</h3>
              <p>+63 912 345 6789</p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Iloilo City, Philippines</p>
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Dribbble</a>
                <a href="#" className="social-link">Behance</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;