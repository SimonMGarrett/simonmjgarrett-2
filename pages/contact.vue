<template>
  <div class="tramlined">
    <div class="wrapper">
      <div class="map-destretcher">
        <div id="map-wrap" style="height: 55vh">
          <no-ssr>
            <l-map :zoom="8" :center="[52.4464418, -3.6277591]">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <!-- <l-marker :lat-lng="[52.4464418, -3.6277591]"></l-marker> -->
            </l-map>
          </no-ssr>
        </div>
      </div>
      <div class="text">
        <h1 class="no-top">Contact</h1>
        <p>
          I live somewhere on this map. I also work pretty much anywhere on
          here, so if that's you then you can hire me. Hooray!
        </p>

        <p class="font-bold">:: Email: simonmjgarrett (at) gmail (dot) com</p>

        <p>Email me, using the address above, or use this form:</p>

        <form action="https://submit-form.com/8SECtpIy">
          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text">Name (optional)</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              class="input input-bordered"
            />
          </div>

          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text"
                >Email (needed if I'm to reply to you)</span
              >
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              class="input input-bordered"
            />
          </div>

          <div class="form-control mb-4">
            <label class="label">
              <span class="label-text"
                >Message (needed if you have a message)</span
              >
            </label>
            <textarea
              class="textarea h-24 textarea-bordered"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>

          <div
            class="h-captcha mb-4"
            data-sitekey="ba75cb3c-8608-42c8-a832-d32d94f130d5"
          />

          <button class="btn" type="submit">Send</button>
        </form>

        <p class="text-xs italic">
          No data is kept after the initial contact is complete.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
input,
textarea {
  border-radius: 0;
}
.wrapper {
  display: flex;

  & .map-destretcher {
    flex: 0 0 375px;
    margin-right: 8rem;
    max-height: 100%;
  }
}

@media (max-width: 1000px) {
  .wrapper {
    display: flex;

    & .map-destretcher {
      flex: 0 0 250px;
      margin-right: 2rem;
    }
  }
}

@media (max-width: 640px) {
  .wrapper {
    display: block;

    & .map-destretcher {
      width: 50%;
      margin-right: 2rem;
      margin-bottom: 4rem;
    }
  }
}
</style>
