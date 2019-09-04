<template>
  <div id="app" class="tc-container">
    <div class="tc-header">
      <header>
        <router-view name="header" />
      </header>
    </div>
    <div class="tc-container-main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  .tc-container{
    height: 100%;
    width: 100%;
    background:linear-gradient(269deg,rgba(112,157,235,0.04) 0%,rgba(0,0,0,0.61) 100%);
    background-image: url('./assets/img/bg.jpg');
    background-repeat:  no-repeat;
    background-size: 100% 100%;
    // &-main{
      // height: 100%;
    // }
  }
</style>
