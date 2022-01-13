function setup()
{
    canvas=createCanvas(550,500);
    canvas.position(550,300);
}
function info()
{
    document.getElementById("inf").innerHTML="<div class= " + "'" +  "alert alert-info alert-dismissible fade show" + "'" + ">" + "<button type=" + "'" + "button" + "'" + "class=" + "'" + "btn-close" + "data-bs-dismiss=" + "'" + "alert" + "'" + ">" + "Bring Left hand wrist to play Peter pan and  Right hand wrist to play Harry potter theme" + "</button>"  + "</div>" ;
                                                                  
                                                        
}
function ok()
{
    document.getElementById("inf").innerHTML="";                                                               
                                                        
}