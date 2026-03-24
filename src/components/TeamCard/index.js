import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {name, id, teamImageUrl} = cardDetails

  return (
    <Link className="nav-link" to={`/team-matches/${id}`}>
      <li className="cardContainer">
        <img src={teamImageUrl} alt={name} className="iplTeamLogo" />
        <p className="iplTeamName">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
