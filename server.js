const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const openaiApiKey = process.env.OPENAI_API_KEY;

app.post('/generate-ai', async (req, res) => {
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a helpful assistant."
        },
        {
          role: "user",
          content: "Generate a random category with 3 subcategories. Each subcategory should have a title and a description."
        }
      ],
      max_tokens: 200,
    }, {
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json'
      }
    });

    const generatedText = response.data.choices[0].message.content;
    res.json({ generatedText });
  } catch (error) {
    console.error('Error response:', error.response ? error.response.data : error.message);

    if (error.response && error.response.data && error.response.data.error) {
      const { message, code } = error.response.data.error;

      if (code === 'insufficient_quota') {
        res.status(403).send('You have exceeded your current quota. Please check your plan and billing details.');
      } else {
        res.status(500).send(`OpenAI API Error: ${message}`);
      }
    } else {
      res.status(500).send('Error generating AI content');
    }
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
