const mongoose = require('mongoose');
const themeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    enum: ['light', 'dark'],
    default: 'light'
  },
  type: {
    type: String,
    default: 'survey',
    enum: ['survey']

  },
  formType: {
    type: String,
    enum: ['One to one', 'single-page'],
    default: 'single-page'
  },
  mandatory: {
    type: String,
    default: 'yes',
    enum: ['no', 'yes']
  },
  skipButton: {
    type: String,
    default: 'no',
    enum: ['no', 'yes']
  },
  optionType: {
    type: String,
    enum: ['radio', 'checkbox'],
    default: 'radio'
  },
  font: {
    type: String,
    default: 'Roboto'
  },
  color: {
    type: String,
    default: '#000000'
  },
  surveyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Surveys', required: true }

});

const Theme = mongoose.model('Theme', themeSchema);
module.exports = Theme