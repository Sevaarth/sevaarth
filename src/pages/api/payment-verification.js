import { connectToDatabase } from "@/lib/db";
import Donation from "@/models/Donation";
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { razorpayPaymentId, razorpayOrderId, razorpaySignature } = req.body;

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpayOrderId + "|" + razorpayPaymentId);
    const generatedSignature = hmac.digest("hex");

    if (generatedSignature === razorpaySignature) {
      const mongooseConnection = await connectToDatabase();

      const db = mongooseConnection.connection.db;

      const donationsCollection = db.collection("donations");

      const updateResult = await donationsCollection.updateOne(
        { razorpayOrderId },
        { $set: { status: "success", razorpayPaymentId } },
      );

      if (updateResult.modifiedCount === 0) {
        return res.status(404).json({ message: "Donation not found" });
      }

      return res.status(200).json({ message: "Payment verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid payment signature" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
