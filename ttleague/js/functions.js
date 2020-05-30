
// only do things after the page loads
// function calls using document fail otherwise
window.onload = function () {

  // function to set up the initial display
  function initial() {
    var result = "";
    result += `<h2>Univeristy of Maryland Club Table Tennis!</h2>
      <br><h4>
      Join us every Monday and Tuesday for free play and Thursday for Weekly
        League Night!!
      </h4> <br>`;
    result += `<h4>For any inquiries, contact us at <a href="mailto:terrapintabletennis@gmail.com">terrapintabletennis@gmail.com</a> or
     reach out to us through <a href="https://www.facebook.com/umdtabletennis/">our Facebook page</a>. Officially join the club on <a 
     href="https://terplink.umd.edu/organization/terrapin-table-tennis">Terplink</a> today!!</h4><br><br><br>`;
    result += `<h2><a id="player_list" href="#">Search for Players</a></h2><br><br>`;
    result += `<h2><a id="results" href="#">League Event Match Results</a></h2><br><br>`;
    // result += `<a id="0326" href="#">March 26, 2020</a><br /><br>
    //   <a id="0327" href="#">March 27, 2020</a><br /><br>
    //   <a id="0328" href="#">March 28, 2020</a><br /><br>
    //   <a id="0329" href="#">March 29, 2020</a><br /><br>`;
    document.getElementById("content").innerHTML = result;
    addingEventListeners();
  }

  //====================================================================================
  // functions for displaying tables sorted by name
  // function to display players and their ratings in with names in ascending order
  function return_table_players_az() {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br><br>`;
    var result = `<table id="ratings">`;
    result += `<tr> <th id="player_sort">Player ▲</th> <th id="rating_sort">Rating ↕</th> </tr>`;
    var sorted_ratings = ratings.slice().sort((a, b) => (a.name).localeCompare(b.name));
    var len = sorted_ratings.length;
    for (var i = 0; i < len; i++) {
      result +=
        "\n<tr> <td> " +
        sorted_ratings[i].name +
        `</td><td class="rating_col"> ` +
        sorted_ratings[i].rating +
        "</td></tr>";
    }
    result += "</table>";
    result += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("content").innerHTML += result;
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("player_sort").addEventListener("click", return_table_players_za);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    console.log('az');
    console.log(sorted_ratings);
  }

  // function to display players and their ratings in with names in descending order
  function return_table_players_za() {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br><br>`;
    var result = `<table id="ratings">`;
    result += `<tr> <th id="player_sort">Player ▼</th> <th id="rating_sort">Rating ↕</th> </tr>`;
    var sorted_ratings = ratings.slice().sort((a, b) => (b.name).localeCompare(a.name));
    var len = sorted_ratings.length;
    for (var i = 0; i < len; i++) {
      result +=
        "\n<tr> <td> " +
        sorted_ratings[i].name +
        `</td><td class="rating_col"> ` +
        sorted_ratings[i].rating +
        "</td></tr>";
    }
    result += "</table>";
    result += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("content").innerHTML += result;
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    console.log('za');
    console.log(sorted_ratings);
  }


  //====================================================================================
  // functions for displaying tables sorted by rating
  // function to display players and their ratings in with rating in ascending order
  function return_table_players_rup() {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br><br>`;
    var result = `<table id="ratings">`;
    result += `<tr> <th id="player_sort">Player ↕</th> <th id="rating_sort">Rating ▲</th> </tr>`;
    var sorted_ratings = ratings.slice().sort((a, b) => (a.rating) - (b.rating));
    var len = sorted_ratings.length;
    for (var i = 0; i < len; i++) {
      result +=
        "\n<tr> <td> " +
        sorted_ratings[i].name +
        `</td><td class="rating_col"> ` +
        sorted_ratings[i].rating +
        "</td></tr>";
    }
    result += "</table>";
    result += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("content").innerHTML += result;
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rdown);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    console.log('rup');
    console.log(sorted_ratings);
  }

  // function to display players and their ratings in with ratings in descending order
  function return_table_players_rdown() {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br><br>`;
    var result = `<table id="ratings">`;
    result += `<tr> <th id="player_sort">Player ↕</th> <th id="rating_sort">Rating ▼</th> </tr>`;
    var sorted_ratings = ratings.slice().sort((a, b) => (b.rating) - (a.rating));
    var len = sorted_ratings.length;
    for (var i = 0; i < len; i++) {
      result +=
        "\n<tr> <td> " +
        sorted_ratings[i].name +
        `</td><td class="rating_col"> ` +
        sorted_ratings[i].rating +
        "</td></tr>";
    }
    result += "</table>";
    result += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("content").innerHTML += result;
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    console.log('rdown');
    console.log(sorted_ratings);
  }

  //===========================================================================================
  // function to return match info for a specific date
  // to be modified
  function return_table_matches(id) {
    document.getElementById("content").innerHTML =
      "<br><br><h2>League Event Match Results</h2><br><br>";

    fetch("https://yashkaps.github.io/ttleague/data/" + id + "_score.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        var result = `<table id="matches">`;
        result += "<tr> <th>Winner</th> <th>Loser</th> <th>Score</th> </tr>";
        var length = data.length;
        var lines = data.split("\n");

        for (var i = 0; i < lines.length - 1; i++) {
          result += "<tr>";
          var words = lines[i].split("\t");
          for (var j = 0; j < words.length; j++) {
            result += "<td>" + words[j] + "</td>";
          }
          result += "</tr>";
        }

        document.getElementById("content").innerHTML += result;
      });

    fetch("https://yashkaps.github.io/ttleague/data/" + id + "_rating.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        document.getElementById("content").innerHTML +=
          "<br><br><br><h2>Rating Changes</h2>";
        var result = "<table>";
        result +=
          "<tr> <th>Name</th> <th>Begin Rating</th> <th>End Rating</th> </tr>";
        var length = data.length;
        var lines = data.split("\n");

        for (var i = 0; i < lines.length - 1; i++) {
          result += "<tr>";
          var words = lines[i].split("\t");
          for (var j = 0; j < words.length; j++) {
            result += "<td>" + words[j] + "</td>";
          }
          result += "</tr>";
        }
        document.getElementById("content").innerHTML += "<br><br>";

        var back_to_home =
          '<br><br><br><a id="initial" href="#">Back to home</a>';
        document.getElementById("content").innerHTML += result;
        document.getElementById("content").innerHTML += back_to_home;
        document.getElementById("initial").addEventListener("click", initial);
      });
    return false;
  }

  // adds event listeners
  function addingEventListeners() {
    document
      .getElementById("player_list")
      .addEventListener("click", return_table_players_az);
    // document.getElementById("0327").addEventListener("click", function () {
    //   return_table_matches("0327");
    // });
    // document.getElementById("0328").addEventListener("click", function () {
    //   return_table_matches("0328");
    // });
    // document.getElementById("0329").addEventListener("click", function () {
    //   return_table_matches("0329");
    // });
  }

  // functions above
  //======================================================================
  // Code starts here

  var ratings = [];

  fetch("https://yashkaps.github.io/ttleague/data/roster.csv")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var length = data.length;
      var lines = data.split("\n");

      for (var i = 0; i < lines.length - 1; i++) {
        var res = lines[i].split(",");
        ratings.push({ name: res[0], rating: res[1] });
      }
    });
  console.log("hello world");
  console.log(ratings);

  initial();
};
