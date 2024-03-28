<template>
  <div>
    <pre>{{ type }}</pre>
  </div>
</template>
<script>
export default{
  props: {
    type: {
      required: true
    },
  }
}
</script>