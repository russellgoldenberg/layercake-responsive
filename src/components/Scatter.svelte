<script>
  import { getContext } from "svelte";
  const { data, x, xScale, y, yScale } = getContext("LayerCake");

  export let r;
</script>

<g>
  {#each $data as d}
    <circle cx="{$xScale($x(d))}" cy="{$yScale($y(d))}" {r}></circle>
  {/each}
</g>
