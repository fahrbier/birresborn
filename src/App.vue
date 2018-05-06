<template>
  <div id="app">

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Start</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">Gemeinde <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#/vereine">Vereine</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="vereineDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </a>
            <div class="dropdown-menu" aria-labelledby="vereineDropdown">
              <a class="dropdown-item" href="#/vereine">Action</a>
              <a class="dropdown-item" href="#/vereine">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#/vereine">Something else here</a>
            </div>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#">Disabled</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <div class="col-xs-12" style="height:50px;"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  created: function () {
    // var self = this;
    console.log('ready')
    $.get('http://localhost:5000/vereine', function (response, status) {
      console.log(response.data)
    })
  }
}
</script>

<style>

</style>
