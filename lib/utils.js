var utils = {
  now: function (dateObj) {
    d = dateObj || new Date();
    var m_names = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", 
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");
    date = d.getDate() + '-' + m_names[d.getMonth()] + '-' + d.getFullYear();
    min = d.getMinutes() > 9 ? d.getMinutes() : '0' + d.getMinutes();
    // sec = d.getSeconds() > 9 ? d.getSeconds() : '0' + d.getSeconds();
    time = d.getHours() + ':' + min;
    return {'date':date, 'time':time};
  }
};