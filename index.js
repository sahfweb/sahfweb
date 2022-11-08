//  navbar  //

function opensidemenu(){
  document.getElementById('navbar').style.width="22rem";
  document.getElementById('crossbtn').style.right="5rem";


}

function closessidemenu(){
  document.getElementById('navbar').style.width="0";
  document.getElementById('crossbtn').style.right="0px";
}

//testimonial //

/*
let userTexts = document.getElementsByClassName("user-textim");
let userPics = document.getElementsByClassName(" user-pic");

function showReview(){
  for(user-pic of userPics){
      user-pic.classlist.remove("active-pic");
  }
  for(user-textim of userTexts){
      user-text.classlist.remove("active-text");
  }
  let i = Array.from(userpics).indexOf(Event.target);

  userpics[i].classList.add("active-pic");
  usertexts[i].classList.add("active-text");

}

*/