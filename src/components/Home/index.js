import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamCardsList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCardList()
  }

  getTeamCardList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(eachItem => ({
      name: eachItem.name,
      id: eachItem.id,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({teamCardsList: updatedData, isLoading: false})
  }

  render() {
    const {teamCardsList, isLoading} = this.state
    return isLoading ? (
      <div data-testid="loader">
        <Loader type="Oval" color="#ffffff" height={50} width={50} />
      </div>
    ) : (
      <div className="pageBgContainer">
        <div className="iplLogoAndheadingContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="iplLogo"
          />
          <h1 className="main-heading">IPL Dashboard</h1>
        </div>
        <ul className="teamCardContainer">
          {teamCardsList.map(eachItem => (
            <TeamCard key={eachItem.id} cardDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
