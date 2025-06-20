import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
}, {
  timestamps: true,
});

const Food = mongoose.model('Food', foodSchema);

export default Food; // Use `export default` for consistency
