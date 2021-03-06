import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 20px;
  margin: 10px 0;
  background: #ffffff;
  box-shadow: 0px 10px 10px #0000000d;
  border: 1px solid #ebeaed;
  border-radius: 5px;
  opacity: 1;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    font-size: 26px;
    text-decoration: none;
    color: #000;
  }

  strong {
    background: #eee;
    border-radius: 50px;
    padding: 2px 4px;
    margin-right: 8px;
  }

  button {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    border: 0;
    color: #fff;
    padding: 5px 10px;
    background: #f95e5a 0% 0% no-repeat padding-box;
    border-radius: 5px;
    align-items: center;
    justify-items: center;
    transition-duration: 0.25s;

    &:hover {
      background: ${darken(0.1, '#f95e5a')};
    }
  }
`;

export const RemoveModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 10px;

  button[id='cancel'] {
    font-size: 16px;
    font-weight: bold;
    display: flex;
    border: 0;
    color: #fff;
    padding: 5px 10px;
    background: #f95e5a 0% 0% no-repeat padding-box;
    border-radius: 5px;
    align-items: center;
    justify-items: center;
    transition-duration: 0.25s;

    &:hover {
      background: ${darken(0.1, '#f95e5a')};
    }
  }

  button[id='yes'] {
    display: flex;
    align-items: center;
    justify-items: center;
    padding: 5px 15px;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 4px;
    font-size: 18px;
    font-weight: bold;
    background: #6554c0;
    transition-duration: 0.2s;

    &:hover {
      background: ${darken(0.1, '#6554c0')};
    }
  }

  p {
    font-size: 16px;
    margin-bottom: 10px;
  }

  > div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
