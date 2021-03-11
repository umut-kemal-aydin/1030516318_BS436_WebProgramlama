var sayi,tik;
tik=0;
sayi=0;
function fonksiyon0(){
if (sayi==1) {

    var a;
    a=Math.floor(Math.random() * 2);  
    document.getElementById("img0").src = a+".jpg" ;
    document.getElementById("img0").style.cursor = "default";
    tik++;
}
else if (sayi==0  && tik==2) {
    document.getElementById("alanId").innerHTML = "Kaybettin:(  Yeniden bir oyun oynamak istersen ";
    document.getElementById("a1").innerHTML = "BURAYA";
    document.getElementById("h3b").innerHTML = "tıklayınız";
    document.getElementById("mesajdiv").style.backgroundColor = "red";
    var a;
    a=2; 
    document.getElementById("img0").src = a+".jpg" ;
    document.getElementById("img0").style.cursor = "default";
    tik++;
}
else{
    var a;
    a=Math.floor(Math.random() * 3);  
    document.getElementById("img0").src = a+".jpg" ;
    document.getElementById("img0").style.cursor = "default";
    if (a==2) {
        sayi++;
        document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen";
        document.getElementById("a1").innerHTML = "BURAYA";
    document.getElementById("h3b").innerHTML = "tıklayınız";
    document.getElementById("mesajdiv").style.backgroundColor = "green";
      }
    tik++;
}
}


function fonksiyon1(){
    if(sayi==1){
    var b;
    b=Math.floor(Math.random() * 2);  
    document.getElementById("img1").src = b+".jpg" ;
    document.getElementById("img1").style.cursor = "default";
    tik++;
    }
    else if (sayi==0  && tik==2) {
    document.getElementById("alanId").innerHTML = "Kaybettin:(  Yeniden bir oyun oynamak istersen ";
    document.getElementById("a1").innerHTML = "BURAYA";
    document.getElementById("h3b").innerHTML = "tıklayınız";
    document.getElementById("mesajdiv").style.backgroundColor = "red";
        var b;
        b=2; 
        document.getElementById("img1").src = b+".jpg" ;
        document.getElementById("img1").style.cursor = "default";
        tik++;
    }
    else{
        var b;
        b=Math.floor(Math.random() * 3);  
        document.getElementById("img1").src = b+".jpg" ;
        document.getElementById("img1").style.cursor = "default";
        if (b==2) {
            sayi++;
            document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen";
            document.getElementById("a1").innerHTML = "BURAYA";
    document.getElementById("h3b").innerHTML = "tıklayınız";
    document.getElementById("mesajdiv").style.backgroundColor = "green";
          }
          tik++;
}          
}
function fonksiyon2(){
    if(sayi==1){
       
        var c;
        c=Math.floor(Math.random() * 2);  
        document.getElementById("img2").src = c+".jpg" ;
        document.getElementById("img2").style.cursor = "default";
        tik++;
        }
        else if (sayi==0  && tik==2) {
            document.getElementById("alanId").innerHTML = "Kaybettin:(  Yeniden bir oyun oynamak istersen ";
            document.getElementById("a1").innerHTML = "BURAYA";
            document.getElementById("h3b").innerHTML = "tıklayınız";
            document.getElementById("mesajdiv").style.backgroundColor = "red";
            var c;
            c=2; 
            document.getElementById("img2").src = c+".jpg" ;
            document.getElementById("img2").style.cursor = "default";
            tik++;
        }
else{
        var c;
        c=Math.floor(Math.random() * 3);  
        document.getElementById("img2").src = c+".jpg" ;
        document.getElementById("img2").style.cursor = "default";
        if (c==2) {
            sayi++;
            document.getElementById("alanId").innerHTML = "Kazandın!!! Tebrik ederiz :) Yeni bir oyun oynamak istersen";
            document.getElementById("a1").innerHTML = "BURAYA";
    document.getElementById("h3b").innerHTML = "tıklayınız";
    document.getElementById("mesajdiv").style.backgroundColor = "green";
          }
          tik++;
}  
}
