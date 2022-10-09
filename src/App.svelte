<script>

    import Nav from "./lib/Nav.svelte";
    import pointer from "./assets/pointing_hand_2.png";
    import downloadDialog from "./assets/download_dialog.svg";
    import saveDialog from "./assets/save_dialog.svg";
    import ProjectCard from "./lib/ProjectCard.svelte";


    /*anime({
        targets: ".linesMask .linesvg path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 1500,
        delay: function (el, i) {
            return i * 250
        },
        direction: "alternate",
        loop: true
    }).play()*/

</script>

<main>
    <Nav/>
    <img class="download" alt="vintage download dialog" src={downloadDialog} aria-hidden="true"/>
    <div class="saveWrapper">
        {#each new Array(5) as _, i}
            <img class="save" style="top: {i*20}px; left: {i*20}px" alt="vintage save dialog" src={saveDialog}
                 aria-hidden="true"/>
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

    <div class="linesWrapper">
        <div class="linesMask">
            {#each new Array(20) as _, i}
                <svg style="z-index: -{i};left: calc(100vw - {i * (window.innerWidth < 450 ? 50 : 100)}px); top: calc({i* (window.innerWidth < 450 ? 5 : 10)}px + 100px)"
                     class="linesvg" width="100%" height="100%" viewBox="0 0 1789 830" version="1.1"
                     xmlns="http://www.w3.org/2000/svg"
                     xml:space="preserve"
                ><path d="M0.5,829.253c113.174,-264.195 341.141,-739.213 670.815,-394.579c250.519,261.887 324.584,-44.795 479.676,-310.66c94.169,-161.429 551.016,-166.282 637.303,-4.763" style="fill:none;stroke:url(#_Linear1);stroke-width:1px;"/>
                    <defs><linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(572.985,0,0,225.599,98.33,528.122)"><stop offset="0" style="stop-color:#ff00f9;stop-opacity:1"/><stop
                            offset="0.63" style="stop-color:#f300f5;stop-opacity:1"/><stop offset="0.81"
                                                                                           style="stop-color:#d000e9;stop-opacity:1"/><stop
                            offset="0.95" style="stop-color:#a400db;stop-opacity:1"/><stop offset="1"
                                                                                           style="stop-color:#5500c1;stop-opacity:1"/></linearGradient></defs></svg>
            {/each}
        </div>
    </div>


    <div class="section">
        <h2>About</h2>
        <p>I'm a self-taught programmer taking interest primarily in full stack web development, but also low-level
            engineering. At uni, I'm studying Cyber Security as a freshman right now. In my spare time, I have
            accumulated more than a year of professional experience as a part-time fullstack developer at <a
                    href="https://lern-fair.de">Lern-Fair</a>.</p>
    </div>
    <div class="section">
        <h2>Projects</h2>
        <ProjectCard title="outspeak">outspeak is a language learning website in a peer-review manner like wikipedia. Users can upload pronunciations in their native language to help others learn it, and there are enhanced moderation and review features.</ProjectCard>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
    </div>
    <div class="section">
        <h2>Socials</h2>
        <a class="social" href="https://github.com/realmayus">GitHub</a>
        <a class="social" href="https://www.linkedin.com/in/marius-schuh-335512200/">LinkedIn</a>
        <a class="social" href="mailto:TODO">Email</a>
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
    height: 100%
  }

  .linesMask {
    position: relative;
    height: calc(100vh);
    width: 100vw;
    overflow: hidden
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
    z-index: -1;
    position: absolute;
    opacity: 0.4;

  }

  .save {
    position: absolute;
    z-index: -1;
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
    margin-top: 25vh;
  }

  .social {
    margin: 10px 0;
  }
</style>
