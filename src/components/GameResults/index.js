import {
  GameViewContainer,
  GameBtn,
  GameImage,
  ResultImageContainer,
  ResultName,
  ResultText,
  PlayAgainBtn,
} from './styledComponents'

const GameResults = props => {
  const {choicesList, isShow, checkResult, newArray, text, restartGame} = props
  return (
    <GameViewContainer>
      {isShow && (
        <>
          <GameBtn
            type="button"
            data-testid="rockButton"
            onClick={() => checkResult(choicesList[0].id)}
          >
            <GameImage
              src={choicesList[0].imageUrl}
              alt={choicesList[0].id}
              key={choicesList[0].id}
            />
          </GameBtn>
          <GameBtn
            type="button"
            data-testid="scissorsButton"
            onClick={() => checkResult(choicesList[1].id)}
          >
            <GameImage
              src={choicesList[1].imageUrl}
              alt={choicesList[1].id}
              key={choicesList[1].id}
            />
          </GameBtn>
          <GameBtn
            type="button"
            data-testid="paperButton"
            onClick={() => checkResult(choicesList[2].id)}
          >
            <GameImage
              src={choicesList[2].imageUrl}
              alt={choicesList[2].id}
              key={choicesList[2].id}
            />
          </GameBtn>
        </>
      )}
      {!isShow && (
        <>
          <ResultImageContainer>
            <ResultName>YOU</ResultName>
            <GameImage src={newArray[0].imageUrl} alt="your choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultName>OPPONENT</ResultName>
            <GameImage src={newArray[1].imageUrl} alt="opponent choice" />
          </ResultImageContainer>
          <ResultImageContainer>
            <ResultText>{text}</ResultText>
            <PlayAgainBtn type="button" onClick={restartGame}>
              PLAY AGAIN
            </PlayAgainBtn>
          </ResultImageContainer>
        </>
      )}
    </GameViewContainer>
  )
}

export default GameResults
