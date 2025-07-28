'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: connect to email API or form handler
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-20 bg-[#f8f9fa] text-[#333]">
      <h2 className="text-5xl font-bold text-center mb-12 text-[#54946C] font-serif">Contact Us</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-2xl leading-7 text-[#4950B3]">
            Have a special bouquet in mind or just want to say hello? We'd love to hear from you!
          </p>
          <div>
            <h3 className="font-semibold text-2xl">Email:</h3>
            <p className='text-2xl'>hello@thebouquetstore.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Phone:</h3>
            <p className='text-2xl'>+91 XXXXX XXXXX</p>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us:</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="/instagram.svg" alt="Instagram" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <img src="/github.svg" alt="GitHub" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow-lg">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              required
              rows={4}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#54946C]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#54946C] text-white py-2 px-4 rounded-md hover:bg-[#457a58] transition"
          >
            Send Message
          </button>

          {submitted && <p className="text-green-600 mt-2">Thank you! We'll be in touch soon.</p>}
        </form>
      </div>
    </div>
  );
}
