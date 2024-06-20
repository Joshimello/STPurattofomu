<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { XR, VRButton  } from '@threlte/xr'
  import { list } from '$lib/list'
</script>

<div class="absolute h-screen w-96 p-6 top-0 left-0">
  <div class="bg-gray-100 rounded-xl w-full h-full p-4 flex flex-col">
    <span class="text-xl">List</span>
    dawda
  </div>
</div>

<VRButton/>

<div class="h-screen">
  <App />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: monospace;
  }
</style>
