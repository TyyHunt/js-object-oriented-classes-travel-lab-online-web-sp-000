class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = startDate
  };

  startDate() {
    let dateObject = new Date(this.startDate)
    return dateObject
  }
}
