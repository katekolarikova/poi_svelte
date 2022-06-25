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
        map.addMarker({lat: 49.820923, lng:18.262524}, "<a  href=\"/#/dashboard/close\">close </a><p>Ostrava</p>");
        map.addMarker({lat: 49.564492, lng:18.207816}, "<a  href=\"/#/dashboard/close\">close </a><p>Beskydy</p>");
        map.addMarker({lat: 50.063010, lng:17.280452}, "<a  href=\"/#/dashboard/close\">close </a><p>Jeseniky</p>");
        map.addMarker({lat:49.132589,  lng: 20.067195}, "<a  href=\"/#/dashboard/close\">close </a><p>Tatry</p>");


    })

</script>
<div class>
    <h1 style="text-align:center; font-size: 60px"><b>Mountains around Ostrava </b></h1>
    <p style="text-align: center; font-size: 20px; margin-bottom: 30px">
        Are you already tired of city and are you looking for some nature? No problem! Ostrava leaves close to the Beskydy, Jeseniky or Tatry mountains!
        Discover where these places are on the map below...
    </p>
    <div class="box" id="ova-map" style="height:800px; width:800px; margin: auto"></div>

</div>


