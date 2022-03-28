import styled from "styled-components/macro";

const STYLES = {
  correct: {
    "--backgroundColor": "hsla(133, 46%, 71%, 1)",
    "--opacity": 1,
  },
  wrong: {
    "--backgroundColor": "hsla(360, 81%, 85%, 1)",
    "--opacity": 0.5,
  },
  chosen: {
    "--backgroundColor": "hsla(230, 61%, 90%, 1)",
  },
};

export default function Answer({ answer, chosen, correct, evaluated, answerClick }) {
  if (!evaluated) {
    if (!chosen) {
      return <StandardButton onClick={answerClick} dangerouslySetInnerHTML={{ __html: answer }} />;
    } else {
      return <FilledButton style={STYLES.chosen} onClick={answerClick} dangerouslySetInnerHTML={{ __html: answer }} />;
    }
  } else {
    if (correct) {
      return <FilledButton style={STYLES.correct} dangerouslySetInnerHTML={{ __html: answer }} />;
    }
    if (chosen) {
      return <FilledButton style={STYLES.wrong} dangerouslySetInnerHTML={{ __html: answer }} />;
    }
    return <EvaluatedButton dangerouslySetInnerHTML={{ __html: answer }} />;
  }
}

const StandardButton = styled.button`
  background-color: transparent;
  margin-right: 12px;
  margin-top: 10px;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 1.05rem;
  text-align: center;
  padding: 4px 12px;
  color: hsla(231, 42%, 28%, 1);
  border-color: hsla(231, 42%, 28%, 1);
`;

const EvaluatedButton = styled(StandardButton)`
  opacity: 0.5;
`;

const FilledButton = styled(StandardButton)`
  border: none;
  background-color: var(--backgroundColor);
  opacity: var(--opacity);
`;
