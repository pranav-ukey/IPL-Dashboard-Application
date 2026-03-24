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
        <p className="competingTeam1">{competingTeam}</p>
        <p className="date1">{date}</p>
        <p className="text1">{venue}</p>
        <p className="text1">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="competingTeamLogo1"
      />
      <div className="inningDetails">
        <p className="title1">First Innings</p>
        <p className="text2">{firstInnings}</p>
        <p className="title1">Second Innings</p>
        <p className="text2">{secondInnings}</p>
        <p className="title1">Man Of The Match</p>
        <p className="text2">{manOfTheMatch}</p>
        <p className="title1">Umpires</p>
        <p className="text2">{umpires}</p>
      </div>
    </>
  )
}

export default LatestMatch
