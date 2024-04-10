<template>
    <div class="dropdown">
  <button :class="['btn dropdown-toggle', btnVariantClass]" type="button" 
    id="dropdownMenu2"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    {{ menuName }}
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <slot name="ddlList" />
  </ul>
</div>
</template>
<script>
export default {
    name: "CDropdown",
    props:{
      menuName:{
        type: String,
        default: ""
      },
      btnVariantClass:{
        type: String,
        default: "btn-primary"
      }
    }
}
</script>