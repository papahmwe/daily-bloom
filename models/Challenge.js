import mongoose from 'mongoose'

const challengeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
  },
  time_of_day: {
    type: String,
    enum: ['Morning', 'Afternoon', 'Evening'],
    required: true,
  },
  date_to_do: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  challenge_img: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending',
  },
}, { timestamps: true })

const Challenge = mongoose.models.Challenge || mongoose.model('Challenge', challengeSchema)

export default Challenge
