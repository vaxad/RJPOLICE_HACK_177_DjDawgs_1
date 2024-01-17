import mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  fields: [
    {
    question: String,
    questionType: String,
    options: [String],
  }],
  authorityId: String,
  stationId: String,
  createdAt: { type: Date, default: Date.now }
  // Define other fields here
});

export default mongoose.models.testForm || mongoose.model('testForm', formSchema);