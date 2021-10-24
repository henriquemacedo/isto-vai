import styled from "styled-components";
import { lighten, rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  margin-bottom: 3rem;
  background-color: ${lighten(0.75, "#212121")};
  /* background-image: url("/images/poop-pattern.svg"); */
  /* background-repeat: repeat;
  background-position: center; */
  padding: 2rem 1rem;

  span {
    display: inline-block;
    margin-bottom: ${rem("30px")};
    font-weight: var(--fontBlack);
  }

  mark {
    /* background-color: var(--light); */
  }

  a {
    margin-top: ${rem("30px")};
  }

  @media ${device.m} {
    padding: ${rem("100px")} 25vw ${rem("100px")} ${rem("50px")};
  }

  @media ${device.l} {
    padding-right: 35vw;
  }
`;
