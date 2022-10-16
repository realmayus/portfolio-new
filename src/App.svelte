<script>

    import Nav from "./lib/Nav.svelte";
    import pointer from "./assets/pointing_hand_2.png";
    import downloadDialog from "./assets/download_dialog.svg";
    import saveDialog from "./assets/save_dialog.svg";
    import arrowDown from "./assets/arrow-down-solid.svg";

    let dialogs = [0, 1, 2, 3, 4];
    const popDialog = (id) => {
        dialogs = dialogs.filter((dialog) => dialog !== id);
    }
</script>

<main>
    <Nav/>
    <img class="download" alt="vintage download dialog" src={downloadDialog} aria-hidden="true"/>
    <div class="saveWrapper">
        {#each new Array(5) as _, i (i)}
            {#if dialogs && dialogs.includes(i)}
            <img class="save" style="top: {i*20}px; left: {i*20}px" alt="vintage save dialog" src={saveDialog}
                 aria-hidden="true" on:click={() => popDialog(i)}/>
            {/if}
        {/each}
    </div>

    <header>
        <div style="display: flex"><h1 style="margin-right: 10px"><i>Hallo</i>,</h1>
            <div class="this">
                <img alt="pointing hand" aria-hidden="true" src={pointer} class="pointer">
                <h1>this</h1></div>
        </div>
        <h1>is Marius.</h1>
        <p class="caption">I'm an 18 year old Junior Web Developer and Cyber Security Student who works with React,
            NodeJS and Python.</p>

    </header>
    <img id="arrowDown" src={arrowDown} alt="arrow down" aria-hidden="true"/>

    <div class="section" style="margin-top: 300px">
        <h2>About</h2>
        <p>I'm a self-taught programmer taking interest primarily in full stack web development, but also low-level
            engineering. At uni, I'm studying Cyber Security as a freshman right now. In my spare time, I have
            accumulated more than a year of professional experience as a part-time fullstack developer at <a
                    href="https://lern-fair.de">Lern-Fair</a>.</p>
    </div>
    <div class="section">
        <h2>Projects</h2>
        <p style="text-align: center">This is just a selection of my coolest projects. For the full list, make sure to
            check out my GitHub profile!</p>
    </div>
    <div class="section">
        <h2>Socials</h2>
        <a class="social" href="https://github.com/realmayus">GitHub</a>
        <a class="social" href="https://www.linkedin.com/in/marius-schuh-335512200/">LinkedIn</a>
        <a class="social" href="mailto:TBD">Email</a>
    </div>

    <div class="section">
        <p>(This website is under construction.)</p>
    </div>
</main>


<style lang="scss">
  main {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  main * {
    pointer-events: all;
  }

  .pointer {
    //filter: invert(1);
    width: 400px;
    z-index: -1;
    position: absolute;
    top: -287px;
    left: -157px;

    opacity: 0.7;
    transform: rotate(90deg) scale(1);

    @media (max-width: 800px) {
      display: none;
    }
  }

  .linesvg {
    position: absolute;
    @media (max-width: 450px) {
      width: 1000px !important;
    }
  }

  .linesWrapper {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .linesMask {
    position: relative;
    height: calc(100vh);
    width: 120vw;
    overflow: hidden;
    right: 100px;
  }

  .download {
    position: absolute;
    z-index: -1;
    top: 20px;
    left: 20px;
    width: 250px;
    transform: rotate(-1deg) translate(calc(50vw), calc(35vh));
    opacity: 0.4;
    @media (max-width: 450px) {
      transform: rotate(-1deg) translate(0, calc(35vh));
    }
  }


  .saveWrapper {
    top: 100px;
    left: 50px;
    position: absolute;
    opacity: 0.4;

  }

  .save {
    position: absolute;
    width: 300px;
    transform: rotate(0deg);
    @media (max-width: 800px) {
      width: 150px;
    }
  }


  .this {
    position: relative;
  }

  h1 {
    font-size: 84px;
    margin: 0;
    text-align: center;

    i {
      font-size: 84px;
    }

    // make background green if screen width is less than 450px
    @media (max-width: 450px) {
      font-size: 64px;
      i {
        font-size: 64px;
      }
    }
  }


  .caption {
    max-width: 800px;
    text-align: center;
    font-family: "Corben", serif;
    font-size: 27px;
    margin: 40px 0;
    padding: 0 40px;

    @media (max-width: 450px) {
      font-size: 20px;
    }
  }

  .section {
    max-width: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 100px 0;
    padding: 0 20px;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: calc(25vh - 200px);
    padding: 200px 0;
    background-image: url("assets/lines.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 450px) {
      background-position-x: 50%;
    }
  }

  .social {
    margin: 10px 0;
  }

  #arrowDown {
    margin-top: -100px;
    width: 20px;
    filter: invert(1);
    animation: pulsate 3s ease-in-out;
    animation-iteration-count: infinite;

    &:before {
      content: url("assets/arrow-down-solid.svg");
      //animation: pulsatePseudo 3s ease-in-out;
      //animation-iteration-count: infinite;

    }
  }

  @keyframes pulsate {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-5px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(0px);
    }

  }

</style>
