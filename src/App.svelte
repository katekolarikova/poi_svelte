<script>
  import {setContext} from "svelte";
  import {PlacemarkService} from "./service/placemark-service";
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Router from "svelte-spa-router";
  import Dashboard from "./pages/Dashboard.svelte";
  import Charts from "./pages/Charts.svelte";
  import DashboardClose from "./pages/DashboardClose.svelte";
  import ImageGalery from "./pages/ImageGalery.svelte";

  setContext("PlacemarkService", new PlacemarkService("http://localhost:3000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/logout": Main,
    "/dashboard": Dashboard,
    "/dashboard/close": DashboardClose,
    "/charts": Charts,
    "/galery":ImageGalery,
  }
</script>

<div className="container">
  <Router {routes} />
</div>