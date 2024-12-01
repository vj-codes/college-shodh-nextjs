import connectDB from "@/middleware/mongodb";
import Colleges from "@/models/college.model";
import { NextResponse } from "next/server";

// GET Method
export const GET = async () => {
  await connectDB(); // Ensure the database connection is established
  try {
    // Fetch all colleges from MongoDB
    const colleges = await Colleges.find();
    return NextResponse.json(colleges, { status: 200 });
  } catch (error) {
    console.error("Error fetching colleges:", error);
    return NextResponse.json({ error: "Error fetching colleges" }, { status: 500 });
  }
};

// POST Method
export const POST = async (req) => {
  await connectDB(); // Ensure the database connection is established

  try {
    const body = await req.json();
    const { city, state, naacRanking, nba } = body;

    // Build the query object dynamically
    const query = {};

    // Add city and state filter
    if (city || state) {
      const addressFilters = [];
      if (city) {
        addressFilters.push({ address: { $regex: new RegExp(city, 'i') } }); // Case-insensitive city match
      }
      if (state) {
        addressFilters.push({ address: { $regex: new RegExp(state, 'i') } }); // Case-insensitive state match
      }
      query.$and = addressFilters; // Combine city and state filters
    }

    // Add NAAC ranking filter
    if (naacRanking) {
      query.naac = { $eq: naacRanking }; // Exact match
    }

    // Add NBA filter
    if (nba) {
      query.nba = { $regex: new RegExp(nba, 'i') }; // Case-insensitive NBA match
    }

    // Fetch the filtered data
    const results = await Colleges.find(query);

    // Return the filtered data
    return NextResponse.json(results, { status: 200 });
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return NextResponse.json(
      { error: 'Error fetching colleges' },
      { status: 500 }
    );
  }
};


    