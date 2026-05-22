let isLoggedIn = true;
let userRole = "editor";

if (isLoggedIn) {

    if(userRole === "admin")
    {
        console.log("admin can do all the things");
    }
    else if (userRole === "editor")
    {
        console.log("Welcome Editor - Edit access granted");
    }
        else if (userRole === "Viewer")
    {
        console.log("Welcome Viewer - Read only access");
    }
    else
    {
        console.log("No idea which role - Guest role"); 
    }

}
else {
    console.log("You are not logged in !")
}