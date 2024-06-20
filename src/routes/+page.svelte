<script lang="ts">
  import App from '$lib/components/App.svelte'
  import { XR, VRButton } from '@threlte/xr'
  import { list } from '$lib/list'
  import { ScrollArea } from "$lib/components/ui/scroll-area"
  import * as Sheet from "$lib/components/ui/sheet"
  import { Button } from "$lib/components/ui/button"
  import { onMount } from 'svelte'
  import { satelliteData } from "$lib/stores"

  onMount(async () => {
    for (const [key, value] of Object.entries(list)) {
      const data = await fetch(`/api?id=${value.id}&s=${1}`)
      const json = await data.json()
      if (data.ok) {
        $satelliteData[key] = json.positions[0]
      }
    }
  })

  let open = false

  let selectedname: string = ''
  let info: Record<string, any> = {}
</script>

<div class="absolute left-6 top-14">
  <span>{selectedname}</span>
  <pre>{JSON.stringify(info, null, 2)}</pre>
  <button class="underline text-lg" on:click={() => {
    selectedname = ''
    info = {}
    window.clearPath()
  }}>Clear</button>
</div>

<Sheet.Root bind:open>
  <Sheet.Trigger class="absolute top-6 left-6 underline text-xl">
    Menu
  </Sheet.Trigger>
  <Sheet.Content side="left">
    <Sheet.Header>
      <Sheet.Title>Satellite List</Sheet.Title>
      <Sheet.Description>
      </Sheet.Description>
    </Sheet.Header>
    <ScrollArea class="h-[calc(100vh-6rem)]">
      <div class="flex flex-col gap-1 h-full">
        {#each Object.entries(list) as [key, value]}
          <div class="flex gap-1">
            <Button
              on:click={() => {
                window.predictPath(value.id)
                open = false
                info = $satelliteData[key]
                selectedname = key
              }} 
              class="bg-blue-500"
            >
                {key} - {value.code}
            </Button>
          </div>
        {/each}
      </div>
    </ScrollArea>
  </Sheet.Content>
</Sheet.Root>

<!-- <div class="absolute h-screen w-0 md:w-96 p-6 top-0 left-0">
  <div class="bg-gray-100 rounded-xl w-full h-full p-4 flex flex-col">
    <ScrollArea>
      <span class="text-2xl">Satellite List</span>
      {#each Object.entries(list) as [key, value]}
        <button
          on:click={() => window.predictPath(value.id)} 
          class="bg-blue-500 text-white p-2 rounded-md mt-2"
        >
            {key} - {value.code}
        </button>
      {/each}
    </ScrollArea>
  </div>
</div> -->

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
