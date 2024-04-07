

class LocationsList {

    constructor(list, optionCallback, parentElem) {

        //Create and append select list
        this.selectList = document.createElement("select");
        this.selectList.id = "selectList";
        parentElem.appendChild(this.selectList);

        //Create and append the options
        list.forEach(member => {
            const curElem = member.GeoObject
            var option = document.createElement("option");

            option.value = curElem.Point.pos;
            option.text = curElem.name;

            option.addEventListener("click", optionCallback)
            this.selectList.appendChild(option);
        });
    }

}