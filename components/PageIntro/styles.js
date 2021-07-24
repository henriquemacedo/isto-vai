import styled from "styled-components";
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

  @media ${device.m} {
    padding: ${rem("50px")} 25vw ${rem("50px")} ${rem("50px")};
  }
`;
