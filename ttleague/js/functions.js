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
  // display the common part of the ratings page
  function return_table_players_common(idx) {
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>Player Ratings</h2><br>`;
    var result = "";
    result += `<div style="display: inline-grid">
    <div style="grid-column: 1/1"><h3>&#x1F50E</h3></div>
    <div style="grid-column: 2/2"><input type="text" id="search_box" placeholder="Search for players..." autofocus></div></div>`;
    result += `<br><br><table id="ratings"></table>`;
    result += `<br><br><a id="initial2" href="#">Back to home</a>`;
    document.getElementById("content").innerHTML += result;
    document.getElementById("search_box").focus();
    player_table_fxns[idx]();
  }

  //====================================================================================
  // functions for displaying tables sorted by name
  // function to display players and their ratings in with names in ascending order
  function return_table_players_az() {
    var result = "";
    // result += `<br><br><table id="ratings">`; 
    result += `<tr> <th id="player_sort">` + player_head[0] + `</th> <th id="rating_sort">` +
      rating_head[0] + `</th> </tr>`;
    var sorted_ratings = filter.slice().sort(sort_fxns[0]);
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
    document.getElementById("ratings").innerHTML = result;
    document.getElementById("search_box").focus();
    // document.getElementById("content").innerHTML += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("player_sort").addEventListener("click", return_table_players_za);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    document.getElementById("search_box").addEventListener("keyup", () => filter_table(0));
    console.log('az');
    // console.log(sorted_ratings);
  }

  // function to display players and their ratings in with names in descending order
  function return_table_players_za() {
    var result = "";
    // result += `<br><br><table id="ratings">`; 
    result += `<tr> <th id="player_sort">` + player_head[1] + `</th> <th id="rating_sort">` +
      rating_head[1] + `</th> </tr>`;
    var sorted_ratings = filter.slice().sort(sort_fxns[1]);
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
    document.getElementById("ratings").innerHTML = result;
    document.getElementById("search_box").focus();
    // document.getElementById("content").innerHTML += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    document.getElementById("search_box").addEventListener("keyup", () => filter_table(1));
    console.log('za');
    // console.log(sorted_ratings);
  }


  //====================================================================================
  // functions for displaying tables sorted by rating
  // function to display players and their ratings in with rating in ascending order
  function return_table_players_rup() {

    var result = "";
    // result += `<br><br><table id="ratings">`; 
    result += `<tr> <th id="player_sort">` + player_head[2] + `</th> <th id="rating_sort">` +
      rating_head[2] + `</th> </tr>`;
    var sorted_ratings = filter.slice().sort(sort_fxns[2]);
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
    document.getElementById("ratings").innerHTML = result;
    document.getElementById("search_box").focus();
    // document.getElementById("content").innerHTML += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rdown);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    document.getElementById("search_box").addEventListener("keyup", () => filter_table(2));
    console.log('rup');
    // console.log(sorted_ratings);
  }

  // function to display players and their ratings in with ratings in descending order
  function return_table_players_rdown() {

    var result = "";
    // result += `<br><br><table id="ratings">`;
    result += `<tr> <th id="player_sort">` + player_head[3] + `</th> <th id="rating_sort">` +
      rating_head[3] + `</th> </tr>`;
    var sorted_ratings = filter.slice().sort(sort_fxns[3]);
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
    document.getElementById("ratings").innerHTML = result;
    document.getElementById("search_box").focus();
    // document.getElementById("content").innerHTML += '<br><br><a id="initial2" href="#">Back to home</a>';
    document.getElementById("initial").addEventListener("click", initial);
    document.getElementById("initial2").addEventListener("click", initial);
    document.getElementById("rating_sort").addEventListener("click", return_table_players_rup);
    document.getElementById("player_sort").addEventListener("click", return_table_players_az);
    document.getElementById("search_box").addEventListener("keyup", () => filter_table(3));
    console.log('rdown');
    // console.log(sorted_ratings);
  }

  //===========================================================================================
  // function for dynamic filter table
  function filter_table(idx) {
    var query = document.getElementById("search_box").value;
    if (query.length == 0) {
      filter = ratings;
      return_table_players_common(idx);
    } else {
      filter = ratings.filter(a => a.name.toLowerCase().includes(query.toLowerCase()));
      var result = "";
      result += `<tr> <th id="player_sort">` + player_head[idx] + `</th> <th id="rating_sort">` +
        rating_head[idx] + `</th> </tr>`;
      var sorted_ratings = filter.slice().sort(sort_fxns[idx]);
      var len = sorted_ratings.length;
      for (var i = 0; i < len; i++) {
        result +=
          "\n<tr> <td> " +
          sorted_ratings[i].name +
          `</td><td class="rating_col"> ` +
          sorted_ratings[i].rating +
          "</td></tr>";
      }
      document.getElementById("ratings").innerHTML = result;
      document.getElementById("initial").addEventListener("click", initial);
      document.getElementById("initial2").addEventListener("click", initial);
      document.getElementById("search_box").addEventListener("keyup", () => filter_table(idx));
      document.getElementById("rating_sort").addEventListener("click", () =>
        (idx != 2) ? return_table_players_rup() : return_table_players_rdown());
      document.getElementById("player_sort").addEventListener("click", () =>
        (idx != 0) ? return_table_players_az() : return_table_players_za());
    }
    document.getElementById("search_box").focus();
  }

  //===========================================================================================

  // function to return a table of all matches
  function display_matches() {
    document.getElementById("content").innerHTML =
      "<br><br><h2>All League Events</h2><br><br>";

    var months = {
      "01": "January",
      "02": "February",
      "03": "March",
      "04": "April",
      "05": "May",
      "06": "June",
      "07": "July",
      "08": "August",
      "09": "September",
      "10": "October",
      "11": "November",
      "12": "December",
    }

    fetch("https://yashkaps.github.io/ttleague/data/csv_files/txt_files/file_names.txt")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        var result = `<li>`;
        var lines = data.split("\n");

        for (var i = 0; i < lines.length - 1; i++) {
          var date = months[lines[i].substring(4, 6)] + " " + lines[i].substring(6, 8) + ", " + lines[i].substring(0, 4);
          result += `<ul><a href="#" id="` + lines[i] + `">` + date + `</a></ul>`;

        }
        result += `</li>`;
        document.getElementById("content").innerHTML += result;

        console.log("lines[i] begins here")
        for (var i = 0; i < lines.length - 1; i++) {
          console.log(lines[i]);
          const val = lines[i];
          const fun = () => return_table_matches(val);
          document.getElementById(lines[i]).addEventListener("click", fun);
        }
      });
  }

  // function to return match info for a specific date
  // to be modified
  function return_table_matches(id) {
    document.getElementById("content").innerHTML =
      "<br><br><h2>League Event Match Results</h2><br><br>";

    console.log("from return_table_matches");
    console.log("id:" + id);
    fetch("https://yashkaps.github.io/ttleague/data/csv_files/txt_files/" + id + ".csv")
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        var big_separation = data.split("\n\n\n");
        var rating_changes = big_separation[0];
        var match_results = big_separation[1];

        var result = `<table id="match_results">`;
        var lines = match_results.split("\n");
        var heading = lines[0].split(",");
        result += "<tr> <th>" + heading[0] + "</th><th>" + heading[1] + "</th><th>" + heading[2] + "</th><th>" + heading[3] + "</th> </tr>";

        for (var i = 1; i < lines.length - 1; i++) {
          result += "<tr>";
          var words = lines[i].split(",");
          for (var j = 0; j < words.length; j++) {
            result += "<td>" + words[j] + "</td>";
          }
          result += "</tr>";
        }

        result += "</table>";

        result += `<table id="rating_changes">`;
        lines = rating_changes.split("\n");
        heading = lines[0].split(",");
        result += "<tr> <th>" + heading[0] + "</th><th>" + heading[1] + "</th><th>" + heading[2] + "</th><th>" + heading[3] + "</th> </tr>";

        for (var i = 1; i < lines.length - 1; i++) {
          result += "<tr>";
          var words = lines[i].split(",");
          for (var j = 0; j < words.length; j++) {
            result += "<td>" + words[j] + "</td>";
          }
          result += "</tr>";
        }
        result += "</table>";

        document.getElementById("content").innerHTML += result;
      });


    return false;
  }

  //=================================================================================

  // adds event listeners
  function addingEventListeners() {
    document
      .getElementById("player_list")
      .addEventListener("click", () => return_table_players_common(0));

    document
      .getElementById("results")
      .addEventListener("click", display_matches);
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
  var filter;

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

  filter = ratings;

  var sort_fxns = [];
  sort_fxns.push((a, b) => (a.name).localeCompare(b.name));
  sort_fxns.push((a, b) => (b.name).localeCompare(a.name));
  sort_fxns.push((a, b) => (a.rating) - (b.rating));
  sort_fxns.push((a, b) => (b.rating) - (a.rating));

  var player_table_fxns = [];
  player_table_fxns.push(return_table_players_az);
  player_table_fxns.push(return_table_players_za);
  player_table_fxns.push(return_table_players_rup);
  player_table_fxns.push(return_table_players_rdown);

  var player_head = ["Player ▲", "Player ▼", "Player ↕", "Player ↕"];
  var rating_head = ["Rating ↕", "Rating ↕", "Rating ▲", "Rating ▼"];

  console.log("hello world");
  console.log(sort_fxns);

  initial();
};
