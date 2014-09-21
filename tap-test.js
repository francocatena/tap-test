if (Meteor.isClient) {
  Template.connection.helpers({
    hidden: function () {
      if (Meteor.status().status === 'offline') return 'hidden'
    }
  })

  Template.connection.events({
    'click button[data-disconnect]': function (event) {
      Meteor.disconnect()
    }
  })

  Template.language.events({
    'click button[data-lang]': function (event) {
      var lang = $(event.currentTarget).data('lang')

      TAPi18n.setLanguage(lang)
    }
  });
}
