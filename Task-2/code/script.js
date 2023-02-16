var links = document.getElementsByClassName("links");
var lists = document.getElementsByClassName("lists");
function open(tabname)
{
    for(link  of links){
        link.classlist.remove("active")
    }
    for(list of lists){
        lists.classlist.remove("first")
    }
    event.currentTarget.classlist.add("active")
}
