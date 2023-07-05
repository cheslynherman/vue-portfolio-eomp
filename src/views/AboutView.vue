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
      I am an aspiring web developer, web designer and frontend developer. I am someone who is disciplined,
      hardworking and goal driven. My willingness to learn allows me to
      constantly seek new challenges and I can adapt to any environment. I work
      efficiently and effectively both within a team as well as individually.
    </p>
  </div>

  <div class="passionBoard">
    <h3 class="text-center">Passion & Vision Board</h3>
    <div class="card-div row m-3">
        <div class="card col-2">
            <img src="https://i.postimg.cc/8cSDyz6f/anime.jpg" alt="Anime">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/bJbpHtsj/avengers.jpg" alt="Marvel">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/25L2rVr1/pubg2.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/28xjKhTk/festival.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
    </div>
    <div class="card-div row m-3">
        <div class="card col-2">
            <img src="https://i.postimg.cc/rm4N4bPg/sunsets.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/G2HQqtSL/forex.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/1Rw3DLqN/moon.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
    </div>
    <div class="card-div row m-3">
        <div class="card col-2">
            <img src="https://i.postimg.cc/m2qFyhN2/tokyo.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        <div class="card col-2">
            <img src="https://i.postimg.cc/P5wv3h2b/hiking.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
            </div>
        </div>
        
    </div>
    <div class="card-div row m-3">
        <div class="card col-2">
            <img src="https://i.postimg.cc/RVmVdX7p/wwe.jpg" alt="">
            <div class="card__content">
                <h3>Card Title</h3><br>
                <p class="card__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                    exercitation ullamco.</p>
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
  background-color: #EDE4E0 !important;
  color: #3C2A21 !important;
}
.card-div {
  justify-content: space-evenly;
}
.card {
    width: 15rem;
    height: 50vh;
    background-color: #3C2A21 !important;
    color: #EDE4E0 !important;
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
    background-color: #3C2A21;
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
    color: #3C2A21;
    margin: 20px;
  }
</style>
