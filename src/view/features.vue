<template>
    <div class="container">
        <Header></Header>
        <div class="banner">
            <img src="../assets/farm1.png" width="100%">
            <a class="toPlay"><img src="../assets/Image 1.png"></a>
        </div>
        <div class="panel">
            <div class="dataPanel">
                <div class="dataItem">
                    <h2>NFTO earned</h2>
                    <h3>0.00</h3>
                    <p>≈ $0.00</p>
                </div>
                <div class="dataItem">
                    <h2>Your NFTO wallet balance</h2>
                    <h3>0.00</h3>
                    <p>≈ $0.00</p>
                </div>
            </div>
            <!--Pool1 started-->
            <div class="poolPanel pool1">
                <div class="thead">
                    <div class="th">Token Name</div>
                    <div class="th">APR</div>
                    <div class="th">Earned</div>
                </div>
                <div class="poolList">
                    <!--USDT START-->
                    <div class="poolItem">
                        <div class="poolTitle">
                            <div class="names">
                                <img src="../assets/farm5.png">
                                USDT
                            </div>
                            <div class="apr">456.88%</div>
                            <div class="earned">
                                <div>
                                    <p>323.88 yNFTO</p>
                                    <p>323.88 NFTO</p>
                                </div>
                                <i class="downico"></i>
                            </div>
                        </div>
                    </div>
                    <!--USDT END-->
                </div>
            </div>
            <!--Pool1 end-->
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
<style lang="less" scoped>
@font-face { // 正常
    font-family: DFPBuDingW12; 
    src:url('../assets/DFPBuDingW12.ttf');
}
    .container{
        font-family: DFPBuDingW12;
        .banner{
            position:relative;
            .toPlay{
                position:absolute;
                top:75%;
                left:50%;
                margin-left:-347px;
                width:693px;
                height:96px;
                cursor: pointer;
                img{
                    width:100%;
                }
            }
        }
        .panel{
            background:url(../assets/img_03.png) no-repeat center;
            background-size:cover;
            overflow:hidden;
            .dataPanel{
                background:url(../assets/farm3.png) no-repeat center;
                background-size:100% 100%;
                width:1200px;
                height:606px;
                display:flex;
                justify-content:center;
                margin:86px auto 0;
                .dataItem{
                    text-align:center;
                    padding-top:273px;
                    width:42%;
                    h2{
                        font-size:32px;
                        color:#FFE1B8;
                        line-height:33px;
                        font-family: DFPBuDingW12;
                    }
                    h3{
                        font-size:56px;
                        line-height:56px;
                        color:#fff;
                        padding-top:42px;
                        padding-bottom:25px;
                    }
                    p{
                        font-size:20px;
                        line-height:20px;
                        color:#fff;
                    }
                }
            }
            .poolPanel{
                margin:0 auto;
                &.pool1{
                    width:1479px;
                    height:1215px;
                    background:url(../assets/farm9.png) no-repeat center;
                    background-size:100% 100%;
                    padding:260px 170px 0;
                    box-sizing: border-box;
                }
                .thead{
                    display:flex;
                    justify-content: space-between;
                    .th{
                        font-size:16px;
                        color:#fff;
                        line-height:19px;
                        padding:20px 0;
                        width:15%;
                        text-align:left;
                        &:nth-child(2){
                            text-align:center;
                        }
                        &:nth-child(3){
                            text-align:right;
                            padding-right:60px;
                            box-sizing: border-box;
                        }
                    }
                }
                .poolList{
                    .poolItem{
                        border-top:1px solid #9B5323;
                        .poolTitle{
                            display:flex;
                            justify-content: space-between;
                            font-family: Roboto-Medium, Roboto;
                            .names{
                                display:flex;
                                align-items: center;
                                line-height:80px;
                                font-size:20px;
                                color:#fff;
                                width:15%;
                                text-align:left;
                                img{
                                    width:40px;
                                    height:40px;
                                    margin-right:8px;
                                }
                            }
                            .apr{
                                font-size:16px;
                                color:#fff;
                                line-height:80px;
                                width:15%;
                                text-align:center;
                            }
                            .earned{
                                display:flex;
                                justify-content: space-between;
                                align-items: center;
                                width:15%;
                                text-align:left;
                                i{
                                    width:32px;
                                    height:32px;
                                    background: url(../assets/icon_down.png) no-repeat center;
                                    background-size:100% 100%;
                                }
                                p{
                                    font-size:16px;
                                    color:#fff;
                                    line-height:19px;
                                }
                            }
                        }
                        

                    }
                }
            }
        }
    }
</style>>