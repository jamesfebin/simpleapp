Meteor.publish("rooms", function () {
  return Rooms.find({ userId: this.userId });
});

Meteor.publish("messages", function (roomId) {
  return Messages.find({roomId:roomId});
});


