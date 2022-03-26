<template>
<footer class="footer">
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  <div class="navigation">
    <ul>
      <li class="list active">
        <router-link to="/">
          <a>
            <span class="icon">
              <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
            </span>
          </a>
        </router-link>
      </li>
      <li class="list">
        <router-link to="/MyActions">
          <a>
            <span class="icon">
              <ion-icon name="pulse-outline"></ion-icon>
            </span>
          </a>
        </router-link>
      </li>
      <li class="list">
        <router-link to="/News">
        <a>
          <span class="icon">
            <ion-icon name="newspaper-outline"></ion-icon>
          </span>
        </a>
      </li>
      <li class="list">
        <router-link to="/Currency">
          <a>
            <span class="icon">
              <ion-icon name="cash-outline"></ion-icon>
            </span>
          </a>
        </router-link>
      </li>
      <div class="indicator"></div>
    </ul>
  </div>
</footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
  :root {
    --clr: #222327;
  }
  body {
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222327;
    color: #fff;
  }
  .navigation {
    width: 100%;
    height: 45px;
    background: rgb(255, 255, 255);
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 5px 5px 0 0;
  }
  .navigation ul {
    display: flex;
  }
  .navigation ul li {
    position: relative;
    list-style: none;
    width: 65px;
    height: 65px;
    z-index: 10;
  }
  .navigation ul li a {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    text-align: center;
    font-weight: 500;
  }
  .navigation ul li a .icon {
    position: relative;
    display: block;
    line-height: 65px;
    font-size: 1.5em;
    text-align: center;
    transition: 0.5s;
    color: #222327;
  }
  .navigation ul li.active a .icon {
    transform: translateY(-25px);
  }
  .indicator {
    position: absolute;
    width: 60px;
    height: 60px;
    top: -65%;
    background: #29fd53;
    border-radius: 50%;
    border: 4px solid #222327;
    transition: 0.5s;
  }
  .indicator::before {
    content: "";
    position: absolute;
    top: 49%;
    left: -20px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 15px;
    box-shadow: 1px -5px 0 0 #222327;
  }
  .indicator::after {
    content: "";
    position: absolute;
    top: 49%;
    right: -20px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 15px;
    box-shadow: -1px -5px 0 0 #222327;
  }
  .navigation ul li:nth-child(1).active ~ .indicator {
    transform: translateX(calc(65.5px * 0));
    background: #fdc629;
  }
  .navigation ul li:nth-child(2).active ~ .indicator {
    transform: translateX(calc(65.5px * 1));
    background: #7c6daf;
  }
  .navigation ul li:nth-child(3).active ~ .indicator {
    transform: translateX(calc(65.5px * 2));
    background-color: #29fd53;
  }
  .navigation ul li:nth-child(4).active ~ .indicator {
    transform: translateX(calc(65.5px * 3));
    background: #0090c9;
  }
  .navigation ul li:nth-child(5).active ~ .indicator {
    transform: translateX(calc(65.5px * 4));
    background: #d18282;
  }
  .footer {
    position: fixed;
    width: 100%;
    justify-content: center;
    bottom: 0;
    z-index: 1;
    background-color: transparent;
  }
</style>
