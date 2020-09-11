//coloca credenciais do cors no server
$.ajaxSetup({
  crossDomain: true,
  xhrFields: {
    withCredentials: true,
  },
});

const API_URL = getHostURL();

function getHostURL() {
  if (window.location.host.indexOf('localhost') != -1) {
    return 'D:/moodtation/login.html';
  } else {
    return 'D:/moodtation/indexlogin.html';
  }
}
