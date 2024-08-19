const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
    {
        name: "Bruno",
        yearOfBirth: 2004,
        yearOfDeath: 2020,
    },
    {
        name: "Agustin",
        yearOfBirth: 1870,
        yearOfDeath: 1944,
    },

  ]
function findTheOldest (people) {
    const oldest = people.reduce((oldestPerson, currentPerson) => {
        const currentYear = new Date().getFullYear();
        const yearOfDeath = currentPerson.yearOfDeath || currentYear;

        const currentAge = yearOfDeath - currentPerson.yearOfBirth;

        if (!oldestPerson || currentAge > (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth || currentYear - oldestPerson.yearOfBirth)){
            return currentPerson;
        }
        return oldestPerson;
    }, null);
    if (oldest) {
        console.log("La persona mas vieja es " + (oldest.name));
    }
    return oldest;
}

findTheOldest(people)
