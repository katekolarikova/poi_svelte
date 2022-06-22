<script>
    import PoiChart from "../components/PoiChart.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import LogoutNavigator from "../components/LogoutNavigator.svelte";

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Points of Interest Ostrava"} subTitle={"The Industrial Heart of Europe"}/>
    </div>
    <div class="column">
        <LogoutNavigator/>
    </div>
</div>
<div class="column has-text-centered">
    <PoiChart />
</div>


