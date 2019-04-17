<template>
  <div class="form-group row">
    <label for="$props.selector.id" class="col-4 col-form-label">{{ $props.selector.text }}</label>
    <div class="col-8 d-flex justify-content-start">
      <input id="$props.selector.id" type="text" class="form-control app-selector-input" v-model="$props.value">
      <div class="app-btns-selector-container">
        <button class="btn btn-light app-selector-btn app-selector-btn-up">
          <img src="../assets/caret-up-solid.svg" alt="carret up">
        </button>
        <button class="btn btn-light app-selector-btn app-selector-btn-down">
          <img src="../assets/caret-up-solid.svg" alt="carret down">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppEditPopupSelector",
  props: ["selector", "value"],
  model: ['value'],
  methods: {}
};
</script>

<style scoped>
.app-btns-selector-container {
  position: relative;
  right: 0;
  width: 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app-selector-input {
  width: 90%;
  border-top-right-radius: unset;
  border-bottom-right-radius: unset;
  border-right: unset;
}

.app-selector-btn {
  position: relative;
  padding: 0;
  margin: 0;
  height: 50%;
  border: 1px solid #ced4da;
  border-radius: unset;
}
.app-selector-btn img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
}
.app-selector-btn-up {
  border-bottom: unset;
  border-top-right-radius: 0.25rem;
}
.app-selector-btn-down {
  border-top: unset;
  border-bottom-right-radius: 0.25rem;
}
.app-selector-btn-down img {
  transform: rotate(180deg);
}
</style>
