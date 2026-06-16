import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Form Submitted Successfully!

Name: ${formData.name}
Email: ${formData.email}
City: ${formData.city}
Phone: ${formData.phone}
    `);
  };

  return (
    <div className="form-container">
      <h2 className="form-title">📝 User Registration Form</h2>

      <p className="form-subtitle">
        Enter your details below and see live updates instantly.
      </p>

      <form className="modern-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="👤 Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="📧 Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="🏙️ City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="📱 Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          🚀 Submit Form
        </button>
      </form>

      <div className="preview-card">
        <h3>📋 Live Preview</h3>

        <div className="preview-item">
          <strong>Name:</strong>
          <span>{formData.name || "Not Entered"}</span>
        </div>

        <div className="preview-item">
          <strong>Email:</strong>
          <span>{formData.email || "Not Entered"}</span>
        </div>

        <div className="preview-item">
          <strong>City:</strong>
          <span>{formData.city || "Not Entered"}</span>
        </div>

        <div className="preview-item">
          <strong>Phone:</strong>
          <span>{formData.phone || "Not Entered"}</span>
        </div>
      </div>
    </div>
  );
};

export default FormHandling;