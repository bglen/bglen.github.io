function type(/**/) { for (var i = 0; i < arguments.length; i++) $('#console').append(arguments[i]); }

function clear() { $('#console').empty(); }

var buffer = [];
var iter = 0;

function add_normal(x) {
    buffer.unshift(x + "<br />");
}

function add(x) {
    buffer.unshift("Brians~Website:~ home$ ");
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
	consol.log("Initialized.");
    add("Welcome to my personal website.");
    add("Here is where I will upload a couple of my personal projects that you can access.")
    add_normal("")
    add_normal("")
    add_normal("Check out my <a target='_blank' href='https://www.linkedin.com/in/priansh'>LinkedIn</a>!")
    add_normal("Or maybe my <a target='_blank' href='https://www.linkedin.com/in/priansh'>Github?</a>!")
    add_normal("Don't forget about my <a target='_blank' href='https://www.linkedin.com/in/priansh'>Devpost!</a>!")
    add_normal("")
    add("I also love to write!")
    add_normal("<a target='_blank' href='http://artandwriting.org/media/366221'>Here's my Scholastic Gold Medal piece from highschool.")
    add_normal("Check out my <a target='_blank' href='https://www.medium.com/@priansh'>Medium</a> blog!")
    add_normal("")
    add("Loading kernel: | / - | \\ | 100%")
    add_normal("")
    //add_normal("<script src=\"input_process.js\"></script>");

    //runs when console is ready
    $("#console").ready(function () {
        clear();
        type("<div class='start_sequence'Initialzing System...");
        type("<br>");
        type("<div>> Hello World!</div>");


        buffer = reorder();
    });
    iter = buffer.length - 1;

    function typeItOut() {
        if (iter > -1) {
            type(buffer[iter]); iter--;
            setTimeout(typeItOut, 70);
        }
        else return;
    }

    setTimeout(typeItOut, 100);