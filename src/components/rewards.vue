<template>
  <div>
    <barc />
  </div>
</template>
<script>
import barc from "./bar.js";
import { bar } from "vue-chartjs";
export default {
  name: "rewards",
  components: {
    barc
  }
};
</script>