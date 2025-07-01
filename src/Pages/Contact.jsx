import React from "react";

const Contact = () => {
  return (
    <section className="relative z-10 bg-white py-12 px-6 md:px-12 overflow-hidden">
      <div className="absolute -top-10 -left-40 w-[400px] h-[400px] bg-gray-400 opacity-30 rounded-full blur-3xl z-0"></div>

      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 relative z-10">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <h2 className="text-4xl font-bold text-gray-900">
            Get in Touch With Us
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Have a question or suggestion? We’d love to hear from you. Use the
            form to send us a message, or reach out directly via phone or email.
          </p>

          <div className="space-y-6">
            <ContactInfo
              title="Phone Number"
              value="(+88) 01234-567890"
              iconPath="M3.8 5.55C2.85 6.6 2.9 8.75 4 11.5C5.25 14.65 7.65 18.1 10.8 21.25C13.9 24.35 17.4 26.75 20.5 28C23.2 29.1 25.35 29.15 26.45 28.2L28.85 24.1L24.45 21.05L23.15 22.85C22.45 23.85 21.1 24.15 20.1 23.5C13.8 19.6 9.9 14.15 8.5 11.95C7.85 10.9 8.1 9.55 9.1 8.85L10.9 7.6L7.95 3.15L3.8 5.55Z"
            />
            <ContactInfo
              title="Email Address"
              value="support@histotrack.com"
              iconPath="M28 4.8H4C2.3 4.8 0.85 6.2 0.85 7.95V24.15C0.85 25.85 2.25 27.3 4 27.3H28C29.7 27.3 31.15 25.9 31.15 24.15V7.9C31.15 6.2 29.7 4.8 28 4.8ZM28 7.05L16 14.85L4 7.05H28ZM28 24.95H4V9.25L15.95 17.1C16.75 17.1 17.1 17.1 17.95 17.1L28 9.25V24.1C28.9 24.6 28.5 24.95 28 24.95Z"
            />
          </div>
        </div>

        {/* Right Content (Form) */}
        <div className="lg:w-1/2 w-full max-w-lg mx-auto">
          <div className="rounded-lg bg-white p-8 shadow-lg">
            <form>
              <ContactInputBox
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ContactInputBox
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <ContactInputBox
                type="text"
                name="phone"
                placeholder="Your Phone"
              />
              <ContactTextArea
                row="5"
                placeholder="Your Message"
                name="details"
              />
              <div>
                <button
                  type="submit"
                  className="w-full rounded bg-green-600 hover:bg-green-700 text-white px-4 py-3 text-lg font-medium transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const ContactInfo = ({ title, value, iconPath }) => (
  <div className="flex items-center gap-4">
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700">
      <svg
        width="24"
        height="24"
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={iconPath} />
      </svg>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-800">{title}</h4>
      <p className="text-gray-600">{value}</p>
    </div>
  </div>
);

const ContactInputBox = ({ type, placeholder, name }) => (
  <div className="mb-6">
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full rounded border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);

const ContactTextArea = ({ row, placeholder, name }) => (
  <div className="mb-6">
    <textarea
      rows={row}
      name={name}
      placeholder={placeholder}
      className="w-full resize-none rounded border border-gray-300 bg-white px-4 py-3 text-base text-gray-800 outline-none focus:ring-2 focus:ring-green-500"
    />
  </div>
);
