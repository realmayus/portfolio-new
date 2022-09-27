<script>

import Nav from "./lib/Nav.svelte";

let email = "hi";

email += "@";
email += "realmayus";
email += ".xyz";

</script>

<main>
    <Nav/>
    <header>
        <h1><i>Hallo</i>, this</h1>
        <h1>is Marius.</h1>
        <p class="caption">I'm an 18 year old Junior Web Developer who works with React, NodeJS and Svelte.</p>
    </header>
    <div class="section">
        <h2>Socials</h2>
        <a class="social" href="https://github.com/realmayus">→ GitHub</a>
        <a class="social" href="https://www.linkedin.com/in/marius-schuh-335512200/">→ LinkedIn</a>
        <a class="social" href="mailto:{email}">→ Email</a>
    </div>

    <div class="section">
        <p>(This website is under construction.)</p>
    </div>
</main>

<style>
    h1 {
        font-size: 92px;
        margin: 0;
        text-align: center;
    }



    .caption {
        max-width: 700px;
        text-align: center;
        font-family: "PT Serif", serif;
        font-size: 27px;
        margin: 40px 0;
    }

    .section {
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;

    }

    header {
        margin-top: 80px;
        width: 100%;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .social {
        margin: 10px 0;
    }
</style>
