import express from "express";
import questionsController from "../Controller/QuestionsController.js";

/**
 * @Palmen98
 * Route for questions.
 * @version 1.0.0
 */

const router = express.Router()

router.get('/question1', questionsController.question1)


export default router