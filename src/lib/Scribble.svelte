<script>
    import {draw, fade} from "svelte/transition";
    import {getRandomInt} from "./utils";
    import {onMount} from "svelte";

    export let title;  // Title of the subheading
    export let id;  // ID of the anchor tag we want to scroll to
    export let hash;  // up-to-date current hash of our site (see usages in ../App.svelte)

    let show = true;

    function animateIn(node) {
        const result = draw(node, {delay: 500, duration: 500});
        setTimeout(() => {show = false;}, 2000);
        return result
    }

    // let paths = ["M172 41c105-32 345 78 22 131C-128 224 30 44 211 8", "M77.474,12.074c133.265,-21.724 436.548,90.529 117.579,167.675c-318.969,77.146 -167.18,-156.522 0,-171.249", "M240.661,39.949c-44.957,-93.47 -441.843,43.614 -83.885,122.729c290.103,64.118 208.005,-164.677 47.601,-142.276c-111.137,15.52 -140.888,45.551 -140.888,45.551"]
    // paths = paths.map((p) => {
    //     const viewBox = getBBoxForPath(p);
    //     return {d: p, viewBox}
    // });

    // Baked the result of the above code for performance:

    let path;
    let paths;
    onMount(() => {
        paths = JSON.parse("[{\"d\":\"M172 41c105-32 345 78 22 131C-128 224 30 44 211 8\",\"viewBox\":\"-0.5630950927734375 -1 365.23406982421875 190.35943603515625\"},{\"d\":\"M77.474,12.074c133.265,-21.724 436.548,90.529 117.579,167.675c-318.969,77.146 -167.18,-156.522 0,-171.249\",\"viewBox\":\"-0.5001373291015625 -0.4999847412109375 344.57568359375 203.8289031982422\"},{\"d\":\"M240.661,39.949c-44.957,-93.47 -441.843,43.614 -83.885,122.729c290.103,64.118 208.005,-164.677 47.601,-142.276c-111.137,15.52 -140.888,45.551 -140.888,45.551\",\"viewBox\":\"-0.4998931884765625 -0.4997539520263672 358.2620849609375 182.55564880371094\"}]");  //generated with util
        path = paths[getRandomInt(0, paths.length)];
    });
    $: hash, path = paths ? paths[getRandomInt(0, paths.length)] : null;  // update scribble when hash changes

</script>

<h2 class="subheading">
    { #if hash.endsWith(`#${id}`)}
        <!-- Scribble animation -->
        <svg aria-hidden="true" class="scribble" xmlns="http://www.w3.org/2000/svg" viewBox={path?.viewBox || "0 0 0 0"}>
            <path in:animateIn
                  out:fade
                  fill="none"
                  stroke="#ff2c2c"
                  stroke-width="17"
                  stroke-linecap="round"
                  d={path?.d || ""}
            />
        </svg>
    {/if}
    <a id={id} class="neutral" role="mark">{title}</a>
</h2>

<style>
    .scribble {
        position: absolute;
        width: 150%;
        height: 150%;
        left: -25%;
        top: -25%;
    }

    .subheading {
        position: relative;
    }
</style>
