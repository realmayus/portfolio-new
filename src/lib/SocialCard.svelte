<script>
    export let name;
    export let url;
    export let icon;
</script>

<a class="neutral" title={name} href={url}>
    <img alt={name} src={icon} />
</a>

<style lang="scss">
    a {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #181818;
      border: 1px solid transparent;
      border-radius: 11px;
      transition: .1s border ease-in-out;
      &:hover {
        border: 1px solid #3b3b3b;
        img {
          filter: brightness(1);
        }
      }
    }
    img {
      width: 40px;
      filter: brightness(0.7);
      transition: .1s all ease-in-out;
    }
</style>
