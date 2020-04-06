# LayerCake Responsive Pattern

A true responsive pattern for LayerCake usage with Svelte. Includes disabling rendering before the chart is ready with proper dimensions.

[Demo](https://russellgoldenberg.github.io/layercake-responsive/)

See [App.svelte](https://github.com/russellgoldenberg/layercake-responsive/blob/master/src/components/App.svelte) for full implementation example. Below has the important parts.

```svelte
<style>
  figure {
    width: 50%;
    visibility: hidden;
  }
  figure.visible {
    visibility: visible;
  }
</style>

<script>
  import { LayerCake, Svg } from "layercake";
  let chartW;
  $: chartH = Math.floor(chartW / 2);
  $: visible = !!chartW;
</script>

<figure class:visible style="height: {chartH}px;" bind:clientWidth="{chartW}">
  {#if visible}
    <LayerCake
      containerWidth="{chartW}"
      containerHeight="{chartH}"
    </LayerCake>
  {/if}
</figure>
```
