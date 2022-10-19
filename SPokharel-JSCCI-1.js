//my golbal varbiles
var num_triangle = 1
var total_sides = 0
var s_total = 0
var area = 0;

// var for name
var First_name = " ";
var Last_name = " ";


// var for sides
var side_a = 0;
var side_b = 0;
var side_c = 0;




//______________________________________________________________________________________________________
// starting the actual code
function start(){
    while (true){

// ask for the user name input to display later

    First_name = readLine("What is your First name?: ");
    Last_name = readLine("What is your Last name?: ");
    trig();
//ask if there is another user
        var again = readLine("Would you like to enter a new user? y/n ");
        if (again == "n"){
            break;

        }
    }
}           
//______________________________________________________________________________________________________


// making a function for the triangle inputs

//______________________________________________________________________________________________________

function trig(){
    while (true){
        num_triangle = 1
        while (true){
// asking and asigning varbiles to  the user for the inputs of the trinagle sides.
    side_a = readInt("What is your input for the first side(a) of the trinagle ");
    side_b  = readInt("What is your input for the second side(b) of the trinagle ");
    side_c  = readInt("What is your input for the third sid(c) of the trinagle ");
// check if my sides are negtive
 if (side_a  <= 0 || side_b  <= 0 || side_c <= 0){
                println("Invalid triangle! Please Try Again");
                continue;
            }
             calculation();
//check if triangle is valid
            if (area == 0){
                println("Such a triangle does not exist! Try Again please use a vaild input no negtives or 0 !")
            } else {
//print results
                results();
                break;
            }
        }
//______________________________________________________________________________________________________



//Ask if they would like to add another triangle

//______________________________________________________________________________________________________

        var again = readLine("Would you like to enter a new triangle? y/n ");
        if (again == "n"){
            break;
        }
        num_triangle++;

    }
}
//______________________________________________________________________________________________________


//making my calculation function             

//______________________________________________________________________________________________________
function calculation(){
     //Find Perimeter
     total_sides = (side_a + side_b + side_c);
     //Find Semiperimeter
     s_total = total_sides/2
     //Find Area
     area = Math.sqrt(s_total*((s_total - side_a)) *(s_total - side_b )* (s_total - side_c));
}
//______________________________________________________________________________________________________


// output  Print the First Name and Last name
// making a function to output the info


//______________________________________________________________________________________________________
function results(){
 println("-------------------------------------------")
 println("your Name: " + First_name + " " + Last_name);
 println("your side A:" + side_a);
 println("your side B:" + side_b);
 println("your side C:" + side_c);
 println("Your Perimeter is: " + s_total);
 println("-------------------------------------------")

}
 //______________________________________________________________________________________________________