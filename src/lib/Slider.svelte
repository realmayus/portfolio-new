<script>
    export let percent;
    export let value;
</script>

<div class="line">
    <div class="indicator" style="left: calc({percent}% - 80px)">x: {value}px;</div>
</div>

<style lang="scss">
    .line{
        width: 100%;
        height: 15px;

        border-top: 2px solid #2c2c2c;
        border-left: 2px solid #2c2c2c;
        border-right: 2px solid #2c2c2c;
        position: relative;

        @media (hover: none) {
            display: none;
        }
    }

    .indicator {
        width: 80px;
        border-right: 2px solid #2c2c2c;
        height: 15px;
        position: absolute;
        color: #2c2c2c;
        font-size: 12px;
        font-family: monospace;
    }
</style>
