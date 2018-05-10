class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selected: window.exampleVideoData[0]// the selected video,
    };
    this.handler = this.handler.bind(this);
  }
  
  handler(selectedVideo) {
    this.setState({
      selected: selectedVideo
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <VideoPlayer video={this.state.selected}/>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList handler={this.handler} videos={window.exampleVideoData}/>
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
