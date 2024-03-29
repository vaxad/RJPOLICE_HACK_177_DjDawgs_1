import mongoose from 'mongoose';

const authoritySchema = new mongoose.Schema({
  policeId: String,
  name:String,
  role:String,
  email: String,
  password: String,
  post:String,
  state:String,
  district:String,
  taluka:String,
  village:String
  // Define other fields here
});

export default mongoose.models.testAuthority || mongoose.model('testAuthority', authoritySchema);