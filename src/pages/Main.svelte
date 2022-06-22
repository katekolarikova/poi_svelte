<script>
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Points of Interest Ostrava"} subTitle={"The Industrial Heart of Europe"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column" style="text-align: center">
    <h1 class="title">Welcome</h1>
    <p>Please sign up or login to access the services!</p>
  </div>
</div>