export function element(name,type,cls="",id="",value="",parentID,append=true){
    const Name = name;
    const Type = type;
    const element =  document.createElement(type);
    const element_par = document.querySelector("#"+parentID);
    switch(append){
        case "true":
            element_par.append(element);
            break;
        case "false":
            element_par.prepend(element);
            break;
        default:
            document.write("<span id=\"output\">error:incorrect usage of element(); function</span>");
            document.querySelector("#output").style.color = rgba(255,0,0,100);
            break;
    }
    for (item in cls){
        element.setAttribute("class",cls[item]);
    }
    element.setAttribute("id",id);
    element.setAttribute()
}