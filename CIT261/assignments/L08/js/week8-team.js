function getPeople(url) {

     if (!url) {
          url = 'https://swapi.co/api/people/';
     }

     let table = document.querySelector('table');

     fetch(url)
          .then(
               (response) => {
                    response.json()
                         .then(
                              (people) => {

                                   //TEMP: delete the console.table
                                   console.table(people);

                                   //Outputs Names
                                   people.results.forEach(
                                        (person) => {
                                             let row = document.createElement('tr');
                                             let name = document.createElement('td');
                                             name.textContent = person.name;

                                             row.appendChild(name);
                                             table.appendChild(row);
                                        }
                                   );
                                   // Work on Buttons
                                   if (people.previous === null) {
                                        document.querySelector('#previous').setAttribute('disabled', 'disabled');
                                   }
                                   if (people.next === null) {
                                        document.querySelector('#next').setAttribute('disabled', 'disabled');
                                   }

                                   document.querySelector('#previous').onclick = function () {
                                        document.querySelector('table>tr').remove();
                                        getPeople(people.previous);
                                   }
                                   document.querySelector('#next').onclick = function () {
                                        getPeople(people.next);
                                   }

                              }
                         )
               }
          )
          .catch();

}







function prevPg(url = 'https://swapi.co/api/people/') {
     let p = document.getElementById("previous");
     p.onclick = () => {
          prevPg(people.previous);
     }
}

function nextPg(url = 'https://swapi.co/api/people/') {
     let n = document.getElementById("next");
     n.onclick = () => {
          let nextPg = people.next;
          nextPg(people.next);
     }
}


function showShips(url = 'https://swapi.co/api/people/') {
     getShips(url).then(function (people) {
          console.log(people);
          // const results = data.results;

          //get the list element
          // const shipListElement = document.getElementById('shiplist');
          // renderShipList(results, shipListElement);

          // enable the next and prev buttons.
          if (people.next) {
               const next = document.getElementById('next');
               next.ontouchend = () => {
                    // notice to show the next page we just re-call the showShips function with a new URL
                    showShips(people.next);
               };
          }
          if (people.previous) {
               const prev = document.getElementById('prev');

               prev.ontouchend = () => {
                    showShips(people.previous);
               };
          }
     });
}


// BUTTON TALK STARTS AT 34:30