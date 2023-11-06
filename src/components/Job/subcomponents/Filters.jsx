import styled from "styled-components";
import { nanoid } from "nanoid";

const StyledFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`

const Filter = styled.a`
  padding: 0.31em 0.56em 0.063em;
  font-size: ${props => props.theme.fs_400};
  font-weight: ${props => props.theme.fw_bold};
  line-height: 1.5;
  text-decoration: none;
  color: hsl( ${props => props.theme.clrPrimary_400} );
  background-color: hsl( ${props => props.theme.clrPrimary_400} / 0.1 );
  border-radius: 4px;
`

export default function Filters(props) {
  return (
    <StyledFilters>
      <Filter href='#'>{props.role}</Filter>
      <Filter href='#'>{props.level}</Filter>
      {/* Iterate through techs array */}
      {props.techs.map((tech) => 
        <Filter href='#' key={nanoid()}>{tech}</Filter>  
      )}
    </StyledFilters>
  )
}