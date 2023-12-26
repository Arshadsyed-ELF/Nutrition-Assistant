// const mongoose = require('mongoose');

// const schema = new mongoose.Schema({
//     age:Number,
//     height:Number,
//     weight:Number,
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
//     }      
// })
// module.exports =mongoose.model('myorders',bikeschema)


const mongoose = require('mongoose');

  const suggestionSchema = new mongoose.Schema({
    // userId: {type:String,required: true},
    age: { type: Number, required: true },
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    suggestion: { type: String, required: true },
    timing: { type: String, required: true },
    walk:{type:String},
    foods: [{
      name: { type: String, required: true },
      grams: { type: String, required: true }
    }],
    bmi:{type:String,required: true},
    calorieIntake: { type: Number, required: true },
      carbohydrateNeeds: { type: String },
      proteinNeeds: { type:String},
    weightGain: { type: Number, required: true },
    date: {
      type: String, // Store dates as strings
      default: () => new Date().toLocaleDateString('hi-IN') // Set the default value to the current date in "MM/DD/YYYY" format
  },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    userName:String,

});

module.exports= mongoose.model('diet', suggestionSchema);

