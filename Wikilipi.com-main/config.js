var isLocal = false;
var apiUrl = "http://localhost/ekaTTS";
var soundFolder = "/MySounds";
if (isLocal) {
    apiUrl = "http://localhost/ekaTTS";
    soundFolder = "/MySounds";
} else {
    apiUrl = "https://ekalipi.org/ekaTTS";
    soundFolder = "/MySounds";
}