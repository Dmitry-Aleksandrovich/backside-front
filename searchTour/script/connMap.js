async function initMap() {
    await ymaps3.ready;

    const { YMap, YMapDefaultSchemeLayer, YMapControlButton, YMapDefaultFeaturesLayer, YMapControls } = ymaps3;
    const { YMapGeolocationControl, YMapZoomControl } = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

    const map = new YMap(
        document.getElementById('map'),
        {
            location: {
                center: [37.588144, 55.733842],
                zoom: 10
            }
        }
    );

    const mapScheme = new YMapDefaultSchemeLayer({ visible: true });
    map.addChild(mapScheme);
    map.addChild(new YMapDefaultFeaturesLayer());


    const leftControl = new YMapControls({position: 'left', orientation: "horizontal"})
    leftControl.addChild(new YMapZoomControl())

    const searchControl = new YMapControls({position: 'top', orientation: "vertical"})


    map.addChild(leftControl) 
    map.addChild(searchControl)

    window.maps = map
    
}
initMap();
