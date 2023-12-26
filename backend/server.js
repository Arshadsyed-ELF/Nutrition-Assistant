const express=require('express')
const cors=require('cors')
require('./db/model');
const diet=require('./db/User/Schema')
const users=require('./db/User/Users')  

const app=express()   

app.use(express.json())
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET", "DELETE", "PUT"],
    credentials: true
}))


app.post('/login', (req, resp) => {  
    const { email, password } = req.body;   
    users.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return resp.json({ Status: "Success", user: { id:user.id,name: user.name, email: user.email } })
                } else {
                    resp.json("login fail")
                }
            } else {
                resp.json("no user")
            }
        })
  })
  
  // Register Api
  app.post('/signup', (req, resp) => {
    const { name, email, password } = req.body;
    users.findOne({ email: email })
        .then(use => {
            if (use) {
                resp.json("Already have an account")
            } else {
                users.create({ email: email, name: name, password: password })
                    .then(result => resp.json("  Account Created"))
                    .catch(err => resp.json(err))
            }
        }).catch(err => resp.json("failed "))
  })

const suggestNutrition = (age, height, weight, activityLevel) => {
    if (age >= 0 && age <= 12) {
        // Children (0-12 years)
        if (weight < height - 100) {
            const calorieIntake = 25 * weight;
            const weightGain = (height - 100) - weight;
            const caloriesToBurn = calorieIntake + (weightGain * 7000) / 7;

            return {
                suggestion: "Increase calorie intake with a balanced diet including fruits, vegetables, whole grains, lean proteins, and dairy or dairy alternatives.",
                timing: "3 meals and 2 snacks",
                foods: [
                    { name: "Bananas", grams: "100g" },
                    { name: "Carrots", grams: "50g" },
                    { name: "Oats", grams: "30g" },
                    { name: "Chicken breast", grams: "100g" },
                    { name: "Greek yogurt", grams: "150g" },
                ],
                calorieIntake,
                weightGain,
                walk:'1-2km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "13-34g",
                fatPercentage: "30-40%",
                caloriesToBurn,
            };
        } else {
            const calorieIntake = 20 * weight;
            const weightGain = 0;
            const caloriesToBurn = calorieIntake;

            return {
                suggestion: "Maintain a balanced diet with appropriate portion sizes, including fruits, vegetables, whole grains, lean proteins, and dairy or dairy alternatives.",
                timing: "3 meals and 2 snacks",
                foods: [
                    { name: "Apples", grams: "100g" },
                    { name: "Broccoli", grams: "100g" },
                    { name: "Brown rice", grams: "50g" },
                    { name: "Fish", grams: "100g" },
                    { name: "Milk", grams: "200ml" },
                ],
                calorieIntake,
                weightGain,
                walk:'2-3km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "13-34g",
                fatPercentage: "30-40%",
                caloriesToBurn,
            };
        }
    } else if (age >= 13 && age <= 18) {
        // Teens (13-18 years)
        if (weight < height - 100) {
            const calorieIntake = 25 * weight;
            const weightGain = (height - 100) - weight;
            const caloriesToBurn = calorieIntake + (weightGain * 7000) / 7;

            return {
                suggestion: "Increase calorie intake to support growth and development. Focus on nutrient-dense foods and regular meals.",
                timing: "3 meals and 2-3 snacks",
                foods: [
                    { name: "Berries", grams: "100g" },
                    { name: "Spinach", grams: "100g" },
                    { name: "Quinoa", grams: "50g" },
                    { name: "Turkey", grams: "100g" },
                    { name: "Cottage cheese", grams: "150g" },
                ],
                calorieIntake,
                weightGain,
                walk:'2-3km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "45-75g",
                fatPercentage: "25-35%",
                caloriesToBurn,
            };
        } else {
            const calorieIntake = 25 * weight;
            const weightGain = 0;
            const caloriesToBurn = calorieIntake;

            return {
                suggestion: "Maintain a balanced diet with appropriate portion sizes to support growth and development. Include fruits, vegetables, whole grains, lean proteins, and dairy or dairy alternatives.",
                timing: "3 meals and 2-3 snacks",
                foods: [
                    { name: "Oranges", grams: "100g" },
                    { name: "Bell peppers", grams: "100g" },
                    { name: "Whole wheat bread", grams: "50g" },
                    { name: "Eggs", grams: "2 large" },
                    { name: "Cheese", grams: "30g" },
                ],
                calorieIntake,
                weightGain,
                walk:'2-3.5km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "45-75g",
                fatPercentage: "25-35%",
                caloriesToBurn,
            };
        }
    } else {
        // Adults (18+ years)
        if (weight < height - 100) {
            const calorieIntake = 25 * weight;
            const weightGain = (height - 100) - weight;
            const caloriesToBurn = calorieIntake + (weightGain * 7000) / 7;

            return {
                suggestion: "Increase calorie intake with a balanced diet including fruits, vegetables, whole grains, lean proteins, and healthy fats. Incorporate regular exercise.",
                timing: "3 meals and 2 snacks",
                foods: [
                    { name: "Avocados", grams: "50g" },
                    { name: "Kale", grams: "100g" },
                    { name: "Quinoa", grams: "50g" },
                    { name: "Salmon", grams: "100g" },
                    { name: "Olive oil", grams: "15ml" },
                ],
                calorieIntake,
                weightGain,
                walk:'3-4km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "46-56g",
                fatPercentage: "20-35%",
                caloriesToBurn,
            };
        } else if (weight > height - 100) {
            const calorieIntake = 25 * weight;
            const weightGain = 0;
            const caloriesToBurn = calorieIntake;

            return {
                suggestion: "Focus on portion control, balanced diet, and regular exercise to support weight loss and maintain a healthy weight.",
                timing: "3 meals and 2 snacks",
                foods: [
                    { name: "Grapefruits", grams: "150g" },
                    { name: "Cauliflower", grams: "100g" },
                    { name: "Lentils", grams: "100g" },
                    { name: "Skinless chicken breast", grams: "100g" },
                    { name: "Almonds", grams: "30g" },
                ],
                calorieIntake,
                weightGain,
                walk:'3-4km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "46-56g",
                fatPercentage: "20-35%",
                caloriesToBurn,
            };
        } else {
            const calorieIntake = 25 * weight;
            const weightGain = 0;
            const caloriesToBurn = calorieIntake;

            return {
                suggestion: "Maintain a balanced diet with appropriate portion sizes, including fruits, vegetables, whole grains, lean proteins, and healthy fats. Incorporate regular exercise.",
                timing: "3 meals and 2 snacks",
                foods: [
                    { name: "Strawberries", grams: "100g" },
                    { name: "Asparagus", grams: "100g" },
                    { name: "Quinoa", grams: "50g" },
                    { name: "Lean beef", grams: "100g" },
                    { name: "Greek yogurt", grams: "150g" },
                ],
                calorieIntake,
                weightGain,
                walk:'4-5km',
                carbohydrateNeeds: "130-210g",
                proteinNeeds: "46-56g",
                fatPercentage: "20-35%",
                caloriesToBurn,
            };
        }
    }
};

