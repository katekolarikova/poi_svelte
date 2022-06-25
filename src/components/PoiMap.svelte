<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMapWithPois} from '../service/leaflet-map';
    import {getContext, onMount} from "svelte";

    const placemarkService = getContext("PlacemarkService");


    const mapConfig = {
        location: {lat: 49.820923, lng: 18.262524},
        zoom: 12,
        minZoom: 1,
    };
    let map = null;

    onMount(async () => {
        map = new LeafletMapWithPois("poi-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("Poi");
        map.showLayerControl();

        const donations = await placemarkService.getPoi();
        donations.forEach(poi => {
            addDonationMarker(poi);
        });
    })
    function addDonationMarker(poi) {
        let pictures_strinf="";
        poi.img.forEach(pic => {
            let tmp = '<figure className="image is-256x256"><img src='+pic+'></figure>'
            pictures_strinf+=tmp;
        })
        const htmlstr = '<h1 style ="font-size:16px;" ><div style="text-align: right"><a  href="/#/dashboard/close">close </a></div><br><b>'+poi.name+'</b></h1>' +
            '<br><b>Category:</b><br>'+poi.category+'<br><b>Description:</b><br>'+poi.description+
            '<div class="card"> <div class="card-image">'+ pictures_strinf+ '</div>';
        map.addMarker({lat: parseFloat(poi.latitude.$numberDecimal), lng: parseFloat(poi.longitude.$numberDecimal)}, htmlstr, "Poi" );
    }

</script>

<div >
    <h1 style="text-align:center; font-size: 60px"><b> Map of Pois </b></h1>
    <p style="text-align: center; font-size: 20px; margin-bottom: 30px">
        Welcome in one of the most unique city of Europe! Ostrava has a lot of monument from the industrial and mining era, which you can't
        find anywhere else. But it is not just about it... Look on the map below and discover what evrything you can see...
    </p>
    <div class="box" id="poi-map" style="height:800px; width:800px; margin: auto">
    </div>

</div>

