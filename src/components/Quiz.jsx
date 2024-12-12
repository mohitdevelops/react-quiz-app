import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizcompleteimage from "../assets/quiz-complete.png";
import Timer from "./Timer";

function Quiz() {
	const [userAnswers, setUserAnswers] = useState([]);
	const activeQuestionsIndex = userAnswers.length;

	const quizComplete = activeQuestionsIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(function handleSelectAnswer(
		selectedAnswer
	) {
		setUserAnswers((prev) => {
			return [...prev, selectedAnswer];
		});
	},
	[]);

	const handleSkipAnswer = useCallback(
		() => handleSelectAnswer(null),
		[handleSelectAnswer]
	);

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
				<Timer key={activeQuestionsIndex} timeout={10000} onTimeout={handleSkipAnswer} />
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
