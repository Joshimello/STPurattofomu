<script lang="ts">
  import { T, useThrelte, useTask } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls } from '@threlte/extras'
  import { onMount } from 'svelte';
  import { Vector3 } from 'three'

  const { camera } = useThrelte()

  let positions: any[] = []
  let renderedPositions: any[] = []
  let cameraTarget: Vector3
  let isEnd = false

  onMount(async () => {
    const data = await fetch(`/api?id=${25544}&s=${300}`)
    const json = await data.json()
    if (data.ok) {
      positions = json.positions
      let timer = setInterval(() => {
        if (positions.length > 0) {
          cameraTarget = new Vector3(
            3 * (positions[0].sataltitude * 0.001 + 6.371) * Math.sin(positions[0].satlatitude) * Math.cos(positions[0].satlongitude),
            3 * (positions[0].sataltitude * 0.001 + 6.371) * Math.sin(positions[0].satlatitude) * Math.sin(positions[0].satlongitude),
            3 * (positions[0].sataltitude * 0.001 + 6.371) * Math.cos(positions[0].satlatitude)
          )
          renderedPositions = [...renderedPositions, positions.shift()]
        } else {
          clearInterval(timer)
          isEnd = true
        }
      }, 50)
    }
  })

  useTask(() => {
    if (cameraTarget && !isEnd) {
      camera.current.position.lerp(cameraTarget, 0.1)
    }
  })

</script>

<T.PerspectiveCamera
  makeDefault
  position={[-10, 10, 10]}
  fov={60}
>
  <OrbitControls
    autoRotate={false}
    enableDamping
    autoRotateSpeed={0.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight
  intensity={0.8}
  position={[5, 2, 0]}
/>
<T.AmbientLight intensity={0.3} />

<Grid
  position.y={-10}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={100}
  cellSize={10}
  infiniteGrid={true}
/>

<T.Mesh position={[0, 0, 0]}>
  <T.SphereGeometry args={[6.371, 64, 64]} />
  <T.MeshStandardMaterial color={0xCEC2FF} />
</T.Mesh>

<!-- <T.Mesh position={[0, 1.5, 0]} rotation={[Math.PI/4, 0, 0]}>
  <T.TorusGeometry args={[1.1, 0.01, 8, 128]} />
  <T.MeshBasicMaterial color={0xE89005} />
</T.Mesh> -->

{#each renderedPositions as position}
  <T.Mesh position={[
    (position.sataltitude * 0.001 + 6.371) * Math.sin(position.satlatitude) * Math.cos(position.satlongitude),
    (position.sataltitude * 0.001 + 6.371) * Math.sin(position.satlatitude) * Math.sin(position.satlongitude),
    (position.sataltitude * 0.001 + 6.371) * Math.cos(position.satlatitude)
  ]}>
    <T.SphereGeometry args={[0.05, 8, 8]} />
    <T.MeshBasicMaterial color={0xE89005} />
  </T.Mesh>
{/each}