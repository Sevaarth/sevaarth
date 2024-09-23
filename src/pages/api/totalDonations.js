import { connectToDatabase } from "@/lib/db";
import Donation from "@/models/Donation";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { db } = await connectToDatabase();

      // Fetch total donation amounts with paymentStatus "success"
      const totalDonations = await Donation.aggregate([
        {
          $match: {
            paymentStatus: "success",
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: "$donationAmount" },
          },
        },
      ]);

      // If no donations found, return totalAmount as 0
      const totalAmount =
        totalDonations.length > 0 ? totalDonations[0].totalAmount : 0;

      res.status(200).json({ totalAmount });
    } catch (error) {
      console.error("Error fetching total donations:", error);
      res.status(500).json({ message: "Internal Server Error", error });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
