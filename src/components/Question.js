import { useState } from "react";
import styled from "styled-components/macro";
import Answer from "./Answer";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

export default function Question({ question, evaluated, answerClick }) {
  const initialAnswerArray = (question) => {
    const answerArray = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(answerArray);
    return answerArray;
  };

  const [answers] = useState(initialAnswerArray(question));

  return (
    <QuestionBox>
      <QuestionText dangerouslySetInnerHTML={{ __html: question.question }}></QuestionText>
      {answers.map((answer) => (
        <Answer
          key={answer}
          answer={answer}
          chosen={answer === question.chosenAnswer}
          correct={answer === question.correct_answer}
          evaluated={evaluated}
          answerClick={() => answerClick(question.question, answer)}
        />
      ))}
    </QuestionBox>
  );
}

const QuestionText = styled.h1`
  font-size: 1.5rem;
  color: hsla(231, 42%, 28%, 1);
  margin-top: 0px;
`;

const QuestionBox = styled.div`
  border-bottom: 1px solid hsla(231, 42%, 90%, 1);
  padding: 21px 0;
`;
