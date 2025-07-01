import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
    setEmail("");
  };

  return (
    <section className="bg-green-50 py-12 px-4 sm:px-6 lg:px-8 rounded-lg max-w-4xl mx-auto my-16 shadow-md">
      <h2 className="text-3xl font-semibold text-center text-green-800 mb-4">
        Subscribe to our Newsletter
      </h2>
      <p className="text-center text-green-700 mb-8">
        Stay updated with the latest artifacts, news, and special offers.
      </p>

      {submitted ? (
        <p className="text-center text-green-600 font-medium">
          Thank you for subscribing!
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Subscribe
          </button>
        </form>
      )}
      {error && <p className="text-red-600 text-center mt-2">{error}</p>}
    </section>
  );
};

export default Newsletter;
