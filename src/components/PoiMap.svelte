<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../service/leaflet-map';
    import {onMount} from "svelte";


    const mapConfig = {
        location: {lat: 52.160858, lng: -7.152420},
        zoom: 8,
        minZoom: 1,
    };

    onMount(async () => {
        const map = new LeafletMap("poi-map", mapConfig);
    });
</script>

<div class="box" id="poi-map" style="height:800px; width:800px; margin: auto">
</div>