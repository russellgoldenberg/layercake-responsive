<style>
  figure {
    width: 33%;
    background: pink;
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
  let r = 5;
  let pad = r * 3;
  let padding = { top: pad, right: pad, bottom: pad, left: pad };

  // responsive chart, don't render until dimensions are ready
  $: chartH = Math.floor(chartW / RATIO);
  $: visible = !!chartW;

  const data = [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }];
</script>

<figure class:visible style="height: {chartH}px;" bind:clientWidth="{chartW}">
  {#if visible}
    <LayerCake
      containerWidth="{chartW}"
      containerHeight="{chartH}"
      {data}
      {padding}
      x="x"
      y="y">
      <Svg>
        <Scatter {r} />
      </Svg>
    </LayerCake>
  {/if}
</figure>
