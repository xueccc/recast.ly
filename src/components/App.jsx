class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: window.exampleVideoData,
      selected: {
        id: {videoId: ''},
        snippet: {
          title: '',
          description: '',
        }
      }
    };
    this.handler = this.handler.bind(this);
    this.search = this.search.bind(this);
  }
  
  componentDidMount() {
    this.search('funny dog');
  }
  
  handler(selectedVideo) {
    this.setState({
      selected: selectedVideo
    });
  }
  
  search(query) {
    var options = {
      key: window.YOUTUBE_API_KEY,
      query: query,
      max: 5
    };
    this.props.searchYouTube(options, (videos) => { this.setState({collection: videos, selected: videos[0]}); } );
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <Search search={_.debounce(this.search, 500)}/>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.selected} />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList handler={this.handler} videos={this.state.collection}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
