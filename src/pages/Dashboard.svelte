<script>
    import LogoutNavigator from "../components/LogoutNavigator.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import PoiMap from "../components/PoiMap.svelte";
    import PoiForm from "../components/PoiForm.svelte";
    import OstravaMap from "../components/OstravaMap.svelte";
    import TransportMap from "../components/TransportMap.svelte";

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
    <OstravaMap/>
<TransportMap/>


<PoiForm/>