import styled from "styled-components";
import { rem } from "polished";

export const Wrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;

  > div {
    ul {
      margin: 0;
      display: flex;
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
      li {
        --size: ${rem("30px")};
        width: var(--size);
        height: var(--size);
      }
    }
  }
`;
