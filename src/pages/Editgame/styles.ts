import { shade, opacify } from 'polished';
import styled, { css } from 'styled-components';
import { color, fontFamily } from '../../styles/custom';

interface QuestionProps {
  radioOptions: number;
}

interface ListColumnPorps {
  setVisible: boolean;
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
  .range {
    width: 639px;
    margin: auto;
    margin-top: 18px;
    input {
      width: 100%;
      height: 3px;
      appearance: none;
      background: ${color.primary};
      outline: none;
      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 15px;
        height: 35px;
        border-radius: 27px;
        background: ${color.secondary};
        cursor: pointer;
        z-index: 2;
      }
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      top: -22px;
      z-index: -2;
      li {
        width: 5px;
        height: 34px;
        border-radius: 11px;
        background: #c4c4c4;
      }
    }
  }

  div {
    margin-top: 9px;
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
    /* display: flex;
    flex-direction: column; */
    #a {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    ${props =>
      props.radioOptions &&
      css`
        div {
          display: flex;
          flex-direction: row;
          .radio {
            width: 34px;
            height: 34px;
            border-radius: 8px;
            border: 2px solid ${color.secondary};
          }
          div:nth-child(${props.radioOptions}) {
            .radio {
              border: 2px solid ${color.green};
              background-color: #d3ffe0;
            }
          }
        }
      `}
    .response {
      border-bottom: 3px solid ${color.primary};
      width: 369px;
      margin-left: 16px;
      input {
        font-family: ${fontFamily.secondary};
        font-style: normal;
        font-weight: 400;
        font-size: 25px;

        color: ${shade(0.6, '#0000')};

        border: none;
      }
    }
  }

  p {
    font-family: ${fontFamily.secondary};
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 138%;

    margin-left: 40%;
    margin-right: 40%;
    margin-bottom: 25px;

    text-align: justify;
    color: ${shade(0.6, '#0000')};
    span {
      color: ${color.secondary};
    }
  }
`;
export const ListColumn = styled.div<ListColumnPorps>`
  display: flex;
  flex-direction: row;
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;

    width: 289px;
    height: 100vh;
    position: absolute;
    left: -289px;
    top: 0;

    z-index: 1;

    transition: 0.4s ease-in-out;

    ${props =>
      props.setVisible &&
      css`
        left: 0;
        position: fixed;
        #outSide {
          top: 0;
          left: 289px;
          position: absolute;

          width: 100vw;
          height: 100vh;

          background: ${shade('0.6', '#0000')};
        }
      `}

    background: ${color.white};
    box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06),
      0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);

    .card {
      display: flex;
      flex-direction: column;

      margin-top: 16px;

      .infoCard {
        width: 216px;
        height: 86px;

        border-radius: 6px;

        border: 3px solid ${color.primary};
        p {
          font-family: ${fontFamily.secondary};
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 100%;
          text-align: justify;

          padding: 8px;

          color: ${shade(0.6, '#0000')};
        }
      }
      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        button {
          font-family: ${fontFamily.secondary};
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 20px;

          border: none;
          background: none;
          padding: 2px;

          text-align: center;
          align-items: center;

          svg {
            font-size: 22px;
            margin-left: 2px;
          }
          /* identical to box height */
          &:first-child {
            color: ${color.secondary};
          }
          &:last-child {
            color: ${color.red};
          }
        }
      }
    }
    #addP {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 13px 26px 13px 36px;

      position: static;
      width: 249px;
      height: 56px;
      left: 20px;
      top: 765px;

      border: 2px solid #33df63;
      box-sizing: border-box;
      filter: drop-shadow(0px 16px 24px rgba(0, 0, 0, 0.06))
        drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.04))
        drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04));
      border-radius: 8px;

      /* Inside auto layout */

      flex: none;
      order: 5;
      flex-grow: 0;
      margin: 35px 0px;

      font-family: 'Comfortaa';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 138%;
      /* identical to box height, or 25px */

      text-align: justify;

      color: #33df63;
    }
  }
  #butonList {
    position: fixed;
    width: 108px;
    height: 210px;
    left: -40px;
    top: 363px;

    background: #8338ec;
    border-radius: 10px;

    color: ${color.white};

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0px 11px 32px;

    border: none;

    span {
      font-family: ${fontFamily.secondary};
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      line-height: 121.5%;
      /* or 29px */

      text-align: center;
      text-transform: uppercase;

      width: 19px;
      height: 100%;
      word-wrap: break-word;
    }
    svg {
      font-size: 41px;
    }
  }
`;
