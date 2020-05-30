window.onload = function () {
  function initial() {
    var result = ""; //"<br><br><br>";
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

  function return_table_players() {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br><br>`;
    var result = `<table id="ratings">`;
    result += "<tr> <th>Player</th> <th>Rating</th> </tr>";
    var player_names = Object.keys(ratings).sort();
    var len = player_names.length;
    for (var i = 0; i < len - 1; i++) {
      result +=
        "\n<tr> <td> " +
        player_names[i] +
        `</td><td class="rating_col"> ` +
        ratings[player_names[i]] +
        "</td></tr>";
    }
    result += "</table>";
    result += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("content").innerHTML += result;
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
  }

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

  function addingEventListeners() {
    document
      .getElementById("player_list")
      .addEventListener("click", return_table_players);
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
  //======================================================================//
  // Code starts here

  var ratings = {};

  fetch("https://yashkaps.github.io/ttleague/data/roster.csv")
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      var length = data.length;
      var lines = data.split("\n");

      for (var i = 0; i < lines.length - 1; i++) {
        var res = lines[i].split(",");
        ratings[res[0]] = res[1];
      }
    });
  console.log("hello world");
  console.log(ratings);

  initial();
};
