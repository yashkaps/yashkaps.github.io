window.onload = function() {
  function initial() {
    var result = "<br><br><br>";
    result +=
      '<a id="0326" href="#">March 26, 2020</a><br />' +
      '<a id="0327" href="#">March 27, 2020</a><br />' +
      '<a id="0328" href="#">March 28, 2020</a><br />' +
      '<a id="0329" href="#">March 29, 2020</a><br />';
    document.getElementById("content").innerHTML = result;
    run();
  }

  function return_table(id) {
    fetch("../data/" + id + "_score.txt")
      .then(function(response) {
        return response.text();
      })
      .then(data => {
        var result = "<table>";
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

        document.getElementById("content").innerHTML = result;
      });

    fetch("../data/" + id + "_rating.txt")
      .then(function(response) {
        return response.text();
      })
      .then(data => {
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
        document.getElementById("content").innerHTML += "<br><br><br>";

        var back_to_home =
          '<br><br><br><a id="initial" href="#">Back to home</a>';
        document.getElementById("content").innerHTML += result;
        document.getElementById("content").innerHTML += back_to_home;
        document.getElementById("initial").addEventListener("click", initial);
      });
    return false;
  }

  initial();
  function run() {
    document.getElementById("0326").addEventListener("click", function() {
      return_table("0326");
    });
    document.getElementById("0327").addEventListener("click", function() {
      return_table("0327");
    });
    document.getElementById("0328").addEventListener("click", function() {
      return_table("0328");
    });
    document.getElementById("0329").addEventListener("click", function() {
      return_table("0329");
    });
  }
};