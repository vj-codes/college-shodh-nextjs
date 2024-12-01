import mongoose from "mongoose"
import { Schema } from "mongoose";

const collegeSchema = new Schema({
  college_name: String,
  address: String,
  course: String,
  dept: String,
  university: String,
  nirf: {
    type: String,
    default: null,
  },
  naac: {
    type: String,
    default: null,
  },
  nba: String,
  fees: String,
  admission_criteria: String,
  intake: Number,
  contact: String,
  faculty: {
    type: String,
    default: null,
  },
  email: [String],
  website: String,
});

const Colleges = mongoose.models.College || mongoose.model("College", collegeSchema);

export default Colleges;