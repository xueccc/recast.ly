var Comments = (props) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
    </div>
    <div className="media-body">
      <div ClassName="video-list-entry-title">{props.comment.authorDisplayName}:  </div>
      <div className="video-list-entry-detail">{props.comment.textOriginal}</div>
    </div>
  </div>
);

window.Comments = Comments;