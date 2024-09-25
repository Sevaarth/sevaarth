import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import TermsModal from "@/components/ui/TermsModal"; 

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    city: "",
    dateOfBirth: "",
    volunteerReason: "",
    areasOfInterest: "",
    volunteerRole: "",
    skills: "",
    preferredDays: "",
    designation: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [skillsArray, setSkillsArray] = useState([]);
  const [currentSkill, setCurrentSkill] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setAcceptTerms(e.target.checked);
  };

  const handleSkillChange = (e) => {
    setCurrentSkill(e.target.value);
  };

  const handleSkillKeyDown = (e) => {
    if (e.key === " " && currentSkill.trim() !== "") {
      e.preventDefault();
      setSkillsArray([...skillsArray, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (index) => {
    setSkillsArray(skillsArray.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const dataToSubmit = { ...formData, skills: skillsArray.join(", ") };

    try {
      const response = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSubmit),
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
      dateOfBirth: "",
      volunteerReason: "",
      areasOfInterest: "",
      volunteerRole: "",
      skills: "",
      preferredDays: "",
      designation: "",
    });
    setSkillsArray([]);
    setCurrentSkill("");
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

            {/* Full Name Field */}
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

            {/* Email Address Field */}
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

            {/* Phone Number Field */}
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

            {/* City Field */}
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

            {/* Date of Birth Field */}
            <div className="mb-4">
              <label
                htmlFor="dateOfBirth"
                className="block text-brown text-sm font-medium mb-1"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Volunteer Reason Field */}
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

            {/* Areas of Interest Field */}
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

            {/* Preferred Role Field */}
            <div className="mb-4">
              <label
                htmlFor="volunteerRole"
                className="block text-brown text-sm font-medium mb-1"
              >
                Preferred Role
              </label>
              <select
                id="volunteerRole"
                name="volunteerRole"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.volunteerRole}
                onChange={handleChange}
                required
                aria-required="true"
              >
                <option value="" disabled>
                  Select your preferred role
                </option>
                <option value="Mentor">Mentor</option>
                <option value="Coordinator">Coordinator</option>
                <option value="Event Organizer">Event Organizer</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Volunteer Lead">Volunteer Lead</option>
              </select>
            </div>

            {/* Skills Field */}
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
                value={currentSkill}
                onChange={handleSkillChange}
                onKeyDown={handleSkillKeyDown}
                placeholder="Type a skill and press space"
              />
              <div className="mt-2 flex flex-wrap">
                {skillsArray.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-blue-200 text-blue-800 font-medium mr-2 mb-2 px-3 py-1 rounded-full cursor-pointer"
                    onClick={() => removeSkill(index)} // Allow user to remove a skill on click
                  >
                    {skill} &times;
                  </span>
                ))}
              </div>
            </div>

            {/* Preferred Days Field */}
            <div className="mb-4">
              <label
                htmlFor="preferredDays"
                className="block text-brown text-sm font-medium mb-1"
              >
                Preferred Days to Volunteer
              </label>
              <textarea
                id="preferredDays"
                name="preferredDays"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.preferredDays}
                onChange={handleChange}
                required    
                aria-required="true"
              />
            </div>

            {/* Designation Field */}
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

            {/* Terms and Conditions Checkbox */}
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
                I accept the terms and conditions, which includes that your
                information will be used to provide certifications of successful
                completion of your role.{" "}
                <span
                  className="text-blue-600 cursor-pointer"
                  onClick={() => setIsModalOpen(true)} // Open modal
                >
                  Read terms and conditions
                </span>
              </label>
            </div>

            {/* Submit Button */}
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

      {/* Terms Modal */}
      <TermsModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
}
