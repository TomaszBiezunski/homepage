function Person(first, last, job, skills) {
    this.name = { 'first': first, 'last': last };
    this.lookingForJob = job;
    this.hasSkills = skills;
}
var you = new Person('Tomasz', 'Biezunski', true, true);
console.log(Person);