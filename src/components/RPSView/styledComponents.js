import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #223a5f;
  min-height: 100vh;
  padding: 40px;
`

export const RulesView = styled.div`
  align-self: flex-end;
  margin-top: auto;
  @media screen and (max-width: 576px) {
    margin-bottom: 40px;
  }
`
export const PopupView = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: space-between;
  padding: 10px;
  @media screen and (max-width: 576px) {
    height: 260px;
    width: 100%;
  }
`
export const PopupImage = styled.img`
  width: 100%;
  min-height: 70vh;
  margin-top: auto;
`
export const RulesBtn = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  font-size: 15px;
  font-weight: bold;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  padding: 10px;
  width: 60px;
  height: 28px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const TriggerCloseBtn = styled.button`
  background-color: #ffffff;
  border: none;
  cursor: pointer;
  outline: none;
  color: #223a5f;
  align-self: flex-end;
  width: 20px;
  height: 20px;
  margin-bottom: 10px;
  font-size: 18px;
`
