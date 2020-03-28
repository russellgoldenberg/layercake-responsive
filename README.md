# LayerCake Responsive Pattern

```svelte
<style>
  figure {
    width: 33%;
    visibility: hidden;
  }
  figure.visible {
    visibility: visible;
  }
</style>

<script>
  import { LayerCake, Svg } from "layercake";
  import Scatter from "./Scatter.svelte";

  const RATIO = 2;
	let chartW;

	$: chartH = Math.floor(chartW / RATIO);
  $: visible = !!chartW;

</script>

<figure class:visible style="height: {chartH}px;" bind:clientWidth="{chartW}">
  {#if visible}
    <LayerCake
      containerWidth="{chartW}"
      containerHeight="{chartH}"
      ...
    </LayerCake>
  {/if}
</figure>
```
