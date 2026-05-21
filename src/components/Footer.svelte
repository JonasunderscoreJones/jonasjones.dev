<div class="footer">
  <p id="footer-inner">Website by Jonas_Jones 2021 - 20##</p>
</div>

<script>
  //import main css file
  import "../routes/+page.css";
  document.getElementById("footer-inner").innerHTML = "Website by Jonas_Jones 2021 - " + new Date().getFullYear();
</script>

<style>
  .footer {
    height: 1rem;
    background-color: var(--footer-background-color);
    color: var(--footer-font-color);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0px;
    left: 0px;
    right: 0px;
    padding-top: 0.25rem;
    padding-bottom: 0.5rem;
    font-size: 20px;
  }
</style>
