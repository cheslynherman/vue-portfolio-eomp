<template>
    <div class="heading">
        <h1>Get In Touch With Me</h1>
    </div>

  <div class="form container-fluid">
    <div class="text">
        <p>Required fields are marked with *</p>
    </div>
    <form action="https://formspree.io/f/mzblpqka" method="POST">
      <div class="names row">
        <div class="mb-3 col-6">
          <label for="exampleFormControlInput1" class="form-label"
            >First Name *</label
          >
          <input
            name="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Tony"
            required
          />
        </div>
        <div class="mb-3 col-6">
          <label for="exampleFormControlInput1" class="form-label"
            >Last Name *</label
          >
          <input
            name="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Stark"
            required
          />
        </div>
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label"
          >Email address *</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="tonystark@avengers.com"
          required
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label"
          >Leave a Message *</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="6"
          required
        ></textarea>
      </div>
      <div class="formButtons">
        <div class="submit">
          <button type="submit">Send</button>
        </div>
        <div class="reset mb-3">
          <button type="reset">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.heading {
    margin-bottom: 20px;
    color: #3c2a21;
}


.form {
  width: 50%;
  color: #3c2a21;
  margin-bottom: 20px;
}
.text {
    display: flex;
    
}
input,
textarea {
  border: 2px solid #3c2a21;
  background: #3c2a21 !important;
  color: #EDE4E0 !important;
  border-radius: 20px;
}

::placeholder {
    color: #EDE4E0;
}
.formButtons {
    display: flex;
    justify-content: center;
    
}
.submit, .reset {
    margin: auto;
}

button {
    color: #ede4e0;
  background: #3c2a21;
  width: 100px;
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

@media only screen and (max-width: 300px) {
  .names {
    display: flex;
    flex-direction: column;
    
    
  }

  input {
    width: 100px;
  }
  .formButtons {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px;
  }
}

@media only screen and (max-width: 700px) {
  .formButtons {
    display: flex;
    flex-direction: column;
  }
  button {
    margin: 10px;
  }
}
</style>
