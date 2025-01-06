"use client";

import React, { useEffect, useState } from 'react';
import { FaRegPaperPlane } from "react-icons/fa";
import MapBox from '@/components/contact/map-box';
import PageHeader from '@/components/page-header';
import config from '@/config';

const { title } = config;

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    error: null
  });

  useEffect(() => {
    document.title = `Contact | ${title}`;
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, error: null });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      // Clear form after successful submission
      setFormData({
        fullname: '',
        email: '',
        message: ''
      });
      alert('Message sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus({
        submitting: false,
        error: 'Failed to send message. Please try again later.'
      });
      alert(status.error);
    } finally {
      setStatus(prev => ({ ...prev, submitting: false }));
    }
  };

  const isFormValid = formData.fullname && formData.email && formData.message;

  return (
    <article>
      <PageHeader header="Contact" />
      <section className="mb-10">
        <MapBox googleMapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51270.49086757693!2d3.4079721116796726!3d36.76426939514962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128e6b31111b2e3d%3A0x5893113cc5c42acd!2sBoumerd%C3%A8s%2C%20Algeria!5e0!3m2!1sen!2sus!4v1704614578414!5m2!1sen!2sus" />
        <h3 className="text-white-2 text-2xl font-bold mb-5">Contact Form</h3>
        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              value={formData.fullname}
              onChange={handleInputChange}
              data-form-input
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              value={formData.email}
              onChange={handleInputChange}
              data-form-input
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
            data-form-input
          />
          <button
            className="form-btn"
            type="submit"
            disabled={!isFormValid || status.submitting}
            data-form-btn
          >
            <FaRegPaperPlane />
            <span>{status.submitting ? 'Sending...' : 'Send Message'}</span>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;