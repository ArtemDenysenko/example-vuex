<script>

  export default {
    data() {
      return {
        message: 'Default',
        count: 0,
      }
    },
    computed: {

    },
    methods: {
      sendMessage() {
        console.log(this.message);
      }
    }
  }
</script>

<template>
  <div class="App">
    <div class="container pt-3 pb-3">
      <div class="row App_main">

        <div class="App_part col pr-1">
          <h2>Child Frame</h2>
          <div class="row pt-3">
            <div class="col">
              <h3>Count From Parent:</h3>
              Count: <span class="badge bg-secondary">{{count}}</span>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col">
              <h3>Send Message:</h3>
              <div class="d-flex align-items-center">

                <button
                        class="btn btn-primary"
                        type="button"
                        v-on:click="sendMessage()"
                >Send</button>
                <input
                        v-model="message"
                        width="100px"
                        type="text"
                        class="form-control spinner-input"
                        id="time"
                        placeholder="seconds"
                >
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  </div>

</template>


<style>
@import 'assets/base.css';

.App {
  position: absolute;
  height: 100%;
  width: 100%;
}

.container{
  height: 100%;
}

.App_main{
  height: 100%;
}

.App_part {
  padding: 10px;

  border: 1px solid grey;
  border-radius: 10px;
}

  .spinner{
    margin-left: auto;
  }

  .spinner-input{
    margin-left: 10px;
    width: 100px;
  }
</style>
