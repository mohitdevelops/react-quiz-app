import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import Question from "./Question";
import Summary from "./Summary";

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
		return <Summary userAnswers={userAnswers} />;
	}

	return (
		<div id="quiz">
			<Question
				key={activeQuestionsIndex}
				questionIndex={activeQuestionsIndex}
				onSelectAnswer={handleSelectAnswer}
				onSkip={handleSkipAnswer}
			/>
		</div>
	);
}

export default Quiz;
