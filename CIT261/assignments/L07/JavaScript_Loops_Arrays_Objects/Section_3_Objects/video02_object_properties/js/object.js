var person = {
  name: 'Jacob',
  country: 'the US',
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p><p>I live in ' + person.country + '.</p>';
person.name = 'Rainbow Dash';
message += '<p>I wish my name was ' + person.name + '</p><p>I used to be ' + person.age + ', but now I\'m ';
person.age += 1;
message += person.age;
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '.</p>';

print(message);