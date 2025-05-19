import { useState } from "react";
import "./ContactForm.css";

export const ContactForm = ({ className }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`text-2xl leading-10 ps-[2rem] ${className}`}
    >
      <div className="contact-form">
        My name is
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          placeholder="Johnne Smith"
        />
        and I have a
        <input
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="project / website "
        />
        that really needs help! You can reach out to me at
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className=""
          placeholder="email@example.com"
        />
        to kick things up!
      </div>

      {/* Add similar fields for email, message, etc. */}

      <button
        type="submit"
        disabled={status === "sending"}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {status === "sending" ? "Sending..." : "Submit"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-green-600">Message sent successfully!</p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600">Failed to send. Please try again.</p>
      )}
    </form>
  );
};
