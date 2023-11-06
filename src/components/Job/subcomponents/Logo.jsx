import styled from 'styled-components'

const StyledLogo = styled.img`
  position: absolute;
  top: -24px;
  width: 48px;
  height: 48px;
`

export default function Logo(props) {
  return (
    <StyledLogo src={props.logo} alt={`${props.company} logo`} />
  )
}
