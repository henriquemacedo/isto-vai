import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  max-width: ${rem("1280px")};
  padding: 2rem 1rem;

  h2 {
    margin-bottom: 3rem;

    &:not(:first-child) {
      margin-top: 3rem;
    }
  }

  p {
    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  mark {
    background-color: var(--yellow);
  }

  li a {
    border-bottom: 2px solid var(--yellow);
    color: var(--blue);
    text-decoration: none;
    transition-duration: 0.3s;

    &:hover {
      color: var(--yellow);
    }
  }

  ul {
    margin: 0 0 0 3rem;
    padding: 0;

    & + p {
      margin-top: 1rem;
    }
  }

  @media ${device.s} {
    padding: 2rem 1rem 0 2rem;
  }

  @media ${device.m} {
    padding: ${rem("50px")} ${rem("50px")} 0 ${rem("50px")};
  }
`;

export const BackButton = styled.div`
  margin-top: 2rem;

  @media ${device.m} {
    margin-top: ${rem("50px")};
  }
`;
