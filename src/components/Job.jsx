import styled from 'styled-components'

const JobOffer = styled.section`
  width: 87.2%;
  max-width: 1110px;
  padding: 2em 1.5em 1.5em 1.5em;
  background-color: hsl( ${props => props.theme.clrNeutral_100} );
  border-left: 5px solid hsl( ${props => props.theme.clrPrimary} );
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
  color: hsl( ${props => props.theme.clrPrimary} );
`

const Tags = styled.div`
  display: flex;
  gap: 0.5em;
`

const Tag = styled.span`
  padding: 7px 10px 4px;
  line-height: 1;
  color: hsl( ${props => props.theme.clrNeutral_100} );
  background-color: hsl( ${props => props.theme.clrPrimary} );
  border-radius: 12px;
`

export default function Job() {
  return (
    <JobOffer>
      <Header>
        <Company>Photosnap</Company>
        <Tags>
          <Tag>NEW!</Tag>
          <Tag>FEATURED</Tag>
        </Tags>
      </Header>
      <strong className="job__title">Senior Frontend Developer</strong>
      <div className="job__details">
        <span className="job__date">1d ago</span>
        <span className="job__contract">Full Time</span>
        <span className="job__location">USA only</span>
      </div>
      <div className="job__filters">
        <span className="job__filter">Frontend</span>
        <span className="job__filter">Senior</span>
        <span className="job__filter">HTML</span>
        <span className="job__filter">CSS</span>
        <span className="job__filter">JavaScript</span>
      </div>
    </JobOffer>
  )
}