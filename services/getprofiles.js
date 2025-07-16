import dbConnect from "@config/mongodb";
import Profile from "@models/Profile";

export async function getProfiles() {
  if (process.env.DISABLE_DB_DURING_BUILD === "true") {
    console.log("⏭ Skipping DB access during Docker build.");
    return []; // ✅ Safe early return to skip DB access
  }

  await dbConnect();
  const profiles = await Profile.find({}).lean();
  return profiles;
}
