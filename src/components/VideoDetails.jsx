var VideoDetails = (props) => (
  <div className="video-details">
    {props.comments.map(comment => 
      <Comments comment={comment.snippet.topLevelComment.snippet}/>
    )} 
  </div>
);

window.VideoDetails = VideoDetails;

// {props.comments.map(comment => 
//   <Comments comment={comment.snippet.topLevelComment.snippet}/>
// )} 