import mongoose from 'mongoose';

const DealSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  addTime: {
    type: Date,
    required: true,
  },
});

const DealModel = mongoose.model('Deal', DealSchema);

export { DealModel };
