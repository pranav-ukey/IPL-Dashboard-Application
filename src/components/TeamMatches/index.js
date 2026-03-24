import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    teamBannerUrl: '',
    latestMatchDetails: {},
    recentMatches: [],
    id: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedTeamBannerUrl = data.team_banner_url
    const updatedLatestMatchDetails = {
      umpires: data.latest_match_details.umpires,
      result: data.latest_match_details.result,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      id: data.latest_match_details.id,
      date: data.latest_match_details.date,
      venue: data.latest_match_details.venue,
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      firstInnings: data.latest_match_details.first_innings,
      secondInnings: data.latest_match_details.second_innings,
      matchStatus: data.latest_match_details.match_status,
    }

    const updatedRecentMacthes = data.recent_matches.map(eachItem => ({
      umpires: eachItem.umpires,
      result: eachItem.result,
      manOfTheMatch: eachItem.man_of_the_match,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))

    this.setState({
      teamBannerUrl: updatedTeamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMacthes,
      id: id,
      isLoading: false,
    })
  }

  render() {
    const {teamBannerUrl, latestMatchDetails, recentMatches, id, isLoading} =
      this.state
    console.log(teamBannerUrl)
    console.log(latestMatchDetails)
    console.log(recentMatches)
    console.log(id)
    return isLoading ? (
      <div testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className={`${id}`}>
        <img src={teamBannerUrl} alt="team banner" className="teamBanner" />
        <p className="latestMatchesText">Latest Matches</p>
        <div className="latestMatchesCardContainer">
          <LatestMatch latestMatchDetails={latestMatchDetails} />
        </div>
        <ul className="recentMatchesCardsContainer">
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} recentMatchDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
