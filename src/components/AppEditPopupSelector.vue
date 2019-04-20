<template>
  <div class="form-group row">
    <label for="selector.id" class="col-4 col-form-label">{{ selector.text }}</label>
    <div class="col-8 d-flex justify-content-start">
      <input
        v-if="selector.id == 'unitPrice'"
        id="selector.id"
        type="text"
        class="form-control app-selector-input"
        :value="computedInputValue"
        @focus="onFocus"
        @focusout="onFocusOut($event.target.value)"
        @keypress.enter.prevent
      >
      <input
        v-else
        id="selector.id"
        type="text"
        class="form-control app-selector-input"
        :value="computedInputValue"
        @focus="onFocus"
        @focusout="onFocusOut($event.target.value)"
        @keypress.enter.prevent
      >
      <div class="app-btns-selector-container">
        <button
          class="btn btn-light app-selector-btn app-selector-btn-up"
          @click.stop.prevent="incrementValue"
        >
          <img src="../assets/caret-up-solid.svg" alt="carret up">
        </button>
        <button
          class="btn btn-light app-selector-btn app-selector-btn-down"
          @click.stop.prevent="decrementValue"
          :class="{ disabled }"
        >
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
  data: function() {
    return {
      inputValue: "",
      isOnFocus: false
    };
  },
  methods: {
    toCurrencyFormat(value) {
      if (typeof value !== "number") {
        return value;
      }
      var formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      return formatter.format(value);
    },
    onFocus() {
      this.isOnFocus = true;
    },
    onFocusOut(value) {
      this.isOnFocus = false;
      var regexp = /^[0-9]*[.]?[0-9]+$/,
        regexp2 = /^\d+$/;
      if (!regexp.test(value)) return;
      if (this.selector.id == "unitsInStock" && !regexp2.test(value)) return;
      this.inputValue = +value;
      this.$emit("selector-input", {
        field: this.selector.id,
        value: this.inputValue
      });
    },
    incrementValue() {
      this.inputValue = ++this.inputValue;
      this.$emit("selector-input", {
        field: this.selector.id,
        value: this.inputValue
      });
    },
    decrementValue() {
      if (this.inputValue <= 0) return;
      this.inputValue = --this.inputValue;
      this.$emit("selector-input", {
        field: this.selector.id,
        value: this.inputValue
      });
    }
  },
  mounted: function() {
    this.inputValue = this.selector.value;
  },
  computed: {
    computedInputValue: function() {
      if (this.isOnFocus) return this.inputValue;
      else if (this.selector.id == "unitsInStock") return this.inputValue;
      else return this.toCurrencyFormat(this.inputValue);
    },
    disabled: function() {
      if (this.inputValue <= 0) return true;
      else return false;
    }
  }
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
  user-select: none;
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
