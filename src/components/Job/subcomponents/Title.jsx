import styled from 'styled-components'

const StyledTitle = styled.strong`
  margin-bottom: 0.5em;
  font-size: ${props => props.theme.fs_400};
  color: hsl( ${props => props.theme.clrPrimary_800} );
  line-height: 1.71;
`

export default function Title(props) {
  return (
    <StyledTitle>{props.jobTitle}</StyledTitle>
  )
}