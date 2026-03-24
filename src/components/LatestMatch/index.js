import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
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
  } = latestMatchDetails

  return (
    <>
      <div className="competingTeamNameContainer">
        <p className="competingTeam">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="text">{venue}</p>
        <p className="text">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competingTeamLogo"
      />
      <div className="inningDetails">
        <p className="title">First Innings</p>
        <p className="text">{firstInnings}</p>
        <p className="title">Second Innings</p>
        <p className="text">{secondInnings}</p>
        <p className="title">Man Of The Match</p>
        <p className="text">{manOfTheMatch}</p>
        <p className="title">Umpires</p>
        <p className="text">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
