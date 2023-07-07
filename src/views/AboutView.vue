<template>
  <div class="about">
    <h1>About Myself</h1>
  </div>
  <div class="container-fluid m-auto">
    <img
      src="https://i.postimg.cc/1ts3jCbs/C12-Cheslyn-Herman-1.jpg"
      alt="Cheslyn Herman"
      class="aboutImg img-fluid"
    />
  </div>
  <div class="container-fluid m-auto" id="bio">
    <h3>Bio</h3>
    <p>
      I am an aspiring web developer, web designer and frontend developer. I am
      someone who is disciplined, hardworking and goal driven. My willingness to
      learn allows me to constantly seek new challenges and I can adapt to any
      environment. I work efficiently and effectively both within a team as well
      as individually.
    </p>
  </div>

  <div class="passionBoard">
    <h3 class="text-center">Passion & Vision Board</h3>
    <div class="card-div row m-3">
      <div class="card col-2">
        <img src="https://i.postimg.cc/8cSDyz6f/anime.jpg" alt="Anime" />
        <div class="card__content">
          <h3>Anime</h3>
          <br />
          <p class="card__description">
            Anime has the power to transport you to different worlds, evoke
            strong emotions, and ignite your imagination. I honestly think that
            people who think anime are weird should give it a try.
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/bJbpHtsj/avengers.jpg" alt="Marvel" />
        <div class="card__content">
          <h3>Marvel Cinematic Universe (MCU)</h3>
          <br />
          <p class="card__description">
            The MCU is my go to. From the movies to the series it has all left
            its mark on me and Captain America is also my favourite avenger.
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/25L2rVr1/pubg2.jpg" alt="PUBG" />
        <div class="card__content">
          <h3>PUBG</h3>
          <br />
          <p class="card__description">
            <P>PUBG mobile is my favorite game to play. Being able to interact with my friends and make new ones, the competitiveness and adrenaline rush it gives are just some of the reasons why I love playing PUBG.</P>
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/28xjKhTk/festival.jpg" alt="Festivals" />
        <div class="card__content">
          <h3>Music Festivals</h3>
          <br />
          <p class="card__description">
            I enjoy going to music festivals and seeing my favorite artists live. The memories made at a music festival are truly unmatched.
          </p>
        </div>
      </div>
    </div>
    <div class="card-div row m-3">
      <div class="card col-2">
        <img src="https://i.postimg.cc/rm4N4bPg/sunsets.jpg" alt="Sunset" />
        <div class="card__content">
          <h3>Sunsets</h3>
          <br />
          <p class="card__description">
            Looking at sunsets bring me peace. Taking in the natural beauty makes me feel like everything will be okay.
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/G2HQqtSL/forex.jpg" alt="Trading" />
        <div class="card__content">
          <h3>Trading/ Investing/ Cryptocurrency</h3>
          <br />
          <p class="card__description">
            I would like to have more than one stream of income. I have ventured
            into purchasing crypto currency and forex trading. In future I will
            be doing it much more including investing.
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/1Rw3DLqN/moon.jpg" alt="Moon" />
        <div class="card__content">
          <h3>Moon</h3>
          <br />
          <p class="card__description">
            I love each moon phase. The moon is beautiful, its mysterious, it luminates the night time.
          </p>
        </div>
      </div>
    </div>
    <div class="card-div row m-3">
      <div class="card col-2">
        <img src="https://i.postimg.cc/m2qFyhN2/tokyo.jpg" alt="Tokyo" />
        <div class="card__content">
          <h3>Tokyo</h3>
          <br />
          <p class="card__description">
            In a few years I am going to visit Tokyo or possibly even move to
            Tokyo. My love for anime has an influence on this but the city
            itself is beautiful and aesthetically pleasing and I would love to
            experience it one day.
          </p>
        </div>
      </div>
      <div class="card col-2">
        <img src="https://i.postimg.cc/P5wv3h2b/hiking.jpg" alt="Hiking" />
        <div class="card__content">
          <h3>Hiking</h3>
          <br />
          <p class="card__description">
            I am not much of an outdoors person but one thing I do enjoy doing
            is going on a hike. The adventure, the scenery are the reasons why i
            enjoy it, as well as it enhances my mood.
          </p>
        </div>
      </div>
    </div>
    <div class="card-div row m-3">
      <div class="card col-2">
        <img
          src="https://i.postimg.cc/cJmyXzkq/af271baafc8a859b963b04561aa6ecae.jpg"
          alt="Property"
        />
        <div class="card__content">
          <h3>Property/ Real Estate</h3>
          <br />
          <p class="card__description">
            I see myself owning multiple properties one day as well as investing
            in real estate as investing in real estate generates wealth and can
            create a legacy for future generations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about {
  margin: 20px;
  color: #3c2a21;
}
.aboutImg {
  height: 50vh;
  border-radius: 20px;
}

.container-fluid {
  width: 60%;
  margin-top: 20px !important;
  margin-bottom: 20px !important;
  /* padding: 10px; */
  align-items: center;
}

#bio {
  border-bottom: 2px solid #3c2a21;
  color: #3c2a21;
}

/* referencing flip card and animations from https://uiverse.io/gharsh11032000/selfish-owl-57 */
body {
  text-align: center;
  background-color: #ede4e0 !important;
  color: #3c2a21 !important;
}
.card-div {
  justify-content: space-evenly;
}
.card {
  width: 15rem;
  height: 50vh;
  background-color: #3c2a21 !important;
  color: #ede4e0 !important;
  border-radius: 20px !important;
  border: 0px !important;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  perspective: 1000px;
  box-shadow: 0 0 0 5px #ffffff80;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card img {
  height: 50vh;
  border-radius: 20px !important;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.2);
}
.card__content {
  position: absolute;
  top: 0;
  left: 0;
  align-items: center !important;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 20px !important;
  background-color: #3c2a21;
  transform: rotateX(-90deg);
  transform-origin: bottom;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.card:hover .card__content {
  transform: rotateX(0deg);
}
.card:hover img {
  scale: 0;
}
.card__description {
  font-size: 14px;
}

.passionBoard {
  color: #3c2a21;
  margin: 20px;
}
</style>
