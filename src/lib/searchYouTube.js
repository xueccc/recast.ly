var searchYouTube = (options, callback) => {
  // TODO
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video',
    type: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max
    },
    success: data => callback(data.items)
  });
};

window.searchYouTube = searchYouTube;

var searchComments = (videoId, callback) => {
  // TODO
  $.ajax ({
    url: 'https://www.googleapis.com/youtube/v3/commentThreads',
    type: 'GET',
    data: {
      key: window.YOUTUBE_API_KEY,
      part: 'snippet',
      maxResults: 10,
      videoId: videoId
    },
    success: data => callback(data)
  });
};
window.searchComments = searchComments;