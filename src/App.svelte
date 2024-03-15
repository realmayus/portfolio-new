<script>

    import Nav from "./lib/Nav.svelte";
    import pointer from "./assets/pointing_hand_2.png";
    import downloadDialog from "./assets/download_dialog.svg";
    import saveDialog from "./assets/save_dialog.svg";
    import arrowDown from "./assets/arrow-down-solid.svg";
    import Slider from "./lib/Slider.svelte";
    import Scribble from "./lib/Scribble.svelte";
    import {fade} from "svelte/transition";
    import protocolCyber from "./assets/protocol-cyber.svg";
    import {getRandomInt} from "./lib/utils.ts";
    import {onDestroy, onMount} from "svelte";
    import SocialCard from "./lib/SocialCard.svelte";
    import githubIcon from "./assets/github.svg";
    import linkedinIcon from "./assets/linkedin.svg";
    import emailIcon from "./assets/at-solid.svg";
    import earthImage from "./assets/earth-americas-solid.svg";
    import ProjectCard from "./lib/ProjectCard.svelte";
    import {handleAnchorClick} from "./lib/utils.ts";

    let dialogs = [0, 1, 2, 3, 4];
    const popDialog = (id) => {
        dialogs = dialogs.filter((dialog) => dialog !== id);
    }

    let mouseX = 0, mouseY = 0, scrollY = 0;

    let hash = location.hash;
    let date = new Date()
    let versionString = "1." + date.getMonth().toString(8) + "." + date.getDate().toString(5);
    let header;

    //some dumb sci-fi-y strings
    let processStrings = ["Analyzing system cache", "Intercepting network traffic", "Searching for vulnerabilities", "Shaving yaks", "Shutting down system firewalls", "Establishing secure SSH shell"];
    let processIndex = getRandomInt(0, processStrings.length);
    let processPercentage = 1;
    let i = 1;

    let interval;

    onMount(() =>
        interval = setInterval(() => {
            if (processPercentage < 100) {
                processPercentage += Math.abs(Math.sin(((i % 100) * 2 * Math.PI) / 100))
                processPercentage = Math.min(100, processPercentage)
                i += 1;
            } else {
                processPercentage = 1;
                i = 1;
                processIndex = getRandomInt(0, processStrings.length);
            }
        }, 100))

    onDestroy(() => clearInterval(interval));

    const birthday = new Date(2004, 4, 10);
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear()
    const nextBirthday = new Date(currentYear, 4, 10);

    const birthdayDiffMs = currentDate.getTime() - birthday.getTime();
    const birthdayDiffYears = Math.floor(birthdayDiffMs / 31536000000);  // number of ms in a year
    const nextBirthdayDiffMs = nextBirthday.getTime() - currentDate.getTime();
    const nextBirthdayDiffDays = Math.ceil(nextBirthdayDiffMs / (1000 * 60 * 60 * 24));  // number of ms in a day


</script>

<svelte:window
        on:hashchange={(_) => hash = location.hash}
        on:mousemove={e => {mouseX = e.clientX;
        mouseY = e.clientY;}}
        bind:scrollY={scrollY}
/>  <!-- need to update hash so we can use it in #if -->

