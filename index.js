class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(startDate)
  };

  yearsExperienceFromBeginningOf(endDate) {
    let experience = endDate - this.startDate.getFullYear()
    return experience
  };

}
