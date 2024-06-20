<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { XR, VRButton } from '@threlte/xr'
  import { list } from '$lib/list'
</script>

<div class="absolute h-screen w-96 p-6 top-0 left-0">
  <div class="bg-gray-100 rounded-xl w-full h-full p-4 flex flex-col">
    <span class="text-2xl">Satellite List</span>
    {#each Object.entries(list) as [key, value]}
      <button
        on:click={() => window.predictPath(value.id)} 
        class="bg-blue-500 text-white p-2 rounded-md mt-2"
      >
          {key} - {value.code}
      </button>
    {/each}
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
