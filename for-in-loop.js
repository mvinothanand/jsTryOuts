function countOnline(usersObj) {
  for (let user in usersObj) {
    console.log(usersObj[user]);
    // console.log(usersObj[user].hasOwnProperty("online"))
    // console.log(usersObj[user]["online"])
  }
}

// let users = {
//   Alan : {
//     online: false
//   },
//   Vinoth: {
//     online: true
//   },
//   Vimal: {
//     online: false
//   }
// }

let users = {
  vinoth: 1,
  vimal: 2
}
countOnline(users);