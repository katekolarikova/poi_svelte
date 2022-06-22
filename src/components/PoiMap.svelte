<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../service/leaflet-map';
    import {getContext, onMount} from "svelte";

    const placemarkService = getContext("PlacemarkService");


    const mapConfig = {
        location: {lat: 49.820923, lng: 18.262524},
        zoom: 12,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMap("poi-map", mapConfig);
       // var map = new L.map('map', mapConfig);
        map.showZoomControl();
        map.addLayerGroup("Poi");
        map.showLayerControl();

        //var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');

        // Adding layer to the map
       // map.addLayer(layer);

        const donations = await placemarkService.getPoi();
        donations.forEach(poi => {
            //const htmlstr = '<h1 style ="font-size:16px;" ><b>'+poi.name+'</b></h1><br><b>Category:</b><br>'+poi.category+'<br><b>Description:</b><br>'+poi.description+'<div class="card"> <div class="card-image"> <figure class="image is-256x256"> <img src='+poi.img+'> </figure> </div>';
            //var marker = L.marker([parseFloat(poi.latitude.$numberDecimal),parseFloat(poi.longitude.$numberDecimal));
            //marker.addTo(map);
            //marker.bindPopup(htmlstr)
            //var marker = map.marker([parseFloat(poi.latitude.$numberDecimal), parseFloat(poi.longitude.$numberDecimal)])
            //marker.addTo(ma)
            addDonationMarker(poi);
        });
    })
    function addDonationMarker(poi) {
        const htmlstr = '<h1 style ="font-size:16px;" ><b>'+poi.name+'</b></h1><br><b>Category:</b><br>'+poi.category+'<br><b>Description:</b><br>'+poi.description+'<div class="card"> <div class="card-image"> <figure class="image is-256x256"> <img src='+poi.img+'> </figure> </div>';
        map.addMarker({lat: parseFloat(poi.latitude.$numberDecimal), lng: parseFloat(poi.longitude.$numberDecimal)}, htmlstr, "Poi" );
    }

</script>

<div class="box" id="poi-map" style="height:800px; width:800px; margin: auto">
</div>