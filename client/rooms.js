Template.home.events({
	'click #addRoom':function()
	{
	
	var name = $("#roomName").val();
	Rooms.insert({name:name,userId:Meteor.user()._id});
	
	},
	'click #go':function()
	{
	Router.go('/room/'+this._id);
	}

});

Template.messages.events({
	'click #send':function()
	{

	var message = $('#message').val();
	var email = Meteor.user().emails[0].address;
	var time  =  Math.round(+new Date()/1000);
	var roomId = Session.get('roomId');
	Messages.insert({email:email,userId:Meteor.user()._id,message:message,time:time,roomId:roomId})

	}

});

Template.home.helpers({
	'rooms':function()
	{
	return Rooms.find({})
	}
});

Template.messages.helpers({
	'messages':function()
	{
	var roomId = Session.get('roomId');
	return Messages.find({roomId:roomId},{sort:{time:-1}});
	}

});
