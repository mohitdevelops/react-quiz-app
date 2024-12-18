import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizcompleteimage from "../assets/quiz-complete.png";
import Timer from "./Timer";
import Answers from "./Answers";
import Question from "./Question";

function Quiz() {
	const [answers, setAnswers] = useState("");
	const [userAnswers, setUserAnswers] = useState([]);

	const activeQuestionsIndex =
		answers === "" ? userAnswers.length : userAnswers.length - 1;

	const quizComplete = activeQuestionsIndex === QUESTIONS.length;

	const handleSelectAnswer = useCallback(
		function handleSelectAnswer(selectedAnswer) {
			setAnswers("answered");
			setUserAnswers((prev) => {
				return [...prev, selectedAnswer];
			});
			setTimeout(() => {
				if (selectedAnswer === QUESTIONS[activeQuestionsIndex].answers[0]) {
					setAnswers("correct");
				} else {
					setAnswers("wrong");
				}

				setTimeout(() => {
					setAnswers("");
				}, 2000);
			}, 1000);
		},
		[activeQuestionsIndex]
	);

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

	return (
		<div id="quiz">
			<Question
				key={activeQuestionsIndex}
				question={QUESTIONS[activeQuestionsIndex].text}
				answers={QUESTIONS[activeQuestionsIndex].answers}
				answerState={answers}
				onSelectAnswer={handleSelectAnswer}
				selectedAnswer={userAnswers[userAnswers.length - 1]}
				onSkip={handleSkipAnswer}
			/>
		</div>
	);
}

export default Quiz;
