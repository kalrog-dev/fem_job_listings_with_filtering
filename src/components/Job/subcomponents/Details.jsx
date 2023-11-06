import styled from "styled-components";

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625em;
  padding-bottom: 1em;
  border-bottom: 1px solid hsl( ${props => props.theme.clrNeutral_300} );
  margin-bottom: 1em;
  font-size: ${props => props.fs_400}
  
`
const Detail = styled.span`
  line-height: 1.5;
  color: hsl( ${props => props.theme.clrNeutral_400} );
`

const Separator = styled.div`
  width: 4px;
  height: 4px;
  margin-bottom: 0.25em;
  background-color: hsl( ${props => props.theme.clrNeutral_300} );
  border-radius: 50%;
`

export default function Details(props) {
  return (
    <StyledDetails>
      <Detail>{props.date}</Detail>
      <Separator />
      <Detail>{props.contract}</Detail>
      <Separator />
      <Detail>{props.location}</Detail>
    </StyledDetails>
  )
}