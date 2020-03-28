<style>

</style>

<script>
  import { onMount, afterUpdate, beforeUpdate } from "svelte";
  import { LayerCake, Svg } from "layercake";
  import Scatter from "./Scatter.svelte";

  let visible;
  const points = [{ x: 0, y: 1 }, { x: 10, y: 5 }, { x: 15, y: 10 }];
  const r = 6;
  const padding = { top: r * 2, right: r * 2, bottom: r * 2, left: r * 2 };

  onMount(() => {
    // visible = true;
    console.log("onmount");
  });
  afterUpdate(() => {
    console.log("afterupdate");
  });
  beforeUpdate(() => {
    console.log("beforeupdate");
  });
</script>

<LayerCake data="{points}" x="x" y="y" {padding}>
  <Svg>
    <Scatter {r} />
  </Svg>
</LayerCake>
