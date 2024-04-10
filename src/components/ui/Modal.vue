<template>
  <div
    class="modal fade"
    :id="id"
    tabindex="-1"
    :data-bs-backdrop="backDrop"
    :data-bs-keyboard="esc"
    aria-labelledby=""
    aria-hidden="true"
  >
    <div :class="['modal-dialog', size]">
      <div class="modal-content">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ title }}</h5>
          <button
            v-if="showCloseIcon"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot name="body" />
        </div>
        
        <!-- Footer -->
        <div class="modal-footer" v-if="showFooter">
          <slot name="footer"></slot>
          
          <button
            v-if="isSaveButtonShow"
            type="button"
            class="btn btn-primary"
            :class="saveDisableProp === true ? 'disabled' : ''"
          >
            <slot name="confirm-button"></slot>
          </button>

          <button
            v-if="showCloseButton"
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            <slot name="cancel-button"></slot>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    id: {
      type: String,
      default: ""
    },
    showModal: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: "",
    },
    showFooter: {
      type: Boolean,
      default: true
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    showCloseIcon: {
      type: Boolean,
      default: true
    },
    backDrop: {
      type: [Boolean, String],
      default: true // 'static for a backdrop which doesn't close the modal on click.
    },
    esc: {
      type: Boolean,
      default: false
    },
    isSaveButtonShow: {
      type: Boolean,
      default: true
    },
    saveDisableProp: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "<<Title goes here>>",
    },
  },
  data() {
    return {};
  },
  mounted() {
    if(this.id && this.showModal) {
      var modal = new bootstrap.Modal(document.getElementById(this.id)); 
      modal.show();

      var myModalEl = document.getElementById(this.id)
      myModalEl.addEventListener('hidden.bs.modal', ((event) => {
        this.$emit("closeModal");
      }))
    }
  }
};
</script>