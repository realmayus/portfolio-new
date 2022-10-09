<script>
    export let title;
    export let img;
    export let img_alt;
    export let link;
</script>

<div class="outerWrapper">
    <div class="wrapper">
        <a href={link} class="front">
            <img alt={img_alt}>
            <div class="right">
                <h3>{title}</h3>
                <p><slot/></p>
            </div>
        </a>
        <div class="back">

            <p>this is the back side</p>

        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    width: 100%;
    height: 100%;
    position: relative;
    transition: transform 0.8s;
    transform-style: preserve-3d;

  }

  .front, .back {
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .back {
    transform: rotateX(180deg);
  }

  .outerWrapper {
    &:hover {
      .wrapper {
        transform: rotateX(180deg) scale(1.5);
      }
    }
  }

  a {
    width: 440px;
    height: 140px;
    background-color: #232323;
    border-radius: 12px;
    border: 1px solid transparent;
    transition: .2s all ease-in-out;

    padding: 20px;
    margin: 10px;
    display: flex;

    &:before {
      content: none;
    }

    &:after {
      content: none;
    }

    &:hover {
      background-color: #2c2c2c;
      border: 1px solid #484848;
    }
  }

  .right {
    width: 300px;
    display: flex;
    flex-direction: column;
  }

  h3 {
    padding: 0;
    margin: 0;
  }

  img {
    width: 140px;
    height: 140px;
    margin-right: 20px;
  }

  p {
    font-size: 16px;
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    max-height: 80px;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
</style>