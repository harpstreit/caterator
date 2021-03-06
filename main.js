var container = document.querySelector(".container");

var names = ["Eddy", "Jim", "Casey", "Laurie", "Ace", "Sparkle-Pants"];

function Cat(name, age, color, whiskerLength, bib) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.whiskerLength = whiskerLength;
  this.bib = bib;

  this.sayName = function() {
    container.innerHTML += "Hi, my name is " + this.name + '<br />';
  };

  this.sayColor = function() {
    container.innerHTML += "Did you know that my color is called " + this.color + "?</br>";
  };

  this.sayAge = function() {
    container.innerHTML += "I'm " + this.age + " years old.<br />";
  };
}

var catOne = new Cat("Eddy", 3, "TuxiBoi", 20, true);

function render() {
  namer();
  whiskerMkr();
  colorCat();
}

function namer() {
  for (var i = 0; i < names.length; i++) {
    var box = document.createElement('span');
    box.className = 'draggie-box name';
    container.appendChild(box);

    box.dataset.property = 'name';
    box.dataset.value = names[i];
    box.innerHTML = 'My name is ' + names[i];

    var draggie = draggieMaker(box);

    if(name ) {
      console.log("You already chose a name.")
    }
  };
}

function whiskerMkr() {
  for (var i = 0; i < names.length; i++) {
    var box = document.createElement("span");
    box.className = "draggie-box whisker";
    container.appendChild(box);

    var whiskerLength = Math.floor(Math.random() * 101);
    box.dataset.property = "whisker length";
    box.dataset.value = whiskerLength;
    box.innerHTML = "My whisker length is "+ whiskerLength;

    var draggie = draggieMaker(box);
  }
}

function colorCat() {
  for (var i = 0; i < names.length; i++) {
    var box = document.createElement("span");
    box.className = "draggie-box color";
    container.appendChild(box);
    box.dataset.property = 'color';

    box.style.backgroundColor = colorizer();
    box.innerHTML = "I'm this color";

    var draggie = draggieMaker(box);
  }
}

// create draggie from given element and attach event handlers
function draggieMaker(box) {

  var draggie = new Draggabilly(box);

  draggie.on('dragStart', function(instance, event, pointer) {
    instance.element.classList.add('active');
  });

  draggie.on('dragEnd', function(instance, event, pointer) {
    instance.element.classList.remove('active');

    if (instance.position.x > 550 && instance.position.x < 780) {
      console.log('You chose a ' + instance.element.dataset.property);
    }
  });

  return draggie;
}

function colorizer() {
  var box = document.querySelector('.color');

  var color1 = Math.floor(Math.random() * 255);
  var color2 = Math.floor(Math.random() * 255);
  var color3 = Math.floor(Math.random() * 255);

  var rgba = 'rgba(' + color1 + "," + color2 + "," + color3 + ",0.5)";
  return rgba;
}

render();
