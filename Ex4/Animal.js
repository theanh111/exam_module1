function Animal(name, weight) {
    this.name = name;
    this.weight = weight;
    this.setName = function (inputName) {
        this.name = inputName;
    }
    this.setWeight = function (inputWeight) {
        this.weight = inputWeight;
    }
    this.getName = function () {
        return this.name;
    }
    this.getWeight = function () {
        return this.weight;
    }
    this.toString = function () {
        return document.write("Animal's name is: " + this.name + "<br>" + "Animal's weight is: " + this.weight + " <br>");
    }
}