const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    startDate: {
      type: Date,
      require: true,
    },
    endDate: {
      type: Date,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    critera: {
      type: String,
      require: true,
    },
    typeOfSurvey: {
      type: String,
    },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const surveyModel = mongoose.model("survey", surveySchema);
module.exports = surveyModel;