import styled from "styled-components";
import { rem, darken } from "polished";
import { device } from "@utils/breakpoints";

export const Stripes = styled.div`
  background: repeating-linear-gradient(
    -45deg,
    var(--yellow),
    var(--yellow) ${rem("20px")},
    var(--default) ${rem("20px")},
    var(--default) ${rem("40px")}
  );
  width: 100%;
  height: 2rem;
`;

export const Hero = styled.div`
  margin-top: ${rem("5px")};
  background-color: var(--yellow);
  padding: 2rem 1rem;

  h2 {
    margin-bottom: ${rem("50px")};
  }

  @media ${device.m} {
    padding: ${rem("50px")} 25vw ${rem("50px")} ${rem("50px")};
  }

  @media ${device.l} {
    padding-right: 35vw;
  }
`;

export const DescriptionButtons = styled.div`
  margin-bottom: ${rem("15px")};
  display: flex;

  button {
    width: 80px;
    height: ${rem("25px")};

    &:first-child {
      margin-right: ${rem("5px")};
    }

    &.active {
      background-color: var(--default);
      color: var(--light);
      pointer-events: none;
    }

    &:hover {
      background-color: ${darken(0.05, "#FFE900")};
    }
  }
`;
