<template>
  <button @click="showModal">Show Modal</button>
  <Modal v-if="show" title="Model title goes here" :id="'showModal'" @closeModal="closeModal">
    <template #body>This should be in the body</template>
    <template #confirm-button>
      <span>Ok</span>
    </template>
    <template #cancel-button>
      <span>Cancel</span>
    </template>
  </Modal>  
</template>

<script>
import Modal from "./ui/Modal.vue";
export default {
  name: "Hello World",
  components: {
    Modal,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showModal() {
      this.show = true; //Remove this line if we open modal by custom event.

      //Enabled this line if we open modal by custom event.
      /*var modal = new bootstrap.Modal(document.getElementById(this.id)); 
      modal.show();*/
    },
    closeModal() {
      this.show = false;
    }
  },
};
</script>
