const mongoose = require('mongoose');
const { Category, GenerateAI } = require('./models');
const mongoURI = process.env.MONGO_URI;

mongoose.connect('mongodb+srv://papaxeloudi:alexakos123@cluster0.e63ohlp.mongodb.net/task-manager-ai?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');

  // const categoriesData = [
  //   {
  //     title: "BACKEND DEVELOPMENT",
  //     description: "Μαθαίνοντας backend development...",
  //     subcategories: [
  //       { title: "Γλώσσες Προγραμματισμού", description: "JavaScript (Node.js)" },
  //       { title: "Frameworks", description: "Express.js (node.js)" },
  //       // Add other subcategories here
  //     ],
  //     createdAt: new Date("2024-08-01T09:31:00Z"),
  //     categoryType: "task"
  //   },
  //   // Add other categories here
  // ];

  const generateAIData = [
    {
      title: "Learn a New Language",
      description: "Expand your skills by learning a new language...",
      subcategories: [
        { title: "Choose a Language", description: "Select a language you want to learn." },
        { title: "Find Learning Resources", description: "Look for books, apps, or courses to help you learn." },
        { title: "Practice Regularly", description: "Set aside time each day to practice speaking, reading, and writing." },
      ]
    },
    {
      title: "Cook Healthy Meals",
      description: "Improve your diet by preparing healthy meals...",
      subcategories: [
        { title: "Plan Your Meals", description: "Create a weekly meal plan with balanced nutrition." },
        { title: "Shop for Ingredients", description: "Buy fresh fruits, vegetables, and lean proteins." },
        { title: "Cook at Home", description: "Prepare meals using healthy cooking methods like grilling or steaming." },
      ]
    },
    {
      title: "Read More Books",
      description: "Enhance your knowledge and relaxation by reading more books...",
      subcategories: [
        { title: "Create a Reading List", description: "Select books that interest you and set reading goals." },
        { title: "Join a Book Club", description: "Participate in discussions and gain new perspectives." },
        { title: "Set Reading Time", description: "Allocate a specific time each day for reading." },
      ]
    },
    {
      title: "Start a Side Business",
      description: "Explore entrepreneurial opportunities by starting a side business...",
      subcategories: [
        { title: "Identify a Business Idea", description: "Find a niche or product that you are passionate about." },
        { title: "Create a Business Plan", description: "Outline your business strategy, goals, and financial projections." },
        { title: "Market Your Business", description: "Promote your business through social media, networking, and advertising." },
      ]
    },
    {
      title: "Improve Financial Management",
      description: "Take control of your finances by improving your management skills...",
      subcategories: [
        { title: "Create a Budget", description: "Track your income and expenses to manage your money effectively." },
        { title: "Save for Retirement", description: "Invest in retirement accounts and plan for long-term financial security." },
        { title: "Pay Off Debt", description: "Develop a plan to reduce and eliminate outstanding debts." },
      ]
    }
  ];
  

  //IF I NEED TO INSERT MANUALLY CATEGORIES

  // Category.insertMany(categoriesData)
  //   .then(() => console.log('Categories inserted'))
  //   .catch(err => console.error('Error inserting categories', err));

  GenerateAI.insertMany(generateAIData)
    .then(() => console.log('GenerateAI inserted'))
    .catch(err => console.error('Error inserting generateAI', err));

}).catch(err => {
  console.error('MongoDB connection error', err);
});
