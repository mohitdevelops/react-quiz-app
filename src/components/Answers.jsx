import React, { useRef } from "react";

function Answers({ answers, selectedAnswer, isAnswerSelected, onSelect }) {
	const shuffledAnswerRef = useRef();
	if (!shuffledAnswerRef.current) {
		shuffledAnswerRef.current = [...answers];
		shuffledAnswerRef.current.sort(() => Math.random() - 0.5);
	}

	return (
		<ul id="answers">
			{shuffledAnswerRef.current.map((answer) => {
				const isSelected = selectedAnswer === answer;
				let answerClass = "";
				if (isAnswerSelected === "answered" && isSelected) {
					answerClass = "selected";
				}
				if (
					(isAnswerSelected === "correct" || isAnswerSelected === "wrong") &&
					isSelected
				) {
					answerClass = isAnswerSelected;
				}
				return (
					<li key={answer} className="answer">
						<button
							onClick={() => onSelect(answer)}
							className={answerClass}
							disabled={isAnswerSelected !== ""}
						>
							{answer}
						</button>
					</li>
				);
			})}
		</ul>
	);
}

export default Answers;
