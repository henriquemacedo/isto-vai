import styled from "styled-components";
import { rem } from "polished";

export const Stripes = styled.div`
  background: repeating-linear-gradient(
    -45deg,
    var(--yellow),
    var(--yellow) ${rem("20px")},
    var(--default) ${rem("20px")},
    var(--default) ${rem("40px")}
  );
  width: 100%;
  height: 2rem;
`;
