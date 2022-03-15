<script>
  import { STATE_KEYS } from './store/state';
  import { store } from './store';
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  import { MUTATIONS } from './store/mutations';
  import { ACTIONS } from './store/actions';

  export default {
    data() {
      return {
        seconds: 0,
        newName: '',
      }
    },
    computed: {
      count() {
        return store.state[STATE_KEYS.COUNT];
      },
      ...mapState({
        username: (state) => state[STATE_KEYS.USERNAME],
        showSpinner: 'showSpinner',
      }),
      ...mapGetters([
        'spinnerLabel',
      ])
    },
    methods: {
      ...mapMutations({
        increment: 'increment'
      }),
      ...mapActions({
        add: 'incrementClicked'
      }),
      setName() {
        store.commit(MUTATIONS.CHANGE_NAME, this.newName);
      },
      switchSpinner() {
        store.dispatch(ACTIONS.SWITCH_SPINNER_ASYNC, {seconds: this.seconds});
      }
    }
  }
</script>

<template>
  <div class="App">
    <div class="container pt-3 pb-3">
      <div class="row App_main">

        <div class="App_part col pr-1">
          <h2>Vuex Simple tests</h2>
          <div class="row pt-3">
            <div class="col">
              <h3>Use Mutation:</h3>
              <button
                      type="button"
                      class="btn btn-primary"
                      v-on:click="increment()"
              >
                Count: <span class="badge bg-secondary">{{count}}</span>
              </button>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col">
              <h3>Use Mutation (with payload):</h3>
              <div class="mb-3">
                <label for="name" class="form-label">User name is: {{username}}</label>
                <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Enter name"
                        v-model="newName"
                >
              </div>
              <div class="align-items-center">
                <button
                        class="btn btn-primary"
                        type="button"
                        v-on:click="setName()"
                >Add</button>
              </div>
            </div>
          </div>

          <div class="row pt-3">
            <div class="col">
              <h3>Use Async Action:</h3>
              <div class="d-flex align-items-center">

                <button
                        class="btn btn-primary"
                        type="button"
                        v-on:click="switchSpinner()"
                >{{ spinnerLabel }} after:</button>
                <input
                        v-model="seconds"
                        width="100px"
                        type="number"
                        class="form-control spinner-input"
                        id="time"
                        placeholder="seconds"
                >
                <div v-if="showSpinner" class="spinner">
                  <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
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
