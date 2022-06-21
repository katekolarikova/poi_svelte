<script>
    import LogoutNavigator from "../components/LogoutNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import PoiMap from "../components/PoiMap.svelte";

</script>

<div class="columns is-vcentered">
    <div class="column is-two-thirds">
        <TitleBar title={"Points of Interest Ostrava"} subTitle={"The Industrial Heart of Europe"}/>
    </div>
    <div class="column">
        <LogoutNavigator/>
    </div>
</div>

<PoiMap/>