const r = new XMLHttpRequest()
const url = "https://github.com/owrel"

r.open("GET", url)
// r.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
r.setRequestHeader("Access-Control-Allow-Origin", "*")


r.send()

r.onreadystatechange = function (){
    if(this.readyState == 4 && this.status==200){
        console.log(r.responseText)
    } else {
        console.log(r)
    }
}

