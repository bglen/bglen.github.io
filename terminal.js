function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console').append(arguments[i]); }

function clear() { $('#console').empty(); }

var buffer = [];
var iter = 0;

function add_linked(x) {
    buffer.unshift("Brians-Website:~ home$ " + x + "<br />");
}

function line(){
	buffer.unshift("<br />");
}

function add(x) {
    buffer.unshift("Brians-Website:~ home$ ");
    y = x.split(" ");
    for (var i = 0; i < y.length; i++)
        buffer.unshift(y[i] + " ");
    buffer.unshift("<br />");
}

function reorder() {
    var temp = [];
    for (var i = buffer.length; i > 0; i--)
        temp.unshift(buffer[i - 1]);
    for (var i = 0; i < buffer.length; i++)
        buffer[i] = temp[i];
    return buffer;
}

//runs when document loads
$(document).ready(function () {
	console.log("Initialized.");
    add("Welcome to my personal website.");
    line();
    line();
    add("Here is where I will upload a couple of my personal projects that you can access.");
    line();
    add_linked("Check out my <a target='_blank' href='https://www.linkedin.com/in/brian-glen-698756129/'>LinkedIn.</a>");
    add_linked("Here's my <a target='_blank' href='https://github.com/bglen'>Github</a> while your at it.");
    add_linked("Also, don't forget about my <a target='_blank' href='https://devpost.com/BrianGlen'>Devpost</a>, where I post all my hackathon submissions.");
    line();
    line();
    add("Looks like I haven't got around to posting anything recently. Stay tuned for some projects I'm about to finish.");
    add(":");
    line();
    //add_normal("<script src=\"input_process.js\"></script>");

    //runs when console is ready
    $("#console").ready(function () {
        clear();
        type("<div class='start_sequence'>Initialzing System... 100%</div>");
        type("<br>");


        buffer = reorder();
    });

    iter = buffer.length - 1;

    function typeItOut() {
        if (iter > -1) {
            type(buffer[iter]); iter--;
            setTimeout(typeItOut, 55);
        }
        else return;
    }

    setTimeout(typeItOut, 100);
});