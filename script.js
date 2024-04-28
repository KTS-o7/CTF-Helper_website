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
        printLine("Welcome to my hacker terminal!");
        printLine(
          'Type "flag" to get the flag, "hello" to say hello or "clear" to clear the terminal.'
        );
        break;
      default:
        printLine("\nUnknown command: " + command);
    }
  }

  var capsLock = false; // Add a variable to keep track of the Caps Lock state

  $(document).keydown(function (e) {
    if (e.which === 13) {
      // Enter key
      var command = terminal
        .text()
        .split("\n")
        .pop()
        .substring(inputLine.length - 1);
      handleCommand(command);
      printLine(inputLine);
    } else if (e.which === 8) {
      // Backspace key
      var text = terminal.text();
      terminal.text(text.slice(0, -1));
    } else if (e.which >= 65 && e.which <= 90) {
      // Letter key
      var isUppercase =
        (e.which >= 65 && e.which <= 90 && e.shiftKey) || capsLock;
      var charCode = isUppercase ? e.which : e.which + 32;
      terminal.append(String.fromCharCode(charCode));
    } else if (e.which === 20) {
      // Caps Lock key
      capsLock = !capsLock;
    } else {
      // Any other key
      terminal.append(String.fromCharCode(e.which));
    }
    return false;
  });

  $("#flagButton").click(function () {
    var flag = generateFlag();
    printLine("FLAG{" + flag + "}");
  });

  printLine("Welcome to my hacker terminal!");
  printLine(
    'Type "flag" to get the flag, "hello" to say hello or "clear" to clear the terminal.'
  );
  printLine(inputLine);
  const actualFlag = "FLAG{js_flag}"; // The actual flag goes here
});
