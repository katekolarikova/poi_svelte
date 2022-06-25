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
<div >
    <h1 style="text-align:center; font-size: 60px"><b>How to get there? </b></h1>
    <p style="text-align: center; font-size: 20px; margin-bottom: 30px"> Do you want to visit Ostrava? It is easy to get there! the city is located close to the Polish borders and you can ue many different airports!
        Just Check the map below!</p>
    <div class="box" id="transport-map" style="height:800px; width:800px; margin: auto">
    </div>

</div>