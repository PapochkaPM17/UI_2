window.onload = initBody;

function initBody() {
    var button = document.getElementById("clickButton");
    var table = document.getElementById("result");
    button.onclick = clickButton;
    table.onclick = function(event) {
      var target = event.target;
      if (target.tagName != 'TD') return;
      deleteRow(target);
    };
}
var counter = 0;

function clickButton() {

    var a = document.getElementById("aValue").value;
    var b = document.getElementById("bValue").value;
    var c = document.getElementById("cValue").value;
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Введите корректные значения");
        return;
    }

        var table = document.getElementById("result");
        if(a && b && c) {
            var row = document.createElement("TR");
            var td1 = document.createElement("TD");
            var td2 = document.createElement("TD");
            var td3 = document.createElement("TD");
            var td4 = document.createElement("TD");
            var td5 = document.createElement("TD");
            td1.appendChild(document.createTextNode(a));
            td2.appendChild(document.createTextNode(b));
            td3.appendChild(document.createTextNode(c));
            if(a == 0 && b != 0) {
                td4.appendChild(document.createTextNode(-c/b));
            } else if(a == 0 && b == 0 && c == 0) {
                td4.appendChild(document.createTextNode("-\u221E < x < +\u221E"));
            } else if(a == 0 && b == 0 && c != 0) {
                td4.appendChild(document.createTextNode("\u2205"));
            } else if(b*b-4*a*c >= 0) {
                td4.appendChild(document.createTextNode((-b+Math.sqrt(b*b-4*a*c))/(2*a)));
                td5.appendChild(document.createTextNode((-b-Math.sqrt(b*b-4*a*c))/(2*a)));
            } else{
                td4.appendChild(document.createTextNode(-b/(2*a) + " + " + Math.sqrt(-b*b+4*a*c)/(2*a) + "i"));
                td5.appendChild(document.createTextNode(-b/(2*a) + " - " + Math.sqrt(-b*b+4*a*c)/(2*a) + "i"));
            }
            row.appendChild(td1);
            row.appendChild(td2);
            row.appendChild(td3);
            row.appendChild(td4);
            row.appendChild(td5);
            table.appendChild(row);

            counter++;
            if(counter%2 == 1) {
                table.rows[counter].className = "thblack";
            } else {
                table.rows[counter].className = "thwhite";
            }
        }
};

function deleteRow(td) {
    var next = td.parentNode.nextSibling;
    td.parentNode.remove();

    counter--;

    while(next) {
        if(next.className == "thwhite") {
            next.className = "thblack";
            next = next.nextSibling;
        } else {
            next.className = "thwhite";
            next = next.nextSibling;
        }
    }
}

