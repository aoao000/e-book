window.addEventListener('load', function () {
    let counter = 0;
    setInterval(() => {
        if (counter == 3) {
            clearInterval();
            document.getElementById("loading_start").style.opacity = "0";
            document.getElementById("loading_start").style.zIndex = "-10000";
        }
        else {
            counter += 1;
        }
    }, 1000)
  })
  
  
  
  
  var imageIndex = 0;
  var numberPage = 1;
  var images = ["./tainan_picture/Tainan_Cover1.png","./tainan_picture/Tainan_page1.png", "./tainan_picture/Tainan_page2.png", "./tainan_picture/Tainan_page3.png", "./tainan_picture/Tainan_page4.png","./tainan_picture/Tainan_page5.png","./tainan_picture/Tainan_page6.png", "./tainan_picture/Tainan_page7.png", "./tainan_picture/Tainan_page8.png", "./tainan_picture/Tainan_page9.png","./tainan_picture/Tainan_page10.png",
                "./tainan_picture/Tainan_page11.png", "./tainan_picture/Tainan_page12.png", "./tainan_picture/Tainan_page13.png", "./tainan_picture/Tainan_page14.png","./tainan_picture/Tainan_page15.png","./tainan_picture/Tainan_page16.png", "./tainan_picture/Tainan_page17.png", "./tainan_picture/Tainan_page18.png", "./tainan_picture/Tainan_page19.png","./tainan_picture/Tainan_page20.png",
                "./tainan_picture/Tainan_page21.png", "./tainan_picture/Tainan_page22.png", "./tainan_picture/Tainan_page23.png", "./tainan_picture/Tainan_page24.png","./tainan_picture/Tainan_page25.png","./tainan_picture/Tainan_page26.png", "./tainan_picture/Tainan_page27.png", "./tainan_picture/Tainan_page28.png", "./tainan_picture/Tainan_page29.png","./tainan_picture/Tainan_page30.png",
                "./tainan_picture/Tainan_page31.png", "./tainan_picture/Tainan_page32.png", "./tainan_picture/Tainan_page33.png", "./tainan_picture/Tainan_page34.png","./tainan_picture/Tainan_page35.png","./tainan_picture/Tainan_page36.png", "./tainan_picture/Tainan_page37.png", "./tainan_picture/Tainan_page38.png","./tainan_picture/Tainan_page39.png","./tainan_picture/Tainan_page40.png",
                "./tainan_picture/Tainan_page41.png","./tainan_picture/Tainan_page42.png","./tainan_picture/Tainan_page43.png","./tainan_picture/Tainan_page44.png","./tainan_picture/Tainan_page45.png","./tainan_picture/Tainan_page46.png","./tainan_picture/Tainan_page47.png","./tainan_picture/Tainan_page48.png","./tainan_picture/Tainan_Cover2.png"];
  var changeImage = document.getElementById("myImage");
  var changeNumber = document.getElementById("numberPage");
  var pageNumber = document.getElementById("pageNumber");
  var showPage = document.getElementById("showPage");
  
  showPage.onclick = function(){
    pageNumber.classList.toggle('active');
  }
  
  //前一頁
  function prevImage() {
    imageIndex--;
    numberPage--;
    if(numberPage <= 1){
      numberPage = 1;
      changeNumber.innerHTML = 1;
    }
    if (imageIndex < 0) {
      imageIndex = 0;
      alert("已經到頂了!!");
    }
    
    console.log(imageIndex);
    changeImage.style.opacity = 0;
    setTimeout(function(){
      changeImage.src = images[imageIndex];
      changeNumber.innerHTML = numberPage;
      changeImage.style.opacity = 1;
      }, 500);
      doSomething();
      loooad();
  }
  
  //下一頁
  function nextImage() {
    imageIndex++;
    numberPage++;
    
    if (imageIndex >= images.length) {
      imageIndex = images.length -1;
      alert("已經到底了!!");
    }
    if(numberPage >= 37){
      numberPage = 37;
      changeNumber.innerHTML = numberPage;
    }
    console.log(imageIndex);
    changeImage.style.opacity = 0;
  
    setTimeout(function(){
      changeImage.src = images[imageIndex];
      changeNumber.innerHTML = numberPage;
      changeImage.style.opacity = 1;
      }, 500);
    doSomething();
    loooad();
  }
  
  // 動態生成按鈕
  for (var i = 1; i <= images.length; i++) {
    var button = document.createElement("button");
    button.innerHTML = i;
    button.setAttribute("onclick", "goToPage(" + i + ")");
    pageNumber.appendChild(button);
  }
  
  // 跳轉到指定頁面的函數
  function goToPage(pageNumber) {
    imageIndex = pageNumber - 1;
    numberPage = pageNumber;
    changeImage.style.opacity = 0;
    setTimeout(function(){
      changeImage.src = images[imageIndex];
      changeNumber.innerHTML = numberPage;
      changeImage.style.opacity = 1;
      }, 500);
    doSomething();
    loooad();
  }
  var existingDiv11 = null;
  var slider = document.getElementById("slider");
  
  function doSomething(){
    if (imageIndex == 11) {
      if (!existingDiv11) {
        var div = document.createElement("div");
        var aLink = document.createElement("a");
        div.id = "myDiv";
        aLink.classList.add("alink");
        aLink.target = "_blank";
        aLink.href = "picture_gallery.html";
        div.appendChild(aLink);
        div.classList.add("#myDiv");
        //將div新增到slider裡面
        slider.appendChild(div);
        // 將div(新創建的元素)指定給全域變數的existingDiv11
        existingDiv11 = div;
      } else {
        //如果有新增過div則直接新增
        slider.appendChild(existingDiv11);
      }
      //判斷若頁數不為11時，則移除存在在slider中的div
    } else if (imageIndex != 11) {
      if (existingDiv11) {
        slider.removeChild(existingDiv11);
        existingDiv11 = null;
      }
    }
  }
  
var test = document.getElementById("test");
var loader = document.createElement("div");
loader.id = "loader";
loader.innerHTML = "Loading...";


function loooad(){
  test.appendChild(loader);
  changeImage.addEventListener("load", function() {
    setTimeout(function(){
      test.removeChild(loader);
      }, 1000);
  });
}

  