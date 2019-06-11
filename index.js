class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  };

  startDate() {
    let dateObject = Date(this.startDate.slice(' ')[0], this.startDate.slice(' ')[1], this.startDate.slice(' ')[2])
  }
}
