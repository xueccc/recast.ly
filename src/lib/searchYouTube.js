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
