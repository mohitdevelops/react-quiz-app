import React from "react";
import Timer from "./Timer";
import Answers from "./Answers";

function Question({
	question,
	answers,
    answerState,
	onSelectAnswer,
	selectedAnswer,
	onSkip,
}) {
	return (
		<div id="question">
			<Timer timeout={10000} onTimeout={onSkip} />
			<h2>{question}</h2>
			<Answers
				answers={answers}
				selectedAnswer={selectedAnswer}
				isAnswerSelected={answerState}
				onSelect={onSelectAnswer}
			/>
		</div>
	);
}

export default Question;
