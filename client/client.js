/////////////////////////////////////
// Status Template
////////////////////////////////////
Template.status.status = function () {
  return Meteor.status().status;
}

Template.status.msg = function () {
  st = Meteor.status();
  retry_in = ((st.retryTime-(new Date()).getTime())/1000).toFixed(2);
  return "Retry #" + st.retry_count + 
    " ,retry again in "+ retry_in + " s."
}

Template.status.connected = function () {
  return Meteor.status().connected;
}

Template.status.datetime = function () {
  var d = new Date()
  return d.toLocaleDateString() + " " + d.toLocaleTimeString();
}

Meteor.setInterval(Template.status.datetime, 1000);