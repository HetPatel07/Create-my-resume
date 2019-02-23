function edit() {
    var a = document.getElementsByClassName('com').length;
    console.log(a);
    var i;
    for (i = 0; i < a; i++) {
        var b = document.getElementsByClassName('com')[i].contentEditable = "true";
        console.log(i);
        console.log(b);
    }

    document.getElementById('right').innerHTML = '<i class="fas fa-check"></i>'


    //    var b = document.querySelectorAll('div p').contentEditable = "true";

    //    console.log(document.querySelectorAll('div p'));

}
