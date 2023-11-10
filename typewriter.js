const sentence = "hello there from lighthouse labs";

for (const [index, char] of sentence.split('').entries()) {
  setTimeout(() => {
    process.stdout.write(char);

    // Add newline character if it's the last character
    if (index === sentence.length - 1) {
      console.log();
    }
  }, 50 * index);

};

