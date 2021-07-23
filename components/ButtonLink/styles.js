import styled from "styled-components";
import { rem } from "polished";

export const Button = styled.a`
  border-width: 2px;
  border-style: solid;
  border-color: var(--default);
  border-radius: ${rem("6px")};
  background-color: transparent;
  width: max-content;
  height: ${rem("40px")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${rem("10px")} ${rem("20px")};
  color: var(--default);
  font-weight: var(--fontBlack);
  text-decoration: none;
  white-space: nowrap;
  transition-duration: 0.3s;
  cursor: pointer;

  svg {
    width: auto;
    height: ${rem("36px")};
  }
`;
