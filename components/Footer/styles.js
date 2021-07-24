import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  margin: 3rem 0 2rem 0;

  > div {
    ul {
      margin: 0;
      display: flex;
      justify-content: center;
      padding: 0;

      li {
        list-style: none;

        &:not(:last-child) {
          margin-right: ${rem("15px")};
        }

        a {
          font-weight: var(--fontBlack);
          font-size: 1rem;
          color: var(--blue);
          text-transform: uppercase;
          text-decoration: none;
          transition-duration: 0.3s;

          svg {
            width: auto;
            height: var(--size);
            fill: var(--blue);
            transition-duration: 0.3s;
          }

          &:hover {
            color: var(--yellow);

            svg {
              fill: var(--yellow);
            }
          }
        }
      }
    }

    &.social {
      margin-bottom: ${rem("15px")};

      li {
        --size: ${rem("30px")};
        width: var(--size);
        height: var(--size);
      }
    }
  }

  @media ${device.s} {
    display: flex;
    justify-content: space-between;

    > div.social {
      margin-bottom: 0;
    }
  }

  @media ${device.m} {
    margin: 3rem 0 0 0;
  }
`;
