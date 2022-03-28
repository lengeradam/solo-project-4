import { useEffect, useState } from "react";
import Question from "./Question";
import styled from "styled-components/macro";

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [evaluated, setEvaluated] = useState(false);
  const [answerAllQuestions, setAnswerAllQuestions] = useState(false);

  useEffect(() => {
    if (!evaluated) {
      fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then((response) => response.json())
        .then((data) =>
          setQuestions(
            data.results.map((result) => {
              return { ...result, question: decodeURI(result.question), chosenAnswer: "" };
            })
          )
        );
    }
  }, [evaluated]);

  function answerClick(questionText, answer) {
    setQuestions((oldQuestions) => {
      return oldQuestions.map((question) => {
        if (question.question === questionText) {
          return {
            ...question,
            chosenAnswer: answer,
          };
        } else {
          return question;
        }
      });
    });
  }

  function getNumberOfCorrectAnswers() {
    return questions.filter((question) => question.correct_answer === question.chosenAnswer).length;
  }

  function evaluateGame() {
    if (!questions.some((question) => question.chosenAnswer === "")) {
      setEvaluated(true);
      setAnswerAllQuestions(false);
    } else {
      setAnswerAllQuestions(true);
    }
  }

  function newGame() {
    setEvaluated(false);
  }

  return (
    <Wrapper>
      <div>
        {questions.map((question) => (
          <Question key={question.question} question={question} evaluated={evaluated} answerClick={answerClick} />
        ))}
      </div>
      <div>
        {!evaluated && <MainButton onClick={evaluateGame}>Check answers</MainButton>}
        {evaluated && <MainButton onClick={newGame}>Play again</MainButton>}
        {answerAllQuestions && <Message>Please answer all questions first!</Message>}
        {evaluated && (
          <Message>
            You scored {getNumberOfCorrectAnswers()}/{questions.length} correct answers
          </Message>
        )}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 800px;
  margin: auto;
`;

const MainButton = styled.button`
  background-color: hsla(230, 34%, 46%, 1);
  color: hsla(220, 43%, 97%, 1);
  height: 52px;
  width: 240px;
  border-radius: 15px;
  border: none;
  font-size: 16px;
  margin: 20px auto;
  display: block;
`;

const Message = styled.p`
  margin: 0px auto;
  max-width: fit-content;
`;
