import styled from "styled-components";
import { rem } from "polished";

export const Button = styled.button`
  border-width: 2px;
  border-style: solid;
  border-color: var(--default);
  border-radius: ${rem("6px")};
  background-color: transparent;
  width: 100%;
  height: ${rem("36px")};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  color: var(--default);
  font-weight: var(--fontBlack);
  white-space: nowrap;
  transition-duration: 0.3s;
  cursor: pointer;
`;
