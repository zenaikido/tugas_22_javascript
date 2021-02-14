function tugas22(){
    var x = "Saya ingin belajar bersama";
    var y = x.split(" ");

    var z = y.forEach(function(item,index){
        console.log("Item:", item, "Index ke", index)
    })
   
}
tugas22()