class NetworkService {
  sendRequest(verb, url, body, callback) {
    callback([
      { name: "Get a haircut" },
      { name: "Get a job" }
    ]);
  }
}