const GITHUB_BUILD_ENV_NAME = 'GitHubEnv';

let videoUrls = [
  'QDJ6YqI3sjo',
  'A-ouS-cBu8I',
  '5yeBe1i9d1Y',
  'S5QaJssasCw',
  'wBVr-DwSFa8',
  '7LQgJPFU5Mg',
  'p6bQ1boyrew'
];

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

if (process.env.KISKIS_BUILD_ENV === GITHUB_BUILD_ENV_NAME) {
  const fetchedStr = process.env.FETCHED_DATA;
  const jsonStr = fetchedStr.substring(fetchedStr.indexOf('{'));
  videoUrls = JSON.parse(jsonStr).items.map(el => el.contentDetails.videoId);
}

initVideoPicker(videoUrls);
