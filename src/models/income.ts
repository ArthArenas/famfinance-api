import mongoose from "mongoose";
import mongodb from "mongodb";

const { Schema } = mongoose;

interface IIncomeDocument extends mongoose.Document {
  title: String,
  from: Date,
  until: Date,
  qty: Number,
  belongsTo: mongodb.ObjectID
}

const incomeSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
    },
    from: {
        type: Date,
        required: false
    },
    until: {
        type: Date,
        required: false
    },
    qty: {
        type: Number,
        required: true
    },
    belongsTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Income = mongoose.model<IIncomeDocument>("Income", incomeSchema, "Income");

export default Income;