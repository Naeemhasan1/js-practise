function anotherAddEventListener(typeOfEvent, callback) {
  //Detect the Event
  var eventThatHappened = {
    type: "keypress",
    key: "p",
    duration: 2,
  };
  if (typeOfEvent === "keypress") {
    callback(eventThatHappened);
  }
}
anotherAddEventListener("keypress", function (e) {
  console.log(e);
});
