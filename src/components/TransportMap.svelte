<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMapTransport} from '../service/leaflet-map';
    import {onMount} from "svelte";

    const mapConfig = {
        location: {lat: 49.820923, lng: 18.262524},
        zoom: 5,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMapTransport("transport-map", mapConfig);
        map.showZoomControl();
        map.showLayerControl();
        map.addMarker({lat: 49.820923, lng:18.262524});


    })


</script>

<div class="box" id="transport-map" style="height:800px; width:800px; margin: auto">
</div>