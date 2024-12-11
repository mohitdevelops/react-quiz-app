import { useState } from "react";
import QUESTIONS from "../questions";
import quizcompleteimage from "../assets/quiz-complete.png";

function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionsIndex = userAnswers.length;

	const quizComplete = activeQuestionsIndex === QUESTIONS.length;

	function handleSelectAnswer(selectedAnswer) {
		setUserAnswers((prev) => {
			return [...prev, selectedAnswer];
		});
	}

	if (quizComplete) {
		return (
			<div id="summary">
				<h2>Quiz Completed!</h2>
				<img src={quizcompleteimage} alt="" />
			</div>
		);
	}
	
	const shuffledAnswers = [...QUESTIONS[activeQuestionsIndex].answers];
	shuffledAnswers.sort(() => Math.random() - 0.5);

	return (
		<div id="quiz">
			<div id="question">
				<h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
				<ul id="answers">
					{shuffledAnswers.map((answer) => (
						<li key={answer} className="answer">
							<button onClick={() => handleSelectAnswer(answer)}>
								{answer}
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Quiz;
