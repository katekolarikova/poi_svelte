<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const placemarkService = getContext("PlacemarkService");


    let piechart=false;
    let barchart=true;
    let doughnut=false;

    let graphType = ["Bar", "Pie", "Percentage"];
    let selectedType = "";

    let data = {
        labels: ['Nature', 'History', 'Animals', 'Culture', 'Food', 'Club', 'Sport'],
        datasets: [
            {
                values: [0,0, 0, 0, 0, 0, 0]
            }
        ]
    };


    function getPoiChart(poiList) {
        poiList.forEach(poi => {
            if (poi.category == "Nature") {
                data.datasets[0].values[0] += 1
            } else if (poi.category== "History") {
                data.datasets[0].values[1] += 1
            }else if (poi.category== "Animals") {
                data.datasets[0].values[2] += 1
            }else if (poi.category== "Culture") {
                data.datasets[0].values[3] += 1
            }else if (poi.category== "Food") {
                data.datasets[0].values[4] += 1
            }else if (poi.category== "Club") {
                data.datasets[0].values[5] += 1
            }else if (poi.category== "Sport") {
                data.datasets[0].values[6] += 1
            }
        });
    }


    onMount(async () => {
        let poiList = await placemarkService.getPoi();
        getPoiChart(poiList)

    });

    async function changeType() {
        if (selectedType=="Pie")
        {
            piechart=true;
            barchart=false;
            doughnut=false;
        }
        else if (selectedType=="Percentage")
        {
            barchart=false;
            piechart=false;
            doughnut=true;
        }
        else {
            piechart=false;
            barchart=true;
            doughnut=false;
        }

    }


</script>




<h1 class="title is-4" style="font-size: 40px">Categories of Pois</h1>
<form on:submit|preventDefault={changeType}>
    <div>
        <p style="font-size: 20px"> On the graph below you can see how many pois are available in every category. And do not hesitate to change the graph type to the one you like the most!</p>
    </div>
    <div class="control">
        {#each graphType as type}
            <input bind:group={selectedType} class="radio" type="radio" style="width: 20px; height: 20px; margin: 10px" value="{type}"> <i style="font-size: 25px">  {type}     </i>
        {/each}
    </div>
    <div class="field">
        <div class="control">
            <button class="button is-link " style="margin: 30px;">Submit</button>
        </div>
    </div>
</form>
{#if piechart}
    <div class="section">
        <Chart data={data} type="pie"/>
    </div>
{/if}
{#if barchart}
    <div class="section">
        <Chart data={data} type="bar"/>
    </div>
{/if}
{#if doughnut}
    <div class="section">
        <Chart data={data} type="percentage"/>
    </div>
{/if}
