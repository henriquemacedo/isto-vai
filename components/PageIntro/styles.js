import styled, { css } from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Hero = styled.div`
  margin-top: ${rem("5px")};
  background-color: var(--yellow);
  padding: 2rem 1rem;

  h1,
  h2 {
    max-width: ${rem("1280px")};
  }

  mark {
    background-color: var(--light);
  }

  span {
    display: inline-block;
    margin-top: ${rem("50px")};
    font-weight: var(--fontBlack);
  }

  div {
    &.image {
      display: none;
    }
  }

  @media ${device.m} {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: ${rem("15px")};
    padding: ${rem("50px")} 25vw ${rem("50px")} ${rem("50px")};

    ${(props) =>
      props.image != "" &&
      css`
        grid-template-columns: 2fr 1fr;
        padding: ${rem("50px")};
      `}

    div {
      width: 100%;

      &.image {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          max-height: ${rem("400px")};
        }
      }
    }
  }
`;
