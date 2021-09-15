<template>
    <div class="header">
        <img src="../assets/logo_FoxDex.png" class="logo">
        <div class="menus">
            <router-link class="menu" to="/">Home</router-link>
            <router-link class="menu" to="/">Features</router-link>
            <router-link class="menu" to="/">FAQ</router-link>
            <router-link class="menu" to="/">Stake</router-link>
        </div>
        <div class="options">
            <div class="wallet">
                <img src="../assets/icon_wallet_green.png">
                0x6EB3....F006
            </div>
            <div class="lang">
                English
                <img src="../assets/icon_lang.png">
            </div>
            <div class="setting">
                <img src="../assets/icon_setting.png">
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
@font-face { // 正常
    font-family: DFPBuDingW12; 
    src:url('../assets/DFPBuDingW12.ttf');
}
.header{
    font-family: DFPBuDingW12;
    height:72px;
    background:#319125;
    padding:0 48px;
    display:flex;
    justify-content: space-between;
    .logo{
        width:297px;
    }
    .menus{
        display:flex;
        padding-top:24px;
        .menu{
            padding-bottom:10px;
            font-size:20px;
            color:#fff;
            line-height:20px;
            position:relative;
            margin:0 25px;
            cursor: pointer;
            height:20px;
            font-family: DFPBuDingW12;
            &:after{
                content:"";
                position:absolute;
                bottom:0;
                left:50%;
                width:40px;
                height:3px;
                background:#fff;
                border-radius:3px;
                margin-left:-20px;
            }
        }
    }
    .options{
        display:flex;
        justify-content: space-between;
        padding-top:16px;
        .wallet{
            width:197px;
            height:40px;
            background:#1D7112;
            display:flex;
            justify-content: space-around;
            border-radius:28px;
            font-size:18px;
            color:#FFFFFF;
            align-items: center;
            img{
                width:24px;
            }
        }
        .lang{
            display:flex;
            justify-content: space-between;
            align-items: center;
            color:rgba(255,255,255,0.5);
            font-size:16px;
            padding:0 16px 0 37px;
            height:40px;
            cursor: pointer;
            img{
                width:32px;
            }
        }
        .setting{
            line-height:37px;
            cursor: pointer;
            img{
                width:32px;
                vertical-align: middle;
            }
        }
    }
}
</style>