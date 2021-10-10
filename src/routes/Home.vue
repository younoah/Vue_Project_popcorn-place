<template>
  <div class="Home">
    <div class="Home-hearder">
      <h1>🎬welcom!</h1>
    </div>
    <div class="Home-title1">
      🥨예매 사이트🥤
    </div>
    <div class="Home-reserve">
      <div class="Home-reserve-mega">
        <a
          href="https://www.megabox.co.kr/"
          target="_blank">
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/ci/logo-white_new2.png"
            alt="megabox" />
        </a>
      </div>
      <div class="Home-reserve-lotte">
        <a
          href="https://www.lottecinema.co.kr/NLCHS"
          target="_blank">
          <img
            src="https://www.lottecinema.co.kr/NLCHS/Content/images/common/logo_wht.png"
            alt="lottecinema" />
        </a>
      </div>
      <div class="Home-reserve-cgv">
        <a
          href="https://www.cgv.co.kr/"
          target="_blank">
          <img
            src="https://img.cgv.co.kr/R2014/images/title/h1_cgv.png"
            alt="cgv" />
        </a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1{
  padding:20px;
  margin:0px;
  color:white;
  border-bottom: solid white ;
}
.Home-title1{
  margin-top:50px;
  text-align: center;
  padding: 20px;;
  font-size:30px;
  color:white;
}
.Home-reserve{
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  padding:20px;
  .Home-reserve-mega{
    margin-right:100px;
  }
    .Home-reserve-lotte{
    margin-right:100px;
  }
    .Home-reserve-cgv{
  }
}
</style>