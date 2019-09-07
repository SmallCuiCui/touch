<template>
  <div id="app" class="tc-container">
    <div class="tc-container-header">
      <router-view name="header" />
    </div>
    <div class="tc-container-main">
      <router-view />
    </div>
    <div class="tc-container-footer">
      <router-view name="footer"></router-view>
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
    background-image: url('./assets/img/bg1.png');
    background-repeat:  no-repeat;
    background-size: 100% 100%;
    position: relative;
    overflow: hidden;
    &-header, &-footer{
      position: absolute;
      left: 0;
      width: 100%;
      z-index: 100;
    }
    &-main{
      overflow: hidden;
      width: 100%;
      height: 100%;
    }
    &-header{
      top: 0;
    }
    &-footer{
      bottom: 0;
      height: 0.8rem;
    }
  }
</style>
