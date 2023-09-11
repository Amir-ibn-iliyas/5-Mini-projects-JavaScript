var istatus = document.querySelector("h5");
var add = document.querySelector("#add");
var check = 0;

add.addEventListener("click", function () {
  if (check == 0) {
    istatus.innerHTML = "Friends ";
    istatus.style.color = "Green";
    add.innerHTML = "Remove Friend";
    check = 1;
  } else {
    istatus.innerHTML = "Strangers ";
    istatus.style.color = "Red";
    add.innerHTML = "Add  Friend";
    check = 0;
  }
});

// second project

var img = document.querySelector("#amir");
var heart = document.querySelector("i");
var he1 = document.querySelector("#he1");
var he2 = document.querySelector("#he2");
var flag = 0;

img.addEventListener("dblclick", function () {
  heart.style.transform = "translate(-50%,-50%) scale(1.3)";
  heart.style.opacity = "0.5";
  he1.style.opacity = "1";
  he1.style.transform = "scale(1.03)";
  he2.style.transform = "scale(0)";

  // heart.style.color="red";
  setTimeout(function () {
    heart.style.opacity = "0";
  }, 1000);
  setTimeout(function () {
    heart.style.transform = "translate(-50%,-50%) scale(0)";
  }, 2000);
  flag = 1;
});
he2.addEventListener("click", function () {
  if (flag == 0) {
    he1.style.transform = "scale(1)";
    he1.style.opacity = "1";
    he2.style.transform = "scale(0)";
    flag = 1;
  }
});
he1.addEventListener("click", function () {
  if (flag == 1) {
    he1.style.transform = "scale(0)";
    he2.style.transform = "scale(1)";
    he1.style.opacity = "0";
    flag = 0;
  }
});

// third project cursor

var body = document.querySelector("#third-pro");
var cursor = document.querySelector(".cursor ");

body.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
});

// forth project

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mousemove", function (dets) {
    val.childNodes[3].style.left = dets.x + "px";
    // val.childNodes[3].style.top= dets.y+"px";
  });
  val.addEventListener("mouseenter", function () {
    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
});

// Fifth project
var arr = [
  {
    dp: "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1571620874594-d6df8b47f708?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://plus.unsplash.com/premium_photo-1678310302056-d51d4239a249?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1574246604907-db69e30ddb97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1571620874594-d6df8b47f708?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bXVzbGltfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
  },
  {
    dp: "https://images.unsplash.com/photo-1631432526080-5abd83dafc8a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    story:
      "https://images.unsplash.com/photo-1637518026117-9d1ac5e73f07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2xpbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
];
var clutter =""
arr.forEach(function(elem,idx){
  clutter+=`<div class="story">
  <img id="${idx}" src="${elem.dp}" alt="">
</div> `
})
var storiyan= document.querySelector(".storiyan");
var fullscreen = document.querySelector(".full-screen");
var fullScreen = document.querySelector(".full-screen");



storiyan.innerHTML= clutter;

storiyan.addEventListener("click",function(dets){
   fullScreen.style.display="block";
   fullScreen.style.backgroundImage=`url(${arr[dets.target.id].story})`
  setTimeout(function(){
    fullScreen.style.display="none";
  },6000)
})

fullScreen.addEventListener("click",function(){
    fullScreen.style.display="none";
})