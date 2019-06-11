class Driver {
  constructor(name, date) {
    this.name = name
    this.date = date
  };

  startDate() {
    let month = this.date.slice(' ')[0]

    return `${month}`
  }

}
