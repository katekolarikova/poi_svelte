<script>
    import {push} from "svelte-spa-router";
    import {getContext} from "svelte";

    let name = ""
    let category = "";
    let description = "";
    let latitude=0.0;
    let longitude=0.0;
    let errorMessage = "";


    const placemarkService = getContext("PlacemarkService");

    async function addPoi() {
        let success = await placemarkService.addPoi(name, category,description,longitude,latitude)
        if (success) {
            push("/dashboard");
        } else {
            name = ""
            category = "";
            description = "";
            latitude=0.0;
            longitude=0.0;
            errorMessage = "Invalid Credentials";
        }
    }
</script>
<div class="box" id="poi-map" style="height:800px; width:800px; margin: auto">
<h1 class="title" style="color:darkgreen;font-size:30px;text-align:center;">Add New Poi</h1>
<form on:submit|preventDefault={addPoi} enctype="multipart/form-data">
    <div class="field">
        <label class="label" for="name">Name of Poi</label>
        <input bind:value={name} class="input" id="name" name="name"placeholder="Enter Poi Name" type="text">
    </div>

    <div class="field">
        <label class="label" for="category"> Category</label>
        <select bind:value={category} name="category" id="category"
                style="background-color: white; width:200px; height:40px; border-color:#E0DCDB;
                    border-radius:4px; border-width:1px; box-shadow: #E0DCDB"
                placeholder="Enter poi description">
            <option value="Nature">Nature</option>
            <option value="History">History</option>
            <option value="Animals">Animals</option>
            <option value="Culture">Culture</option>
            <option value="Food">Food</option>
            <option value="Club">Club</option>
            <option value="Sport">Sport</option>
        </select>
    </div>

    <div class="field">
        <label class="label" for="description"> Description</label>
        <input class="input" bind:value={description} id ="description" type="text" placeholder="Enter poi description" name="description">
    </div>

    <div class="field">
        <label class="label" for="latitude"> Latitude</label>
        <input class="input"  bind:value={latitude} id ="latitude" type="text" placeholder="Enter poi latitude" name="latitude">
    </div>

    <div class="field">
        <label class="label" for="longitude"> Longitude</label>
        <input class="input" bind:value={longitude} id ="longitude" type="text" placeholder="Enter poi longitude" name="longitude">
    </div>
    <label class="label"> Picture</label>
    <div id="file-select" class="file has-name is-fullwidth">

        <label class="file-label">
            <input class="file-input" name="imagefile" type="file" accept="image/png, image/jpeg image/jpg" >
            <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">
              Choose a file…
            </span>
           </span>
            <span class="file-name"></span>
        </label>
    </div><br>
    <div class="field is-grouped">
        <button class="button is-link">Add Poi</button>
    </div>
</form>
</div>
{#if errorMessage}
    <div class="section">
        {errorMessage}
    </div>
{/if}