/////////////////////////////////////
// Status Template
////////////////////////////////////

Meteor.startup( function () {
  Session.set('now', utils.now());
  setInterval(function () {
    Session.set('now', utils.now());
  }, 20 * 1000);
});

Template.status.connected = function () {
  return Meteor.status().connected;
}

Template.status.datetime = function () {
  return Session.get('now');
}

Template.myform.rendered = function () {
  return Meteor.defer(function () {
    return $('.item-select').typeahead({
      source: items
    });
  });
};