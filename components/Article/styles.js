import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  max-width: ${rem("1280px")};
  padding: 2rem 1rem;

  mark {
    background-color: var(--yellow);
  }

  @media ${device.s} {
    padding: 2rem 1rem 0 2rem;
  }

  @media ${device.m} {
    padding: ${rem("50px")} ${rem("50px")} 0 ${rem("50px")};
  }
`;
