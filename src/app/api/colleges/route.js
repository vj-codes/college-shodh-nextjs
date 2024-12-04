import connectDB from "@/middleware/mongodb";
import Colleges from "@/models/college.model";
import { NextResponse } from "next/server";

// GET Method
export const GET = async () => {
  await connectDB(); // Ensure the database connection is established
  try {
    // Fetch all colleges from MongoDB
    const colleges = await Colleges.find().skip(0).limit(10);
    const totalCount = await Colleges.countDocuments();
    return NextResponse.json(
      {
        colleges,
        pagination: {
          total: totalCount,
          page:1,
          limit:10,
          totalPages: Math.ceil(totalCount / 10),
        },
      },
      { status: 200 }
    );
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
    const { course=null, city=null, state=null, naacRanking=null, nba=null, page = 1, limit = 10 } = body;

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

    // Calculate pagination
    const skip = (page - 1) * limit; // Items to skip for current page
    const totalCount = await Colleges.countDocuments(query); // Total number of matching documents

    // Fetch the filtered and paginated data
    const results = await Colleges.find(query)
      .skip(skip) // Skip the appropriate number of documents
      .limit(limit); // Limit the number of documents fetched

    // Return paginated data along with metadata
    return NextResponse.json(
      {
        colleges: results,
        pagination: {
          total: totalCount,
          page,
          limit,
          totalPages: Math.ceil(totalCount / limit),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching colleges:', error);
    return NextResponse.json(
      { error: 'Error fetching colleges' },
      { status: 500 }
    );
  }
};
