<script>
  import {setContext} from "svelte";
  import {PlacemarkService} from "./service/placemark-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Router from "svelte-spa-router";
  import Dashboard from "./pages/Dashboard.svelte";

  setContext("PlacemarkService", new PlacemarkService("http://localhost:3000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/logout": Main,
    "/dashboard": Dashboard,
  }
</script>

<div className="container">
  <Router {routes}/>
</div>