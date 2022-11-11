import styled from 'styled-components'

export const GameViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  flex-wrap: wrap;
  margin-top: 60px;
  @media screen and (max-width: 576px) {
    width: 250px;
    height: 250px;
    margin-left: 15px;
  }
`
export const GameBtn = styled.button`
  width: 150px;
  height: 150px;
  background-color: transparent;
  margin-right: 50px;
  margin-bottom: 35px;
  border: none;
  outline: none;
  @media screen and (max-width: 576px) {
    width: 100px;
    height: 100px;
    margin-top: 0px;
    margin-right: 20px;
  }
`

export const GameImage = styled.img`
  width: 150px;
  height: 150px;
  @media screen (max-width: 576px) {
    width: 100px;
    height: 100px;
  }
`

export const ResultImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 50px;
  @media screen and (max-width: 576px) {
    width: 30%;
  }
`
export const ResultName = styled.p`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  @media screen and (max-width: 576px) {
    font-size: 14px;
  }
`
export const ResultText = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 0px;
  margin-bottom: 10px;
  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`
export const PlayAgainBtn = styled.button`
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  color: #223a5f;
  font-size: 15px;
  font-family: 'Bree Serif';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  margin: 0px;
`
