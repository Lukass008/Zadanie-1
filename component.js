var ElementsModule = function (containerName) {
    this.containerName = containerName ? containerName : "container";
    this.elementsCounter = 0;
};

ElementsModule.prototype.createElements = function (num) {
    var container = document.getElementById(this.containerName),
        counter = document.createElement("div"),
        element = null;

    if(container){
        for (var i = 1; i <= num; i++) {
            element = document.createElement("div");
            element.className = "redBox";
            element.id = "div" + i;
            if (i % 3 == 0) {
                element.setAttribute("onclick", 'generator.changeElementClass("' + element.id + '","greenBox")');
            }
            container.appendChild(element);
        }
        this.elementsCounter += num;
        counter.innerHTML = 'Number of created elements: ' + this.elementsCounter;
        counter.setAttribute('id', 'counter');
        container.appendChild(counter);
    }

};

ElementsModule.prototype.changeElementClass = function (id, className) {
    var el = document.getElementById(id);
    el.className = className;
};

//W nazwie kontenera przy ewentualnym użyciu funkcji argument musi być typu string!!
ElementsModule.prototype.setContainerName = function (containerName) {
    if (containerName) {
        this.containerName = containerName;
    }
};

var generator = new ElementsModule();
generator.createElements(100);