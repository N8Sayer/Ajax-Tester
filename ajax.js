var url = 'https://papasandbeer.agilecrm.com/dev/api/contacts/5690964005879808';
// url += '?' + $.param({
// });

var username = 'papas@zitrocreative.com',
    password = '1o1v57vguh2naqkh7fkd2h0fis';

function make_base_auth(user, password) {
  var tok = user + ':' + password;
  var hash = btoa(tok);
  return "Basic " + hash;
}
var auth = make_base_auth(username,password);

var settings = {
  "async": true,
  "crossDomain": true,
  "url": url,
  "method": "GET",
  "headers": {
    "authorization": auth,
    "cache-control": "no-cache"
  }
}

$.ajax(settings).done(function (response) {
  $('body').append(result);
}).fail(function (response) {
  $('body').append("Failed");
});
