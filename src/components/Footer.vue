<script>
export default {
  name: 'Footer'
}
</script>


<template>
  <footer>
    <div class="container" style="width: 70%">
      <section class="icons mb-3">
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
      </section>

      <div class="menu-bottom d-flex justify-content-between" style="color:#707374">
        <section>
          <ul>
            <li>Autodestrizione</li>
            <li>Rapporti con gli investitori</li>
            <li>Note legali</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>Centro assistenza</li>
            <li>Opportuunità di lavoro</li>
            <li>Preferenze per i cookie</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>Carte regalo</li>
            <li>Condizioni di utilizzo</li>
            <li>Informazioni sull'azienda</li>
          </ul>
        </section>
        <section>
          <ul>
            <li>Media center</li>
            <li>Privacy</li>
            <li>Contattaci</li>
          </ul>
        </section>
      </div>

      <span class="copyright" style="color:#707374">
        © 1997-2023 Netflix, Inc.
      </span>

    </div>
  </footer>
</template>


<style lang="scss" scoped>
@use '../scss/general/vars.scss';

footer {
  padding-top: 50px;
  padding-bottom: 20px;


  section ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    font-size: 14px;
    margin-bottom: 10px;
    color: '$footerColor';

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .copyright {
    font-size: 12.5px;
    margin: 10px 0;
  }
}

.icons {
  color: white;
  font-size: 25px;
  cursor: pointer;

  i {
    margin-right: 20px;
    margin: 10px;
  }
}
</style>