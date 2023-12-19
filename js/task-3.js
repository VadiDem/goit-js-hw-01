const profile = {
  username: "Jacob",
  playTime: 300,
  changeUsername: function (newName) {
    this.username = newName;
  },
  displayProfile: function () {
    console.log(`${this.username} has ${this.playTime} active hours!`);
  },
};
