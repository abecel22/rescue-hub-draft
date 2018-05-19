(function($) {
    const map = new GMaps({
        div: '#map',
        lat: 29.7604,
        lng: -95.3698,
        zoom: 10
    });

    const needs = data['needs'];

    _.each(needs, (value, key) => {
        const lat = value['latitude'];
        const lng = value['longitude'];
        const name = value['location_name'];

        if (lat) {
            map.addMarker({
                lat: lat,
                lng: lng,
                title: name,
                click: function(e) {
                    alert('You clicked in this marker');
                }
            });
        }
    });
})(jQuery);
