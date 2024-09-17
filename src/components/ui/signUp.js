import { useState } from "react";

function SuccessMessage() {
  return (
    <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-6 text-center">
      <strong className="font-bold">Success!</strong>
      <span className="block sm:inline"> You have successfully signed up.</span>
    </div>
  );
}

function SignUpForm({ onSubmit }) {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      onSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-8">
      <div className="mb-6">
        <label className="block text-left text-gray-700 font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-left text-gray-700 font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition w-full"
      >
        Sign Up to Volunteer
      </button>
    </form>
  );
}

export default function SignUp() {
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-5xl font-bold text-primary text-center">Join Us</h1>
      <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center">
        Become part of a community making a lasting difference. Whether it’s
        volunteering your time or sharing your skills, you can help us reach
        more people in need.
      </p>

      {submitted ? (
        <SuccessMessage />
      ) : (
        <SignUpForm onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}
