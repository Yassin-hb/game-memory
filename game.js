const play = document.getElementById("span");
const butt = document.getElementById("butt");



play.addEventListener("click" , (eo) => {
  butt.style.display = "none";
});
// let yassin =prompt("whats your name");
 




let duration = 1000;

let blockcontiner = document.querySelector(".continer");

let blocks = Array.from(blockcontiner.children);

let orderRange = [...Array(blocks.length).keys()];
// console.log(orderRange);
shuffle(orderRange);
// console.log(orderRange)

//  add order css property to game blocks

blocks.forEach((blocks , index) => {
  blocks.style.order = orderRange[index] ;
  blocks.addEventListener("click" ,function () {
     flipBlock(blocks);
    
  });
});
function flipBlock(selectedBlock) {
  selectedBlock.classList.add("is-flipped");

let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains("is-flipped"));
 if (allFlippedBlocks.length === 2) {
  stopclick();
  checkMatchedBlocks(allFlippedBlocks[0],allFlippedBlocks[1])
 
} 
};
function checkMatchedBlocks(firstBlock, secondBlock) {
 
  if (firstBlock.dataset.technloge === secondBlock.dataset.technloge) {
    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

  }else{
    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');
    
  } 
};


function stopclick(eo) {
  blockcontiner.classList.add("no-click");

  setTimeout(()=> {

    blockcontiner.classList.remove("no-click");
  },1000);
 
};
function shuffle(Array){
  let current = Array.length,temp,random;
 
while (current >0){
  random = Math.floor(Math.random() * current);
  current --;
 temp = Array[current];
 Array[current]= Array[random];
 Array[random] = temp
}
return Array;
};
 

 
