<script>
    export let title;
    export let img;
    export let img_alt;
    export let url;
    export let description;
</script>

<a class="neutral" title={name} href={url}>
    <img alt={img_alt} src={img} />
    <div class="right">
        <p class="title">{title}</p>
        <p>{description}</p>
    </div>
</a>

<style lang="scss">
  a {
    max-width: 500px;
    text-decoration: none;
    display: flex;
    @media (max-width: 500px) {
      flex-direction: column;
    }
    gap: 40px;
    cursor: pointer;
    align-items: center;
    background-color: #181818;
    border: 1px solid transparent;
    border-radius: 22px;
    transition: .1s border ease-in-out;
    padding: 40px;
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
  p {
    font-size: 16px;
    line-height: 23px;
    margin: 0;
  }
  .title {
    padding-bottom: 10px;
    font-size: 20px;
    color: #ccccff;
  }
</style>
