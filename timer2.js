const stdin = process.stdin;

stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write('\x07');
  } else if (key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} seconds \n`);
    setTimeout(() => process.stdout.write('\x07'), key * 1000);
  } else if (key === "\u0003") {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
}); 