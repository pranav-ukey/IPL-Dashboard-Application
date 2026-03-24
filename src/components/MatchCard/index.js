import './index.css'

const MatchCard = props => {
  const {recentMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    id,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    matchStatus,
  } = recentMatchDetails
  const matchResult = matchStatus === 'Won' ? 'wonResult' : 'lostResult'
  return (
    <li className="matchCardContainer">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingTeamLogo"
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchResult}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
