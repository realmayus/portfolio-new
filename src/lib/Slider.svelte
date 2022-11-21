<script>
    export let percent;
    export let value;
</script>

<div class="line">
    <div class="indicator" style="left: calc({percent}% - 80px)">x: {value}px;</div>
</div>

<style>
    .line{
        width: 100%;
        height: 15px;

        border-top: 2px solid #232323;
        border-left: 2px solid #232323;
        border-right: 2px solid #232323;
        position: relative;
    }

    .indicator {
        width: 80px;
        border-right: 2px solid #232323;
        height: 25px;
        position: absolute;
        color: #232323;
        font-size: 12px;
        font-family: monospace;
    }
</style>