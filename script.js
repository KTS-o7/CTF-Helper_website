// script.js
$(function () {
  var terminal = $("#terminal");
  var inputLine = ">";

  function printLine(line) {
    terminal.append(line + "\n");
    terminal.scrollTop(terminal[0].scrollHeight);
  }

  function generateFlag() {
    return Math.random().toString(16).substring(2);
  }
  var flag = generateFlag();

  function handleCommand(command) {
    switch (command) {
      case "flag":
        printLine("\nFLAG{" + flag + "}");
        break;
      case "hello":
        printLine("\nHello, hacker!");
        break;
      case "clear":
        terminal.text("");
        break;
      default:
        printLine("\nUnknown command: " + command);
    }
  }

  $(document).keypress(function (e) {
    if (e.which === 13) {
      // Enter key
      var command = terminal
        .text()
        .split("\n")
        .pop()
        .substring(inputLine.length - 1);
      handleCommand(command);
      printLine(inputLine);
    } else {
      terminal.append(String.fromCharCode(e.which));
    }
    return false;
  });
  $("#flagButton").click(function () {
    var flag = generateFlag();
    printLine("FLAG{" + flag + "}");
  });

  printLine("Welcome to my hacker terminal!");
  printLine('Type "flag" to get a random flag, or "hello" to say hello.');
  printLine(inputLine);
  const actualFlag = "FLAG{Goes here}";
});
