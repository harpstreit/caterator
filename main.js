var container = document.querySelector(".container");

var names = ["Eddy", "Jim", "Casey", "Laurie", "Ace"];

var arr = [];

var whiskerLength = Math.floor(Math.random() * 101);

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
  for (var i = 0; i < names.length; i++) {

    var box = document.createElement("span");
    box.className = "draggie-box";
    container.appendChild(box);
    box.innerHTML = names[i];
    var draggie = new Draggabilly(box);
    box.dataset.property = "name";
    box.dataset.value = names[i];
    box.dataset.property = "whiskerLength";
    box.dataset.value = whiskerLength;

    draggie.on('dragStart', function(instance, event, pointer) {
      instance.element.classList.add('active');
    });

    draggie.on('dragEnd', function(instance, event, pointer) {
      instance.element.classList.remove('active');
      console.log(instance.element.dataset.property);
      console.log(instance.element.dataset.value);
    });
  }
};

render();