// API endpoint for suggesting nutrition
app.get('/suggest-nutrition', (req, res) => {
    const { age, height, weight, activityLevel } = req.query;

    // Convert query parameters to numbers
    const parsedAge = parseInt(age);
    const parsedHeight = parseInt(height);
    const parsedWeight = parseInt(weight);

    // Validate the inputs
    if (isNaN(parsedAge) || isNaN(parsedHeight) || isNaN(parsedWeight)) {
        return res.status(400).json({ error: 'Invalid input. Age, height, and weight must be numbers.' });
    }

    // Call the suggestNutrition function
    const suggestedNutrition = suggestNutrition(parsedAge, parsedHeight, parsedWeight, activityLevel);

    const heightInMeters = parsedHeight / 100; // Convert height from centimeters to meters
    const bmi = parsedWeight / (heightInMeters * heightInMeters);

    // Return the suggested nutrition as a response
    res.json({ suggestedNutrition, bmi });
});




// Define the API endpoint for saving suggestions
app.post('/newplan', async (req, res) => {
    try {
        //   // Extract the suggestion data from the request body
        const { userId, age, height, weight, suggestions, bmi,userName } = req.body;
        const { suggestion, timing, foods, calorieIntake,walk, weightGain,carbohydrateNeeds,proteinNeeds } = suggestions

        console.log(suggestions)
        // Create a new suggestion instance   
        const newSuggestion = new diet({  
            userId,
            userName,
            age,
            height,
            weight,
            suggestion,
            timing,
            foods,
            bmi,
            walk,
            calorieIntake,
            weightGain,
            carbohydrateNeeds,
            proteinNeeds,
            date: new Date()
        });

        // Save the suggestion to the database
        const savedSuggestion = await newSuggestion.save();

        res.status(201).json(savedSuggestion);
    } catch (error) {
        console.error('Failed to save suggestion:', error);
        res.status(500).json({ message: 'Failed to save suggestion' });
    }
});

app.get('/getsuggestion/:userId', async (req, res) => {
    const userId = req.params.userId;
    try {
      const tasks = await diet.find({userId}).sort('position');
      res.json(tasks);
    } catch (err) {
      res.status(500).json({ error: 'Failed to fetch tasks' });
    }
  });

// Define the API endpoint for retrieving suggestions
app.get('/suggestions', async (req, res) => {
    try {
        // Retrieve all suggestions from the database
        const suggestions = await diet.find();

        res.status(200).json(suggestions);
    } catch (error) {
        console.error('Failed to fetch suggestions:', error);   
        res.status(500).json({ message: 'Failed to fetch suggestions' });
    }
});


  app.delete('/suggestion/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await diet.findByIdAndDelete(id);
      res.sendStatus(200);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

app.listen(9000,()=>{
    console.log(`Server is running on port 9000`);
})  