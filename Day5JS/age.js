let personDetails = ['12','John','15','Alfred','9']
personFilterByMinAge(personDetails); /* pass person details to function */
function personFilterByMinAge(personDetails)
{
    let minAge = parseInt(personDetails[0]);
    const firstPerson = {
                        name : personDetails[1],
                        age : parseInt(personDetails[2]),
                        }
    const SecondPerson = {
        name: personDetails[3],
        age : parseInt(personDetails[4]),
    }
        if(firstPerson.age>=12)
        {
          console.log(firstPerson);
        }
        if(SecondPerson.age>=minAge)
        {
            console.log(SecondPerson);
        }
}