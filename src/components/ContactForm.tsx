import React, { useState } from "react";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post(
        "https://dinaka.vercel.app/api/sendmailtonye",
        formData,
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Form submitted successfully:", response.data);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto space-y-6 overflow-auto px-2"
    >
      <div>
        <label
          htmlFor="name"
          className="block text-white text-sm font-medium mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          autoComplete="name"
          value={formData.name}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your name"
          required
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-white text-sm font-medium mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, email: e.target.value }))
          }
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Your email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-white text-sm font-medium mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full px-4 py-2 rounded-lg bg-white/20 border border-white/40 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
          placeholder="Your message"
          required
        />
      </div>

      {error && <p className="text-red-400 text-sm">{error}</p>}
      {success && (
        <p className="text-green-400 text-sm">Message sent successfully!</p>
      )}

      <button
        type="submit"
        className="cursor-pointer w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
