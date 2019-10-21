const videoUrls = [
    'QDJ6YqI3sjo',
    'A-ouS-cBu8I',
    '5yeBe1i9d1Y',
    'S5QaJssasCw',
    'wBVr-DwSFa8',
    '7LQgJPFU5Mg',
    'p6bQ1boyrew'
];

let currentId = Math.floor(Math.random() * videoUrls.length);
const videoElement = document.querySelector('#video_element');
const setSrcUrl = id => videoElement.src = `https://www.youtube.com/embed/${videoUrls[id]}`;
const getNextId = () => currentId = currentId + 1 < videoUrls.length ? currentId + 1 : 1;
const getPrevId = () => currentId = currentId - 1 >= 0 ? currentId - 1 : videoUrls.length - 1;

setSrcUrl(currentId);

document.querySelector('#button_prev').addEventListener('click', () => setSrcUrl(getPrevId()));
document.querySelector('#button_next').addEventListener('click', () => setSrcUrl(getNextId()));
