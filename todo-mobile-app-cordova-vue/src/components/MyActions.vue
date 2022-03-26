<template>
  <section>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>
    <div id="loading_container">
      <button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        Carregando Dados.....
      </button>
    </div>
    <div id="company_container">
      <select id="companies" class="btn btn-light" name="companies">
          <option value="International Business Machine(IBM)">International Business Machine(IBM)</option>
          <option value="Microsoft Corp(MSFT)">Microsoft Corp(MSFT)</option>
          <option value="Petrobras(PETR4.SA)">Petrobras(PETR4)</option>
          <option value="Apple Inc(AAPL34)">Apple Inc(AAPL)</option>
      </select>
      <button id="get_data" onclick="getData()" class="btn btn-primary" style="margin-top: 5%; display: flex;">Carregar Dados</button>
      <button id="download_data" onclick="download()" class="btn btn-success" style="margin-top: 5%;">Download Dados(CSV)</button>
    </div>
    <div id="chartContainer"></div>
    <div id="table_container"></div>
  </section>
</template>

<script>
export default {
  name: 'MyActions',
  data () {
    return {
      msg: 'MyActions Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #loading_container{
    display: none;
    width: 200px;
    margin-top: 1%;
    margin-left: 20%;
    margin-right: auto;
  }
  #company_container{
    margin-top: 5%;
    margin-bottom: 4px;
    margin-left: 5%;
    margin-right: auto;
  }
  #chartContainer{
    height: 300px;
    width: 70%;
    max-width: 320px;
    margin-top: 5%;
    margin-left: 13%;
    margin-right: auto;
  }
  #table_container{
    margin-left: 5px;
    margin-top: 5%;
    width: 100%;
    max-width: 320px;
    margin-right: 10px;
  }
  #para{
    font-weight: bold;
    font-size: large;
    text-align: center;
    margin-bottom: 1%;
  }
  #table_container .table{
    color: #fff;
  }
  #download_data{
    display: none;
    margin-top: 20px;
    margin-left: 10%;
    margin-right: auto;
  }
  .logo {
    height: 25px;
    width: 25px;
  }
  .nav{
    display: contents;
    justify-content: center;
  }
</style>
