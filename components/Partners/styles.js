import styled from "styled-components";
import { rem } from "polished";
import { device } from "@utils/breakpoints";

export const Wrapper = styled.div`
  margin-top: 3rem;
  background-color: var(--blue);
  padding: ${rem("30px")};

  @media ${device.s} {
    padding: ${rem("50px")};
  }
`;

export const PartnersGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > div {
    width: 50%;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: ${rem("30px")};
    }

    img {
      width: 100%;
      height: 100%;
      max-width: ${rem("160px")};
      max-height: ${rem("50px")};
    }

    @media ${device.s} {
      width: 25%;
    }

    @media ${device.m} {
      width: 15%;
    }
  }
`;
