import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    age: "",
    volunteerReason: "",
    areasOfInterest: "",
    volunteerRole: "",
    skills: "",
    preferredDays: "",
    designation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false); // New state for checkbox

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 409) {
        toast.error(data.message);
      } else if (!response.ok) {
        toast.error("Failed to submit the form. Please try again.");
      } else {
        toast.success("Form submitted successfully!");
        resetFormData();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again later.");
    }

    setIsLoading(false);
  };

  const resetFormData = () => {
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      city: "",
      age: "",
      volunteerReason: "",
      areasOfInterest: "",
      volunteerRole: "",
      skills: "",
      preferredDays: "",
      designation: "",
    });
    setAcceptTerms(false);
  };

  return (
    <main className="bg-beige min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Toaster position="top-center" reverseOrder={false} />

        <h1 className="text-5xl font-bold text-primary text-center">
          Volunteer
        </h1>
        <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center">
          Join us as a volunteer and help make a difference!
        </p>

        <div className="flex flex-col items-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 transition-all duration-500 hover:shadow-xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-brown mb-6">
              Volunteer Information
            </h2>

            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-brown text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.fullName}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-brown text-sm font-medium mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.email}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="phoneNumber"
                className="block text-brown text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="city"
                className="block text-brown text-sm font-medium mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.city}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="age"
                className="block text-brown text-sm font-medium mb-1"
              >
                Age
              </label>
              <input
                type="number"
                id="age"
                name="age"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.age}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="volunteerReason"
                className="block text-brown text-sm font-medium mb-1"
              >
                Why do you want to volunteer?
              </label>
              <textarea
                id="volunteerReason"
                name="volunteerReason"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.volunteerReason}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="areasOfInterest"
                className="block text-brown text-sm font-medium mb-1"
              >
                Areas of Interest
              </label>
              <textarea
                id="areasOfInterest"
                name="areasOfInterest"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.areasOfInterest}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="volunteerRole"
                className="block text-brown text-sm font-medium mb-1"
              >
                Preferred Role
              </label>
              <input
                type="text"
                id="volunteerRole"
                name="volunteerRole"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.volunteerRole}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="skills"
                className="block text-brown text-sm font-medium mb-1"
              >
                Skills
              </label>
              <input
                type="text"
                id="skills"
                name="skills"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.skills}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="preferredDays"
                className="block text-brown text-sm font-medium mb-1"
              >
                Preferred Days
              </label>
              <input
                type="text"
                id="preferredDays"
                name="preferredDays"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.preferredDays}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="designation"
                className="block text-brown text-sm font-medium mb-1"
              >
                Current Designation
              </label>
              <input
                type="text"
                id="designation"
                name="designation"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.designation}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            <div className="mb-4 flex items-center">
              <input
                type="checkbox"
                id="acceptTerms"
                checked={acceptTerms}
                onChange={handleCheckboxChange}
                className="mr-2"
                required
              />
              <label htmlFor="acceptTerms" className="text-brown text-sm">
                I accept the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              className={`bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark w-full ${
                isLoading || !acceptTerms ? "opacity-50" : ""
              }`}
              disabled={isLoading || !acceptTerms}
            >
              {isLoading ? "Processing..." : "Submit Application"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
