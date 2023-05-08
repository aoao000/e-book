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
  var images = ["./chiayi_picture/Chiayi_Cover1.png","./chiayi_picture/Chiayi_page1.png", "./chiayi_picture/Chiayi_page2.png", "./chiayi_picture/Chiayi_page3.png", "./chiayi_picture/Chiayi_page4.png","./chiayi_picture/Chiayi_page5.png","./chiayi_picture/Chiayi_page6.png", "./chiayi_picture/Chiayi_page7.png", "./chiayi_picture/Chiayi_page8.png", "./chiayi_picture/Chiayi_page9.png","./chiayi_picture/Chiayi_page10.png",
                "./chiayi_picture/Chiayi_page11.png", "./chiayi_picture/Chiayi_page12.png", "./chiayi_picture/Chiayi_page13.png", "./chiayi_picture/Chiayi_page14.png","./chiayi_picture/Chiayi_page15.png","./chiayi_picture/Chiayi_page16.png", "./chiayi_picture/Chiayi_page17.png", "./chiayi_picture/Chiayi_page18.png", "./chiayi_picture/Chiayi_page19.png","./chiayi_picture/Chiayi_page20.png",
                "./chiayi_picture/Chiayi_page21.png", "./chiayi_picture/Chiayi_page22.png", "./chiayi_picture/Chiayi_page23.png", "./chiayi_picture/Chiayi_page24.png","./chiayi_picture/Chiayi_page25.png","./chiayi_picture/Chiayi_page26.png", "./chiayi_picture/Chiayi_page27.png", "./chiayi_picture/Chiayi_page28.png", "./chiayi_picture/Chiayi_page29.png","./chiayi_picture/Chiayi_page30.png",
                "./chiayi_picture/Chiayi_page31.png", "./chiayi_picture/Chiayi_page32.png", "./chiayi_picture/Chiayi_page33.png", "./chiayi_picture/Chiayi_page34.png","./chiayi_picture/Chiayi_page35.png","./chiayi_picture/Chiayi_page36.png", "./chiayi_picture/Chiayi_page37.png", "./chiayi_picture/Chiayi_Cover2.png"];
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
  var existingDiv12 = null;
  var slider = document.getElementById("slider");
  
  function doSomething(){
    if (imageIndex == 12) {
      if (!existingDiv12) {
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
        // 將div(新創建的元素)指定給全域變數的existingDiv12
        existingDiv12 = div;
      } else {
        //如果有新增過div則直接新增
        slider.appendChild(existingDiv12);
      }
      //判斷若頁數不為12時，則移除存在在slider中的div
    } else if (imageIndex != 12) {
      if (existingDiv12) {
        slider.removeChild(existingDiv12);
        existingDiv12 = null;
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




  