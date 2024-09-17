import { useState } from "react";
import { toast, Toaster } from "react-hot-toast"; // Import react-hot-toast

export default function GetInvolved() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationPurpose: "",
    donationAmount: "",
    comment: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [presetAmounts] = useState([500, 1000, 2000, 5000]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePresetClick = (amount) => {
    setFormData({
      ...formData,
      donationAmount: amount,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate a donation API call
    setTimeout(() => {
      setIsLoading(false);

      // Show success message using react-hot-toast
      toast.success("Thank you for your donation!");

      // Clear form fields after successful submission
      setFormData({
        name: "",
        email: "",
        donationPurpose: "",
        donationAmount: "",
        comment: "",
      });
    }, 2000);
  };

  return (
    <main className="bg-beige min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* React Hot Toast Toaster Component */}
        <Toaster position="top-center" reverseOrder={false} />

        <h1 className="text-5xl font-bold text-primary text-center">Donate</h1>
        <p className="text-xl text-gray-700 mt-8 leading-relaxed text-center">
          Your donation helps us continue our work of supporting elderly
          individuals, educating children, and empowering women.
        </p>

        <div className="flex flex-col items-center">
          <form
            className="bg-white p-8 rounded-lg shadow-lg w-full md:w-2/3 lg:w-1/2 transition-all duration-500 hover:shadow-xl"
            onSubmit={handleSubmit}
          >
            <h2 className="text-2xl font-semibold text-brown mb-6">
              Make a Donation
            </h2>

            {/* Full Name Field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-brown text-sm font-medium mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.name}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Email Field */}
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

            {/* Donation Purpose Field */}
            <div className="mb-4">
              <label
                htmlFor="donationPurpose"
                className="block text-brown text-sm font-medium mb-1"
              >
                Donation Purpose
              </label>
              <input
                type="text"
                id="donationPurpose"
                name="donationPurpose"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.donationPurpose}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

            {/* Donation Amount Field */}
            <div className="mb-4">
              <label
                htmlFor="donationAmount"
                className="block text-brown text-sm font-medium mb-1"
              >
                Donation Amount (₹)
              </label>
              <input
                type="number"
                id="donationAmount"
                name="donationAmount"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.donationAmount}
                onChange={handleChange}
                min="1"
                required
                aria-required="true"
              />
            </div>

            {/* Preset Donation Amounts */}
            <div className="mb-4">
              <p className="text-brown text-sm font-medium mb-1">
                Or select a preset amount:
              </p>
              <div className="flex space-x-2  flex-wrap justify-center gap-1">
                {presetAmounts.map((amount) => (
                  <button
                    key={amount}
                    type="button"
                    className="bg-[#7eabc1] py-2 px-4 rounded-lg text-white hover:bg-[#57a4ca]"
                    onClick={() => handlePresetClick(amount)}
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>

            {/* Optional Comment Field */}
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-brown text-sm font-medium mb-1"
              >
                Optional Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                rows="4"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`bg-[#00539b] text-white py-3 px-6 rounded-lg shadow-lg  transition-all duration-200 ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? "Processing..." : "Donate Now"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
