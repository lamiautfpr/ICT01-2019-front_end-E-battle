import { shade } from 'polished';
import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

interface QuestionProps {
  radioOptions: number;
}

export const Container = styled.div`
  #head {
    margin-left: 106px;
    display: flex;
    width: 176px;

    justify-content: space-between;
    align-items: center;

    svg {
      font-size: 38px;
      color: ${color.secondary};
    }
    h2 {
      font-family: ${fontFamily.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 43px;
      line-height: 138%;
      color: #000;
      /* or 59px */

      text-align: justify;
    }
  }
  h3 {
    font-family: ${fontFamily.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 138%;
  }
`;

export const Information = styled.div`
  width: fit-content;
  margin: 16px auto 0 220px;

  section {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    #title-game {
      border-bottom: 3px solid ${color.primary};
      width: 369px;
      input {
        font-family: ${fontFamily.secondary};
        font-style: normal;
        font-weight: 400;
        font-size: 25px;

        position: relative;
        bottom: -25px;
        /* line-height: 138%; */

        color: ${shade(0.6, '#0000')};

        border: none;
      }
    }

    #save {
      width: 187px;
      height: 63px;

      margin-left: 289px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      padding: 13px 26px 13px 36px;

      background: ${color.green};
      box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);
      border-radius: 8px;
      border: none;

      font-family: ${fontFamily.primary};
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      line-height: 138%;

      color: ${color.white};
      svg {
        font-size: 30px;
      }
    }
  }
`;
export const Question = styled.div<QuestionProps>`
  width: fit-content;
  margin: 67px auto 0 220px;

  h4 {
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 138%;

    margin-top: 15px;

    color: ${shade(0.6, '#0000')};
  }

  textarea {
    width: 1048px;
    height: 239px;
    border: 3px solid ${color.primary};
    box-sizing: border-box;
    border-radius: 16px;

    padding: 12px;

    font-family: ${fontFamily.primary};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 138%;
  }
  div {
    margin-top: 18px;
    margin-bottom: 35px;
    button {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 13px 26px 13px 36px;

      width: 249px;
      height: 52px;

      background: ${color.secondary};
      border-radius: 8px;
      border: none;

      color: ${color.white};

      font-family: ${fontFamily.secondary};
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 138%;

      svg {
        font-size: 20px;
      }
    }
  }
  #alternatives {
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      flex-direction: row;

      .radio {
        width: 34px;
        height: 34px;
        background: #d3ffe0;
        border: 2px solid #33df63;
        box-sizing: border-box;
        border-radius: 8px;
        cursor: pointer;

        /* input {
          width: 100%;
          height: 100%;
          opacity: 0;

          cursor: pointer;
        } */
        /* ${props =>
          props.radioOptions &&
          css`
            &:nth-child(0) {
              background: red;
            }
          `} */
      }
      &:nth-child(1) {
        .radio {
          background: red;
        }
      }
    }
  }
`;
export const ListColumn = styled.div``;
