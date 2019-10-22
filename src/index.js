const getRequestLink = youtubeApiKey =>
  `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&playlistId=PLP0Wif5xoBigovD_cj0LTn6Rf4M_1tpz8&key=${youtubeApiKey}`;

const initVideoPicker = videoLinks => {
  let currentId = Math.floor(Math.random() * videoLinks.length);
  const videoElement = document.querySelector('#video_element');
  const setSrcUrl = id => (videoElement.src = `https://www.youtube.com/embed/${videoLinks[id]}`);
  const getNextId = () => (currentId = currentId + 1 < videoLinks.length ? currentId + 1 : 1);
  const getPrevId = () => (currentId = currentId - 1 >= 0 ? currentId - 1 : videoLinks.length - 1);

  setSrcUrl(currentId);

  document.querySelector('#button_prev').addEventListener('click', () => setSrcUrl(getPrevId()));
  document.querySelector('#button_next').addEventListener('click', () => setSrcUrl(getNextId()));
};

fetch(getRequestLink(process.env.YOUTUBE_API_TOKEN))
  .then(r => r.json())
  .then(json => initVideoPicker(json.items.map(el => el.contentDetails.videoId)));
