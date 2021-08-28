<template>
  <div class="tramlined">
    <div class="wrapper">
      <div class="image-destretcher">
        <img
          class="image"
          src="/images/simon-about.jpg"
          alt="Simon MJ Garrett"
        />
      </div>
      <div class="text">
        <h1 class="no-top">About Simon</h1>
        <p>
          Although baby photos suggest Simon started life looking a little like
          a potato who'd been fired into a wall at some speed, things have very
          much improved for him. In his 20s, he put himself though university,
          stayed on to get a PhD in Artificial Intelligence and Machine
          Learning, and became a world-class, published researcher.
        </p>

        <p>
          Quite by accident, Simon's digital skills became in demand, and he
          left academia to start his first business in 2010, using his love of
          shiny, new technical breakthroughs, to do mighty, useful things of
          value.
        </p>

        <p>
          He worked in London, New York, France, Singapore, Malaysia (where he
          secured a grant from from a meeting with the Minister of Science). His
          technical know-how and client skills grew year by year, and while it
          might be an exaggeration to say he's irreplaceable, he's certainly a
          highly valuable resource for you.
        </p>

        <p>
          Despite this tendency towards all things 'geek', he enjoys forging a
          clear path for BERTRAM+BEAN, and is also responsible for 'Virtual
          Doughnut Friday', which is very popular on the team.
        </p>

        <p>
          Simon is dad to two boys, now exploding into the teen years, and the
          partner of, quote, 'The most awesome woman on the planet'.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;

  & .image-destretcher {
    flex: 0 0 375px;
    margin-right: 8rem;
    max-height: 100%;
  }
}

@media (max-width: 1000px) {
  .wrapper {
    display: flex;

    & .image-destretcher {
      flex: 0 0 250px;
      margin-right: 2rem;
    }
  }
}

@media (max-width: 640px) {
  .wrapper {
    display: block;

    & .image-destretcher {
      width: 50%;
      margin-right: 2rem;
      margin-bottom: 4rem;
    }
  }
}
</style>
