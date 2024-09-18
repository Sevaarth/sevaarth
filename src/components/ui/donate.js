import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import logo from "/public/images/logoSevaarth.png";
import config from "@/lib/config";

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    donationPurpose: "",
    donationAmount: "",
    phone: "",
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

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const razorpayLoaded = await loadRazorpayScript();

    if (!razorpayLoaded) {
      toast.error("Failed to load payment gateway. Please try again.");
      setIsLoading(false);
      return;
    }

    const response = await fetch("/api/donation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      toast.error("Failed to create donation. Please try again.");
      setIsLoading(false);
      return;
    }

    const { order_id, amount, currency } = data;

    const options = {
      key: config.public_key,
      amount: amount.toString(),
      currency: currency,
      name: "Sevaarth",
      description: "Donation",
      image: logo.src,
      order_id: order_id,
      handler: async function (response) {
        const verificationResponse = await fetch("/api/payment-verification", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
          }),
        });

        if (verificationResponse.ok) {
          toast.success(
            "Payment successful! A receipt has been sent to your email.",
          );
        } else {
          toast.error("Payment verification failed.");
        }

        // Clear form after payment (success or failure)
        resetFormData();
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      },
      theme: {
        color: "#3399cc",
      },
      modal: {
        ondismiss: function () {
          toast.error("Payment was cancelled.");
          // Clear form if the payment gateway is closed
          resetFormData();
        },
      },
      method: {
        netbanking: true,
        card: true,
        wallet: false,
        upi: true,
        upi_intent: true,
        upi_qr: true,
        paylater: false,
      },
    };

    const razorpayGateway = new window.Razorpay(options);
    razorpayGateway.open();

    setIsLoading(false);
  };

  const resetFormData = () => {
    // Reset form data after payment completion or cancellation
    setFormData({
      name: "",
      email: "",
      donationPurpose: "",
      donationAmount: "",
      phone: "",
      comment: "",
    });
  };

  return (
    <main className="bg-beige min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
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
                htmlFor="phone"
                className="block text-brown text-sm font-medium mb-1"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.phone}
                onChange={handleChange}
                required
                aria-required="true"
              />
            </div>

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

            <div className="mb-4">
              <label
                htmlFor="donationAmount"
                className="block text-brown text-sm font-medium mb-1"
              >
                Donation Amount (₹)
              </label>
              <input
                type="amount"
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
                className="w-full border border-gray-300 rounded-lg py-2 px-4"
                value={formData.comment}
                onChange={handleChange}
                aria-required="false"
              />
            </div>

            <button
              type="submit"
              className={`bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark w-full ${
                isLoading ? "opacity-50" : ""
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
