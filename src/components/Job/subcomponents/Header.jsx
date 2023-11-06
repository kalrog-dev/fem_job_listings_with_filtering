import styled from 'styled-components'

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 0.65em;
  font-size: ${props => props.theme.fs_300};
  font-weight: ${props => props.theme.fw_bold}
`

const Company = styled.span`
  color: hsl( ${props => props.theme.clrPrimary_400} );
`

const Tags = styled.div`
  display: flex;
  gap: 0.5em;
`

const Tag = styled.span`
  padding: 0.5em 0.7em 0.28em;
  line-height: 1;
  color: hsl( ${props => props.theme.clrNeutral_100} );
  background-color: hsl( ${props => props.className === "dark" ? props.theme.clrPrimary_800 : props.theme.clrPrimary_400} );
  border-radius: 12px;
`

export default function Header(props) {
  return (
    <StyledHeader>
      <Company>{props.company}</Company>
      <Tags>
        <Tag style={{display: props.new ? "inherit" : "none"}}>NEW!</Tag>
        <Tag className="dark" style={{display: props.featured ? "inherit" : "none"}}>FEATURED</Tag>
      </Tags>
    </StyledHeader>
  )
}
