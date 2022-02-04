/**
 * @Palmen98
 * Controller for questions.
 * @version 1.0.0
 */

const questionsController = {}

questionsController.question1 = async (req, res) => {

    const alt1 = {
        alt1: 'Oslo', answer: false,
    }

    const alt2 = {
        alt2: 'Copenhagen', answer: false,
    }

    const alt3 = {
        alt3: 'Stockholm', answer: true,
    }

    const alt4 = {
        alt4: 'Dublin', answer: false 
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

questionsController.question2 = async (req, res) => {

    const alt1 = {
        alt1: 'France', answer: false,
    }

    const alt2 = {
        alt2: 'Italy', answer: false,
    }

    const alt3 = {
        alt3: 'Germany', answer: true,
    }

    const alt4 = {
        alt4: 'Ireland', answer: false 
    }
    const question2 = {
        title: 'Which country invented champagne',
        alt1,
        alt2,
        alt3,
        alt4
    }

    res.status(200).json(question2)
}


export default questionsController