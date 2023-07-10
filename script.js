//getting all required elements//
const start_btn= document.querySelector(".start_btn button");
const info_box= document.querySelector(".info_box");
const exit_btn= info_box.querySelector(".button .quit");
const continue_btn= info_box.querySelector(".button .restart");
const quiz_box= info_box.querySelector(".quiz_box");

//if start quiz btn clicked
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box
}

//if exit btn clicked
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
}

//if continue  btn clicked
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");//hide the info box
    quiz_box.classList.remove("activeQuiz");//show the quiz box
}