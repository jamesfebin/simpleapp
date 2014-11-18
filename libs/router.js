
Router.route('/',{
  template:"home",
  waitOn:function() { Meteor.subscribe('rooms'); }
});

Router.route('/room/:id', {
    template:"messages",

    waitOn: function () { Meteor.subscribe('messages',this.params.id); Session.set('roomId',this.params.id); }
});



