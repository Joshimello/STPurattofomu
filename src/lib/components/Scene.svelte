<script lang="ts">
  import { T, useThrelte, useTask } from '@threlte/core'
  import { ContactShadows, Float, Grid, OrbitControls, useTexture, Text } from '@threlte/extras'
  import { onMount } from 'svelte';
  import { Vector3 } from 'three'
  import { XR } from '@threlte/xr'
  import HoshinoSwimsuit from './models/HoshinoSwimsuit.svelte'

  const { camera } = useThrelte()

  let positions: any[] = []
  let renderedPositions: any[] = []
  let cameraTarget: Vector3
  let isEnd = false

  onMount(async () => {

  })

  useTask(() => {
    if (cameraTarget && !isEnd) {
      camera.current.position.lerp(cameraTarget, 0.1)
    }
  })

  const earthMap = useTexture('/earth.jpg')

</script>

<XR>
  <HoshinoSwimsuit position={[20, -5, -10]} scale={50}/>
</XR>

<T.PerspectiveCamera
  makeDefault
  position={[-70, 100, -130]}
  fov={60}
>
  <OrbitControls
    autoRotate={false}
    enableDamping
    autoRotateSpeed={0.5}
  />
</T.PerspectiveCamera>

<T.DirectionalLight intensity={5} position={[100, 0, -70]} />

<T.AmbientLight intensity={1} />

<!-- <Grid
  position.y={-10}
  cellColor="#ffffff"
  sectionColor="#ffffff"
  sectionThickness={0}
  fadeDistance={100}
  cellSize={10}
  infiniteGrid={true}
/> -->

{#await earthMap then earthMapValue}
  <T.Mesh position={[0, 0, 0]}>
    <T.SphereGeometry args={[63.71, 64, 64]} />
    <T.MeshStandardMaterial color={0xCEC2FF} map={earthMapValue} />
  </T.Mesh>
{/await}

<!-- <T.Mesh position={[0, 1.5, 0]} rotation={[Math.PI/4, 0, 0]}>
  <T.TorusGeometry args={[1.1, 0.01, 8, 128]} />
  <T.MeshBasicMaterial color={0xE89005} />
</T.Mesh> -->

{#each renderedPositions as position}
  <T.Mesh position={[
    (position.sataltitude * 0.001 + 63.71) * Math.sin(position.satlatitude) * Math.cos(position.satlongitude),
    (position.sataltitude * 0.001 + 63.71) * Math.sin(position.satlatitude) * Math.sin(position.satlongitude),
    (position.sataltitude * 0.001 + 63.71) * Math.cos(position.satlatitude)
  ]}>
    <T.SphereGeometry args={[0.5, 8, 8]} />
    <T.MeshBasicMaterial color={0xE89005} />
  </T.Mesh>
{/each}