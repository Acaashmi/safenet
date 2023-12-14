import mongoose from "mongoose";

// URI add db name to end... to be shifted to .env
const uri =
  "mongodb+srv://acashmiac:cFYmFObn03KsK6RF@safenet.ef0079i.mongodb.net/?retryWrites=true&w=majority";

//MongoDB Connection using mongoose
const mongoDBConnection = async () => {
  try {
    await mongoose.connect(uri);
  } catch (err) {
    throw new Error(err);
  }
};

export default mongoDBConnection;
