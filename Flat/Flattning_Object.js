var user = {
  name: "Vishal patil",
  address: {
    primary: {
      house: "1",
      street: {
        main: "01",
        cross: "01"
      },
      village: "nagrale",
      district: "sangli"
    },
    secondary: {
      house: "2",
      street: {
        main: "02",
        cross: "02"
      },
      village: "sangli",
      district: "sangli"
    }
  },
  gender: "Male",
  age: 22,
  nationality: "Indian"
};
var ans = {}
function Flatten(obj, startWith) {
  for (key in obj) {
    const UpdatedKey = `${startWith}${key}_`
    if (typeof obj[key] === "object") {
      Flatten(obj[key], UpdatedKey)
    } else {
      ans[UpdatedKey] = obj[key];
    }
  };
};

Flatten(user, "")
console.log(ans);