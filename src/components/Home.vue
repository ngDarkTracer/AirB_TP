<script>
</script>

<template>
  <nav class="nav">
    <Button @click="$router.push('new')" label="New item" icon="pi pi-plus-circle" iconPos="left" class="p-button-success"/>
    <Button @click="$router.push('list')" label="List" icon="pi pi-list" iconPos="left" class="p-button-primary"/>
    <Button @click="$router.push('single_import')" label="Import single" icon="pi pi-upload" iconPos="left" class="p-button-secondary"/>
    <Button @click="$router.push('batch_import')" label="Import batch" icon="pi pi-upload" iconPos="left" class="p-button-danger"/>
  </nav>
</template>

<style scoped>
  .nav{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 50%;
    margin: 0 auto;
    margin-top: 15%
  }

  .nav button {
    margin: 10px;
  }
</style>
