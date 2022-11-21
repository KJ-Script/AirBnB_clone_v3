$('document').ready(function () {
  $('.amenities input[type=checkbox]').on('click', function (e) {
    const selectedAmenitiesIds = $('.amenities input[type=checkbox]:checked').map(function (i, v) { return v.parentElement.dataset.id; });
    console.log(selectedAmenitiesIds);

    const selectedAmenitiesNames = $('.amenities input[type=checkbox]:checked').map(function (i, v) { return v.parentElement.dataset.name; });
    let names = '';
    for (let i = 0; i < selectedAmenitiesNames.length; i++) {
      let end = ', ';
      if (i === selectedAmenitiesNames.length - 1) {
        end = '';
      }
      names += selectedAmenitiesNames[i] + end;
    }
    $('.amenities h4').text(names);
  });

  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    console.log(data.status);
    if (data.status === 'OK') {
      console.log(data.status);
      console.log('Updated');
      $('.api_status').addClass('available');
    } else {
      $('.api_status').removeClass('available');
    }
  });
});
