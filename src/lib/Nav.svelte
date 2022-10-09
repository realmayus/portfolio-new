<script>

</script>

<nav>
    <ul>
        <li>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            <a href="#Contact">Contact</a>
        </li>
    </ul>
</nav>

<style lang="scss">
    nav {
        width: calc(100% - 120px);
        display: flex;
        padding: 20px 60px;

        @media (max-width: 1300px) {
            display: none;
        }
    }
    ul {
        list-style: none;
        display: flex;
        margin-left: auto;
        margin-right: 0;
    }
    a {
        margin: 10px 20px;
    }
</style>