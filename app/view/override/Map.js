Ext.define('GeoTweet.view.override.Map', {
    requires: 'GeoTweet.view.Map'
}, function() {
    Ext.override(GeoTweet.view.Map, {
         config: {
            mapOptions: {
                center: new google.maps.LatLng(40.714186,-74.006414)
            }
        }
    });
});