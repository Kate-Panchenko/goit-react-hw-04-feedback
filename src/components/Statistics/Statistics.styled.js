import styled from "styled-components";

export const Stats = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-weight: 600;
    font-size: 24px;
    line-height: 1.21;
    color: ${props => props.theme.black};
`