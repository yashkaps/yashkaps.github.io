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
  function return_table_players_common(idx, query_string = "") {
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
    if (query_string === "") {
      player_table_fxns[idx]();
    } else {
      filter_table(idx, query_string);
    }
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
  function return_table_players_rdown(query_str = "") {

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
  function filter_table(idx, query_str = "") {
    var query;
    if (query_str === "") {
      query = document.getElementById("search_box").value;
    } else {
      query = query_str;
      document.getElementById("search_box").value = query_str;
    }
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
      `<a id="initial" href="#">Back to home</a>
      <br><br><h2>All League Events</h2><br><br>`;

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


    fetch('https://api.github.com/repos/yashkaps/yashkaps.github.io/contents/ttleague/data/txt_files?ref=master')
      .then(response => response.json())
      .then(data => {
        var file_objs = data;
        var names = [];
        for (var i = 0; i < file_objs.length; i++) {
          names.push(file_objs[i].name.substring(0, 8));
        }
        var result = ``;

        for (var i = file_objs.length - 2; i >= 0; i--) {
          var name = file_objs[i].name;
          var date = months[name.substring(4, 6)] + " " + name.substring(6, 8) + ", " + name.substring(0, 4);
          result += `<div class="events"><a href="#" id="` + names[i] + `">` + date + `</a></div><br>`;

        }
        result += `<br><br>
        <a id="initial2" href="#">Back to home</a>`;
        document.getElementById("content").innerHTML += result;
        document.getElementById("initial").addEventListener("click", initial);
        document.getElementById("initial2").addEventListener("click", initial);


        console.log("names begin here");
        for (var i = 0; i < names.length - 1; i++) {
          console.log(names[i]);
          const val = names[i];
          const fun = () => return_table_matches(val, names);
          document.getElementById(names[i]).addEventListener("click", fun);
        }
      });
  }

  // function to return match info for a specific date
  // to be modified
  function return_table_matches(id, names) {
    if (!names.includes(id)) {
      document.getElementById("content").innerHTML =
        `<h1>Error: Page not found</h1><br><h3>Click<a href="#" id="all_events">here</a> to
        view all events</h3>`;
    }
    document.getElementById("content").innerHTML =
      `<a id="initial" href="#">Back to home</a>&emsp;<a id="all_events" href="#">Back to all events</a>
      <br><br><h2>League Event Match Results</h2><br><br>`;

    console.log("from return_table_matches");
    console.log("id:" + id);
    fetch("https://yashkaps.github.io/ttleague/data/txt_files/" + id + ".txt")
      .then(function (response) {
        return response.text();
        // if (!response.ok) {
        //   if (response.status == 404) {
        //     throw new Error("File not found");
        //   } else {
        //     throw new Error("Network response was not ok");
        //   }
        // }
      })
      .then(function (data) {
        console.log('data before big_separation');
        console.log(data);
        var big_separation = data.split("Winner Name,Loser Name,Score,+/-");
        var rating_changes = big_separation[0];
        var match_results = big_separation[1];

        console.log(big_separation);

        var result = `<table id="match_results">`;
        var lines = match_results.split("\n");
        var heading = lines[0].split(",");
        result += "<tr> <th>Winner Name</th><th>Loser Name</th><th>Score</th><th>+/-</th> </tr>";

        for (var i = 0; i < lines.length - 1; i++) {
          result += "<tr>";
          var words = lines[i].split(",");
          for (var j = 0; j < words.length; j++) {
            result += "<td>" + words[j] + "</td>";
          }
          result += "</tr>";
        }

        result += "</table><br><br><br><br>";

        result += "<h2>Rating Changes</h1><br><br>";

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
        result += "</table><br><br>";
        result += `<a id="initial2" href="#">Back to home</a>&emsp;<a id="all_events2" href="#">Back to all events</a>`;

        document.getElementById("content").innerHTML += result;

        document.getElementById("initial").addEventListener("click", initial);
        document.getElementById("initial2").addEventListener("click", initial);

        document.getElementById("all_events").addEventListener("click", display_matches);
        document.getElementById("all_events2").addEventListener("click", display_matches);
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
  }

  //=========================================================================================

  // parses the query string and calls appropriate function based on the query

  function parse_query_string(query_string) {

    console.log('inside parse_query_string');

    if (query_string === "") {
      initial();
      return;
    }
    var query = get_query_object(query_string);

    console.log(query);

    if (query.players) {

      if (query.players === "all") {
        return_table_players_common(0);
      } else {
        if (query.sort === "az") {
          return_table_players_common(0, query.players);
        }
        else if (query.sort === "za") {
          return_table_players_common(1, query.players);
        }
        else if (query.sort === "rup") {
          return_table_players_common(2, query.players);
        }
        else if (query.sort === "rdown") {
          return_table_players_common(3, query.players);
        } else {
          return_table_players_common(0);
        }

      }

    } else if (query.events) {
      return_table_matches(value);
    } else {
      initial();
    }

  }

  function get_query_object(query_str) {
    console.log('inside get_query_object');
    var query = {
      players: null,
      events: null,
      sort: null
    };
    var queries_arr = query_str.split("&");
    // var queries_arr2 = queries_arr.forEach((str, idx) => queries_arr2[idx] = str.split("="));
    var queries_arr2 = [];
    for (var i = 0; i < queries_arr.length; i++) {
      queries_arr2[i] = queries_arr[i].split("=");
    }
    console.log(queries_arr2);
    for (var i = 0; i < queries_arr.length; i++) {
      console.log(queries_arr2[i][0]);
      if (queries_arr[i][0] === "players") {
        console.log('inside if');
        console.log(queries_arr2[i][1]);
        query.players = queries_arr2[i][1];
      }
      if (queries_arr[i][0] === "events") {
        query.players = queries_arr2[i][1];
      }
      if (queries_arr[i][0] === "sort") {
        query.players = queries_arr2[i][1];
      }
    }
    console.log(query);
    return query;
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

  var full_url = window.location.href.toString();
  var query_string = full_url.split("/?")[1];
  console.log(query_string);
  parse_query_string(query_string);
};
