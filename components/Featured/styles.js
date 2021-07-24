import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  > div {
    span {
      display: inline-block;
      margin-bottom: ${rem("30px")};
      font-weight: var(--fontBlack);
    }

    a {
      margin-top: ${rem("30px")};
    }

    &.content {
      padding: 2rem 1rem;
    }

    &.image {
      display: none;
    }
  }

  mark {
    background-color: var(--yellow);
  }

  @media ${device.m} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    > div {
      &.content {
        padding: ${rem("100px")} ${rem("50px")};
      }

      &.image {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          position: absolute;
          width: auto;
          height: 110%;
          max-width: 100%;
        }
      }
    }
  }

  @media ${device.l} {
    > div {
      &.image {
        img {
          height: 150%;
        }
      }
    }
  }
`;
