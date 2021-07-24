import styled from "styled-components";
import { rem, darken } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  a {
    margin: 5px;
    color: var(--light);

    &.youtube {
      border-color: ${darken(0.1, "#fc0007")};
      background-color: #fc0007;

      &:hover {
        background-color: ${darken(0.05, "#fc0007")};
      }
    }

    &.twitter {
      border-color: ${darken(0.1, "rgb(29, 161, 242)")};
      background-color: rgb(29, 161, 242);

      &:hover {
        background-color: rgb(26, 145, 218);
      }
    }

    svg {
      fill: var(--light);
    }
  }

  @media ${device.m} {
    margin-top: ${rem("50px")};
  }
`;
