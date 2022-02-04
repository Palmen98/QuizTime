import express from "express";
import questionsController from "../Controller/QuestionsController.js";

/**
 * @Palmen98
 * Route for questions.
 * @version 1.0.0
 */

const router = express.Router()

router.get('/question/1', questionsController.question1)

router.get('question/2', questionsController.question2)


export default router