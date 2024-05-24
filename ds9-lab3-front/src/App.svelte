<script>
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
  import Router from 'svelte-spa-router';
  import {link} from 'svelte-spa-router';
  import Home from './Home.svelte';
  import Login from './Login.svelte';
  import Pago from './Pago.svelte';

  const routes = {
    '/': Home,
    '/login': Login,
    '/pago': Pago
  };
</script>

<Navbar  >
  <NavBrand href="/">
    <img src="/public/cuadrado.png" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Skillhive</span>
  </NavBrand>
  <NavHamburger  />
  <NavUl >
    <a href="/" use:link>Home</a>
    <a href="/login" use:link>Login</a>
    <a href="/pago" use:link>Pago</a>
  </NavUl>
</Navbar>

<div>
  <Router {routes} />
</div>
