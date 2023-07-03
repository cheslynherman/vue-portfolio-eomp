<template>
  <div class="home">
    <div class="landing">
      <div class="name container-fluid">
        <h1>Cheslyn Herman</h1>
      </div>
      <div class="text">
        <p>An aspiring web developer, web designer and frontend developer</p>
      </div>
      <div class="linkBtn">
        <button>Have A Look At My Work</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  color: #3c2a21;
}

.landing {
  margin-top: 40vh;
  margin-bottom: 20vh;
  margin-right: 15vh;
}
.name,
.text,
.linkBtn {
  display: flex;
  justify-content: right;
}

h1 {
  font-size: 60px;
  text-shadow: 0px 0px 5px #000, 0px 0px 18px #3c2a21;
}
p {
  font-size: 25px;
  width: 54%;
  animation: typing 2.5s steps(30), blink 0.5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  text-shadow: 0px 0px 5px #000, 0px 0px 18px #3c2a21;
  border-right: 2px solid #3c2a21;
}

@keyframes typing {
  from {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

button {
  color: #ede4e0;
  background: #3c2a21;
  border: 0px;
  border-radius: 20px;
  padding: 5px 8px 5px 8px;
  box-shadow: 0 0 0 0 transparent;
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
}

button:hover {
  color: #3c2a21;
      background: #ede4e0;
    box-shadow: 0 0 30px 5px #3c2a21;
    -webkit-transition: all 0.2s ease-out;
    -moz-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
}
</style>
