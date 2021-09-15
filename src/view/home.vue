<template>
  <div class="container">
    <Header></Header>
    <div class="panel1">
      <div class="btns">
        <a class="btn" target="_black"><img src="../assets/b.png"></a>
        <a class="btn" target="_black"><img src="../assets/c.png"></a>
      </div>
      <router-link to="/" class="play">
        <img src="../assets/a.png">
      </router-link>
    </div>
    <div class="panel2">
      <img src="../assets/img_05.png">
    </div>
    <div class="panel3">
      <img src="../assets/img_05.png">
    </div>
    <div class="panel4">
      <img src="../assets/img_07.png">
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
export default {
  name: 'Home',
  components:{Header,Footer},
  computed: {
    language() {
      return this.$i18n.locale
    },
    _isMobile() {
      let flag = false;
      if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        flag = true // 手机端
      } else {
        flag = false // alert('PC端')
      }
      return flag;
    }
  },
  data() {
    return {
      drawer:false,
      lang:false
    }
  },
  watch: {
      '$i18n.locale'(newValue) {
          if (this.$i18n.locale === 'en') {
              this.lang = false
          } else if (this.$i18n.locale === 'ch') {
              this.lang = true
          }
      }
  },
  methods: {
    handleSetLanguage() {
      // 选择语言
      let lang = this.$i18n.locale
      if(lang=='ch'){
        this.$i18n.locale = 'en'
      }else{
        this.$i18n.locale = 'ch'
      }
      window.localStorage.setItem('lang', this.$i18n.locale)
      this.drawer = false
      this.scrollto = 0
    },
  }
}
</script>
<style lang="less">
.container{
  width: 100%;
  min-height:100vh;
  background:#000;
  font-family: DFPYaSongW9;
  .panel1{
    background:url(../assets/img_01.png) no-repeat center;
    background-size:100% 100%;
    height: 937px;
    display: flex;
    justify-content: center;
    .btns{
      margin-top:30%;
      margin-right:10px;
      .btn{
        display:block;
        margin-bottom:10px;
        cursor: pointer;
        img{
          width:350px;
        }
      }
    }
    .play{
      margin-top:30%;
      img{
        width:388px;
      }
    }
  }
  .panel2{
    height:1244px;
    background:url(../assets/img_02.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
      width:1200px;
      margin-top:86px;
    }
  }
  .panel3{
    height:1667px;
    background:url(../assets/img_03.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
      
    }
  }
  .panel4{
    height:1282px;
    background:url(../assets/img_04.png) no-repeat center;
    background-size:100% 100%;
    text-align:center;
    img{
      width:1200px;
      margin-top:86px;
    }
  }
}
</style>
<style >
  .el-drawer,.drawer_body {
      width: 60% !important;
      height: 100% !important;
      background: url(/src/assets/itembg.png) center center / 100% 100% no-repeat;
      outline: 0;
  }
  /*.el-drawer__wrapper {*/
  /*    z-index: 2001;*/
  /*}*/
  </style>