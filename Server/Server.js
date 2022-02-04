/**
 * @Palmen98
 * Starting point for the express server.
 * @version 1.0.0
 */

import express from 'express';
import questionsAPI from './Routes/QuestionsRoute.js'

const app = express();
const port = process.env.PORT || 5000

app.use(express.json())

// Questions
app.use('/api', questionsAPI);

app.get('/', (req, res) => res.send('Welcome to quizGame'))

app.listen(port, () => console.log(`Listening on port ${port}`));