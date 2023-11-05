import styled from 'styled-components'

const JobOffer = styled.section`
  width: 87.2%;
  max-width: 1110px;
  padding: 2em 1.5em 1.5em 1.5em;
  background-color: hsl( ${props => props.theme.clrNeutral_100} );
  border-left: 5px solid hsl( ${props => props.theme.clrPrimary_400} );
  border-radius: 5px;
`
const Header = styled.div`
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
  background-color: hsl( ${props => props.dark ? props.theme.clrPrimary_800 : props.theme.clrPrimary_400} );
  border-radius: 12px;
`

const Title = styled.strong`
  margin-bottom: 0.5em;
  font-size: ${props => props.theme.fs_400};
  color: hsl( ${props => props.theme.clrPrimary_800} );
  line-height: 1.71;
`

const Details = styled.div`
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

const Filters = styled.div`
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

export default function Job() {
  return (
    <JobOffer>
      <Header>
        <Company>Photosnap</Company>
        <Tags>
          <Tag>NEW!</Tag>
          <Tag dark>FEATURED</Tag>
        </Tags>
      </Header>
      <Title>Senior Frontend Developer</Title>
      <Details>
        <Detail>1d ago</Detail>
        <Separator />
        <Detail>Full Time</Detail>
        <Separator />
        <Detail>USA only</Detail>
      </Details>
      <Filters>
        <Filter href='#'>Frontend</Filter>
        <Filter href='#'>Senior</Filter>
        <Filter href='#'>HTML</Filter>
        <Filter href='#'>CSS</Filter>
        <Filter href='#'>JavaScript</Filter>
      </Filters>
    </JobOffer>
  )
}