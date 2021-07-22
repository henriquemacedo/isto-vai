import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: ${rem("30px")};
  padding: ${rem("30px")};

  > div {
    span {
      display: inline-block;
      margin-bottom: ${rem("30px")};
      font-weight: var(--fontBlack);
    }

    a {
      margin-top: ${rem("30px")};
    }

    &.image {
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        width: auto;
        height: 100%;
      }
    }
  }

  @media ${device.s} {
    padding: ${rem("50px")};
    grid-gap: ${rem("50px")};
  }
`;
