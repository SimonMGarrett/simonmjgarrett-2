<template>
  <div class="header-wrapper shadow-md">
    <header class="tramlined">
      <div class="social-and-search py-2">
        <div class="social">F In YouTube</div>
        <div class="form-control search">
          <input type="text" placeholder="Search" class="input input-bordered py-2 h-8 rounded-none">
        </div>
      </div>

      <div class="logo">DR. SIMON MJ GARRETT.</div>
      <div class="strapline">Developer. Writer. Ex-academic. Partner. Dad.</div>

      <hr>

      <nav class="navbar">
        <div class="hidden px-2 mx-2 navbar-center lg:flex">
          <div class="flex items-stretch">
            <a class="btn btn-ghost btn-sm rounded-btn">
                    Home
                  </a> 
            <a class="btn btn-ghost btn-sm rounded-btn">
                    Portfolio
                  </a> 
            <a class="btn btn-ghost btn-sm rounded-btn">
                    About
                  </a> 
            <a class="btn btn-ghost btn-sm rounded-btn">
                    Contact
                  </a>
          </div>
        </div> 
      </nav>
    </header>
  </div>
</template>

<style scoped>
.header-wrapper {
  background-color: #fff;
  position: fixed;
  z-index: 2;
  width: 100%;

  & header {
    text-align: center;

    & .social-and-search {
      display: flex;
      justify-content: space-between;
    }

    & nav.navbar {
      justify-content: center;
    }
  }
}

/* .typed {
  background: rgb(9, 9, 121);
  background: linear-gradient(
    163deg,
    rgba(9, 9, 21, 0.4) 0%,
    rgba(221, 220, 220, 0.6) 50%,
    rgba(55, 65, 81, 0.1) 100%
  );
  border-radius: 3px;
  text-align: center;
  padding: 0 0.25rem;
} */
</style>
