/**
 * @Palmen98
 * Controller for questions.
 * @version 1.0.0
 */

const questionsController = {}


questionsController.question1 = async (req, res) => {

    const alt1 = {
        city: 'Oslo', answer: false,
    }

    const alt2 = {
        city: 'Copenhagen', answer: false,
    }

    const alt3 = {
        city: 'Stockholm', answer: true,
    }

    const alt4 = {
        city: 'Dublin', answer: false 
    }
    const question1 = {
        title: 'What is the capital of Sweden',
        alt1,
        alt2,
        alt3,
        alt4
    }

    res.status(200).json(question1)
}


export default questionsController