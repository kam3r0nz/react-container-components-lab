import React from 'react'
import MovieReviews from './MovieReviews'

class LatestMovieReviewsContainer extends React.Component {
    constructor() {
      super();

      this.state = {
        reviews: []
      }
    }

    componentDidMount() {
      fetch('https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=vP0Yb8ho7gLAvZHhvhZTILoHKViXO2xO')
        .then(res => res.json())
        .then(response => this.setState({ reviews: response.results }))
    }

    render() {
      return (
        <div className="latest-movie-reviews">
          <h2>The Latest Reviews:</h2>
          <MovieReviews reviews={this.state.reviews} />
        </div>
      )
    }
}

export default LatestMovieReviewsContainer;