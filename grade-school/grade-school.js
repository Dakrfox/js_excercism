//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.rost = {};
  }

  roster() {
    const roster = JSON.parse(JSON.stringify(this.rost));
    return roster;
  }

  add(name, grade) {
    if (!this.rost[grade]) {
      this.rost[grade] = [];
    }
    this.rost[grade].push(name);
    this.rost[grade].sort();
  }

  grade(grade) {
    const roster = JSON.parse(JSON.stringify(this.rost));
    return roster[grade] ? roster[grade] : [];
  }
}