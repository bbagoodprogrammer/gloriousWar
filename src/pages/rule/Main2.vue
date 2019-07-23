<template>
  <div id="app">
    <div class="mainTabs">
      <a @click.prevent="changshow('ActivityRewards')" :class="{active:showRule == 'ActivityRewards'}" class="jiangli">活动奖励</a>
      <a @click.prevent="changshow('ActivityRule')" :class="{active2:showRule == 'ActivityRule'}" class="guize">活动规则</a>
    </div>
    <component :is="showRule"></component>
  </div>
</template>

<script>
import ActivityRewards from "./ActivityRewards"
import ActivityRule from "./ActivityRule"
export default {
  name: 'App',
  data(){
    return{
      showRule:"ActivityRewards"
    }
  },
  methods:{
    changshow(data){
      this.showRule = data
    }
  },
  components:{
    ActivityRewards,
    ActivityRule
  }
}
</script>

<style lang="scss">
  body {
    background:#34005C
  }
  .mainTabs{
        width: 7.02rem;
        height: .87rem;
        margin:.5rem auto 0;
        background: url(../../assets/img/bangBg.png);
        background-size: 100% 100%;
        position: relative;
        padding: 0 .01rem 0 0.02rem;
        a{
            display: inline-block;
            text-indent: -888rem;
            
        }
        .jiangli{
            width: 49%;
            height: 0.83rem;
            background: url(../../assets/img/活動獎勵2.png);
            background-size: 100% 100%;
            margin: .025rem 0 0 .02rem;
        }
        .guize{
            width: 49%;
            height: 0.83rem;
            background: url(../../assets/img/評審榜.png);
            background-size: 100% 100%;
            margin-top: .025rem;
        }
        .active{
            background: url(../../assets/img/活動獎勵.png);
            background-size: 100% 100%;
        }
        .active2{
            background: url(../../assets/img/評審榜2.png);
            background-size: 100% 100%;
        }
        
    }
  @import "../../assets/sass/common.scss";
</style>
