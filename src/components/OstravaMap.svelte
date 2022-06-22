<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMapOstrava} from '../service/leaflet-map';
    import {getContext, onMount} from "svelte";

    const placemarkService = getContext("PlacemarkService");


    const mapConfig = {
        location: {lat: 49.820923, lng: 18.262524},
        zoom: 6,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMapOstrava("ova-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        map.addMarker({lat: 49.820923, lng:18.262524});


    })

</script>

<div class="box" id="ova-map" style="height:800px; width:800px; margin: auto">
</div>