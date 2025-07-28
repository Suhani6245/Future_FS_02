'use client';

import { useState } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'card',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Simulate checkout success
    console.log('Order placed:', formData);
  };

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-16 mb-16">
      <h2 className="text-2xl font-bold text-[#54946C] mb-6">Checkout</h2>

      {submitted ? (
        <div className="text-green-600 font-semibold text-center">
          ✅ Your order has been placed successfully!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Address</label>
            <input
              type="text"
              name="address"
              required
              className="w-full border rounded px-3 py-2"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-medium">City</label>
              <input
                type="text"
                name="city"
                required
                className="w-full border rounded px-3 py-2"
                value={formData.city}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">ZIP Code</label>
              <input
                type="text"
                name="zip"
                required
                className="w-full border rounded px-3 py-2"
                value={formData.zip}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium">Payment Method</label>
            <select
              name="paymentMethod"
              className="w-full border rounded px-3 py-2"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="card">Credit/Debit Card</option>
              <option value="cod">Cash on Delivery</option>
              <option value="upi">UPI</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-[#54946C] hover:bg-[#417655] text-white py-2 px-4 rounded"
          >
            Place Order
          </button>
        </form>
      )}
    </div>
  );
}
