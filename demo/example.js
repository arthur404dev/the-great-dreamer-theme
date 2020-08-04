// Hello Dreamer! -> This is a Comment!

const payload = require("./example.json");

function func(param) {
  var text = "This is a text";
  const num = 845;
  let bool = true;

  for (let i = 0; i < param.length; i++) {
    text += i;
  }

  console.log(text);

  return {
    message: "Welcome Dreamer!",
    result: text + num + bool,
  };
}

export default func;
