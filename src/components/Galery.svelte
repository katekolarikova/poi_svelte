<script>
    import {getContext, onMount} from "svelte";
    import {LeafletMapWithPois} from "../service/leaflet-map.js";
    const placemarkService = getContext("PlacemarkService")

    let galery=""
    onMount(async () => {
        const pois = await placemarkService.getPoi();
        pois.forEach(poi => {

            let view = CreateView(poi);
            galery +=view;
        });
    })
    function CreateView(poi) {

        let pictureString = '<div class="box"><h1 style="text-align:center; font-size: 60px"><b>'+ poi.name+'</b></h1>';
        poi.img.forEach(pic => {
            let tmp = '<figure className="image is-256x256"><img style="width: 500px" src=' + pic + '></figure>'
            pictureString += tmp;
        })
        pictureString += '</div>';
        return pictureString;
    }




</script>

<div contenteditable="true"
     bind:innerHTML={galery}>
</div>