<main>
    <Nav/>
    <img class="download" alt="vintage download dialog" src={downloadDialog} aria-hidden="true"/>
    <div class="saveWrapper">
        {#each dialogs as d}
                <img class="save" style="top: {d*20}px; left: {d*20}px" alt="vintage save dialog" src={saveDialog}
                     aria-hidden="true" on:click={() => popDialog(d)}/>
        {/each}
    </div>

    <header bind:this={header} style="pointer-events: none">
        <div style="display: flex"><h1 style="margin-right: 10px"><i>Hallo</i>,</h1>
            <div class="this">
                <img alt="pointing hand" aria-hidden="true" src={pointer} class="pointer">
                <h1>this</h1></div>
        </div>
        <h1>is Marius.</h1>
        <p class="caption">I'm a <span title="Only {nextBirthdayDiffDays} more sleep{nextBirthdayDiffMs === 1 ? '' : 's'}">{birthdayDiffYears} year old</span> Junior Web Developer and Cyber Security Student who works with React,
            NodeJS and Python.</p>

    </header>
    <button class="arrowDownBtn" on:click={() => handleAnchorClick(null, "about")}><img id="arrowDown" src={arrowDown} alt="arrow down" aria-hidden="true"/></button>
    {#if header ? scrollY > header.getBoundingClientRect().height : false}
        <div aria-hidden="true" class="cyberui" transition:fade={{duration: 200}} style="width: 40vw; margin-left: 30vw; position: fixed; top: 20px">
            <Slider percent={(mouseX/window.innerWidth)*100} value={mouseX}/>
        </div>

        <div aria-hidden="true" class="cyberui" transition:fade={{duration: 200}} style="transform: translate(-50%) rotate(-90deg); width: 500px; position: fixed; top: 300px; left: 25px;">
          <Slider percent={100 - (mouseY/window.innerHeight)*100} value={mouseY}/>
        </div>
    {/if}
    {#if header ? scrollY > header.getBoundingClientRect().height - window.innerHeight + 250 : false}
    <div aria-hidden="true" class="cyberui" transition:fade={{duration: 200}} style="bottom: 10px; right: 20px; position: fixed;">
            <code>v.{versionString}</code>
        </div>
        <div aria-hidden="true" class="cyberui" transition:fade={{duration: 200}} style="display:flex; align-items:baseline; gap: 60px; bottom: 0; left: 10px; position: fixed">
            <img src={protocolCyber} style="width: 100px; opacity: 0.4; margin-bottom: 10px"/>
            <div style="position: relative; height: 40px">
                <div style="position: absolute; width: 110%; height:100%; border-top: 1px solid #2c2c2c; border-right: 2px solid #2c2c2c; transform: skew(40deg)"></div>
                <code style="font-size: 12px">{processStrings[processIndex]}... ({processPercentage.toFixed(2)}%)</code>
            </div>
        </div>
    {/if}
    <div class="content">

        <div class="section" style="margin-top: 150px">
            <Scribble title="About" id="about" hash={hash}/>
            <p>I'm a self-taught programmer taking interest primarily in full stack web development, but also low-level
                engineering. At university, I'm studying Cyber Security as a freshman right now. In my spare time, I have
                accumulated more than two years of experience as a part-time fullstack developer.
        </div>
        <div class="section">
            <Scribble title="Projects" id="projects" hash={hash}/>
            <p style="text-align: center">Most of my noteworthy projects revolve around language learning. For the full list, make sure to check out my <a href="https://github.com/realmayus">GitHub profile</a>!</p>
            <div style="display: flex; flex-direction: column; gap: 20px">
                <ProjectCard title="outspeak" img={earthImage} url="https://github.com/realmayus/outspeak" description="outspeak is a community website where users can share pronunciations of words in their own native language, to help others learn that language. It has extensive moderation features and a user-facing API."/>
                <ProjectCard title="anki-forvo-dl" img={earthImage} url="https://github.com/realmayus/anki_forvo_dl" description="An add-on for the flashcards software Anki which allows you to fully automate the process of adding pronunciations to your language learning flashcards."/>
                <ProjectCard title="Furi-sama" img={earthImage} url="https://github.com/realmayus/furi-sama" description="A Discord bot that uses wkhtmltoimg for adding furigana (a reading aid for japanese texts) to arbitrary Discord messages."/>
            </div>
        </div>
        <div class="section">
            <Scribble title="Socials" id="socials" hash={hash}/>
            <div style="display: flex; gap: 20px">
                <SocialCard name="GitHub" url="https://github.com/realmayus" icon={githubIcon}/>
                <SocialCard name="LinkedIn" url="https://linkedin.com/in/realmayus" icon={linkedinIcon}/>
                <SocialCard name="E-Mail" url="mailto:{window.atob('aGlAcmVhbG1heXVzLnh5eg==')}" icon={emailIcon}/>
            </div>
        </div>

        <div class="section">
            <p>(This website is under construction.)</p>
        </div>
        <div class="gridwrapper">
            <div class="grid"></div>
        </div>
    </div>
    <footer style="opacity: 0.3; padding: 20px; transform: scale(0.7)">
        <a href={"/privacy.html"}>Privacy</a>
    </footer>
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

  .cyberui {
    @media (max-width: 1200px) {
      display: none;
    }
  }
  .cyberui * {
    @media (max-width: 1200px) {
        display: none;
    }
  }

  .cyberui * {
    color: #2c2c2c;
  }
  *:not(.cyberui) {
    z-index: 1;
  }
  .content {
    position: relative;
    width: 100vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }
  .gridwrapper {
    height: 1000px;
    width: 100%;
    bottom: 200px;
    position: absolute;
    transform: perspective(300px) rotateX(50deg) translateZ(-600px) scaleX(2);
    mask-image: linear-gradient(rgba(255,255,255,0) 0%,rgba(255,255,255,0) 50%,rgb(255,255,255) 90%,rgba(255,255,255,0) 100%);
    z-index: 0;
    overflow: hidden;
  }
  .grid {
    background-image: linear-gradient(0deg,transparent 24.999%,#777 25%,#777 26.999%,transparent 27%,transparent 74.999%,#777 75%,#777 76.999%,transparent 77%,transparent),linear-gradient(90deg,transparent 24.999%,#777 25%,#777 26.999%,transparent 27%,transparent 74.999%,#777 75%,#777 76.999%,transparent 77%,transparent);
    height: 110%;
    position: relative;
    background-size: 35px 35px;
    animation: gridani 2s infinite linear;
  }

  .pointer {
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
    transform: translate(calc(50vw), calc(35vh));
    opacity: 0.3;
    @media (max-width: 450px) {
      transform: translate(0, calc(35vh));
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

  .caption, .caption > span {
    font-family: "Corben", serif;
    font-size: 27px;
    @media (max-width: 450px) {
      font-size: 20px;
    }
  }
  .caption {
    max-width: 800px;
    text-align: center;
    margin: 40px 0;
    padding: 0 40px;


  }

  .section {
    max-width: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: min(5vh, 100px) 0;
    padding: 0 40px;
    gap: 10px;
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
  .arrowDownBtn {
    margin-top: -100px;
    background-color: transparent;
    border: none;
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  #arrowDown {
    width: 20px;
    animation: pulsate 3s ease-in-out;
    animation-iteration-count: infinite;

    &:before {
      content: url("assets/arrow-down-solid.svg");
    }
  }

  @keyframes pulsate {
    0% {
      transform: translateY(0px);
    }
    25% {
      transform: translateY(-10px);
    }
    50% {
      transform: translateY(0px);
    }
    75% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }

  }

  @keyframes gridani {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(-35px);
    }
  }

</style>
