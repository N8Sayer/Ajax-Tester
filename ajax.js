var url = 'https://papasandbeer.agilecrm.com/dev/api/contacts/5690964005879808';
url += '?' + $.param({
});

$.ajax ({
  url: url,
  method: 'GET',
  beforeSend: function (xhr) {
    xhr.setRequestHeader ("Authorization", "Basic " + btoa('papas@zitrocreative.com' + ":" + '1o1v57vguh2naqkh7fkd2h0fis'));
  }
}).done(function(result) {
  $('body').append(result);
}).fail(function(result) {
  $('body').append('Failed');
});
