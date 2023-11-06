import styled from 'styled-components'
import Logo from './subcomponents/Logo'
import Header from './subcomponents/Header'
import Title from './subcomponents/Title'
import Details from './subcomponents/Details'
import Filters from './subcomponents/Filters'

const JobOffer = styled.section`
  position: relative;
  width: 87.2%;
  max-width: 1110px;
  margin-inline: auto;
  padding: 2em 1.5em 1.5em 1.5em;
  background-color: hsl( ${props => props.theme.clrNeutral_100} );
  border-left: 5px solid hsl( ${props => props.theme.clrPrimary_400} );
  border-radius: 5px;
`

export default function Job(props) {
  return (
    <JobOffer>
      <Logo logo={props.logo} company={props.company}/>
      <Header company={props.company} new={props.tags.new} featured={props.tags.featured}/>
      <Title jobTitle={props.jobTitle}/>
      <Details date={props.date} contract={props.contract} location={props.location}/>
      <Filters role={props.filters.role} level={props.filters.level} techs={props.filters.techs} />
    </JobOffer>
  )
}