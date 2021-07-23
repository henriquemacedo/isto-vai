import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

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
      padding: ${rem("30px")};

      @media ${device.s} {
        padding: ${rem("100px")} ${rem("50px")};
      }
    }

    &.image {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        width: auto;
        height: 150%;
      }
    }
  }

  mark {
    background-color: var(--yellow);
  }
`;
