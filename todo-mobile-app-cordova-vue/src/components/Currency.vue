<template>
<section class="scrollable">
<div class="containerM" onclick="getCurrencyData()">
  <div class="cardMi">
    <div class="iconM"><ion-icon name="logo-bitcoin"></ion-icon></div>
    <div class="contentM">
      <h2><i>BITCOIN</i></h2>
      <h2 style="padding-top: 50px;"><p id="VcurrencyBTC"></p></h2>
    </div>
  </div>
</div>

<div class="containerM" onclick="getCurrencyData()">
  <div class="cardMi">
    <div class="iconM"><ion-icon name="logo-usd"></ion-icon></div>
    <div class="contentM">
      <h2 ><i>DOLAR</i></h2>
      <h2 style="padding-top: 50px;"><p id="VcurrencyUSD"></p></h2>
    </div>
  </div>
</div>

<div class="containerM" onclick="getCurrencyData()">
  <div class="cardMi">
    <div class="iconM"><ion-icon name="logo-euro"></ion-icon></div>
    <div class="contentM">
      <h2><i>EURO</i></h2>
      <h2 style="padding-top: 50px;"><p id="VcurrencyEUR"></p></h2>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
  name: 'Inbox'
}
</script>

<style scoped>
.cardM{
    display: block;
    margin-top: 60px;
    align-items: center;
    left: 10vw;
}
.containerM{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.cardMi{
  position: relative;
  width: 320px;
  height: 450px;
  background: #287bff;
  border-radius: 20px;
  border-bottom-left-radius: 160px;
  border-bottom-right-radius: 160px;
  box-shadow: 0 15px 0 #af900c,
  inset 0 -15px 0 rgba(255, 255, 255, 0.25),
  0 45px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 60%;
  margin-right: -20px;
}
.cardMi::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 150%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0));
  pointer-events: none;
  filter: blur(5px);
}
.iconM{
  position: relative;
  top: -50px;
  width: 140px;
  height: 120px;
  background: #3c284600;
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  box-shadow: 0 15px 0 rgba(0, 0, 0, 0.1),
  inset 0 -15px 0 #af900c,
  0 45px 0 rgba(0, 0, 0, 0.15);
  z-index: 5;
  display: flex;
  justify-content: center;
}
.iconM ion-icon{
  color: #fff;
  position: relative;
  font-size: 6em;
  z-index: 5;
}
.contentM{
  position: absolute;
  width: 100%;
  padding: 30px;
  padding-top: 140px;
  text-align: center;
}
.contentM h2{
  font-size: 1.75em;
  color: #fff;
  margin-bottom: 10px;
}
.contentM p{
  color: #fff;
  line-height: 1.5em;
}
.scrollable {
    overflow-x: auto;
    height: 100vh;
    overflow-x: auto;
    display: -webkit-box;
    overflow-y: hidden;
}
</style>
