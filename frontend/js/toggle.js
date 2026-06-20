var users = [
    {
        "name" : "John Doe",
        "gender" : "male",
        "image" : "../images/john.png"
    },{
        "name" : "Jane Doe",
        "gender" : "female",
        "image" : "../images/jane.png"
    }
]
var curid=0;
function toggle(){
    //toggle curid from 0 -> 1&1->0
    curid=(curid+1)%2
    var user=users[curid];
    document.getElementById("user-img").src=user.image;

    document.getElementById("user-name").innerText=user.name;
    document.getElementById("user-gender").innerText=user.gender;

}