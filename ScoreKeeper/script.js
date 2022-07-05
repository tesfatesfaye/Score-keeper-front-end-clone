const select=document.querySelector('#dropdown')
let options=select.options[select.selectedIndex]
let vale = options.value
const firstButton=document.querySelector('#playone')
const secondButton=document.querySelector('#playtwo')
const reset=document.querySelector('#reset')
const scoreHolder=document.querySelector('#scoreHolder')
let playerOneScore=0;
let playerTwoScore=0;
const playeroneH2=document.createElement('h2')
playeroneH2.innerText=playerOneScore
playeroneH2.classList.add('right')
scoreHolder.append(playeroneH2)
const to=document.createElement('h2')
to.innerText="to"
scoreHolder.append(to)

const playertwoH2=document.createElement('h2')
playertwoH2.innerText=playerTwoScore
playertwoH2.classList.add('left')
scoreHolder.append(playertwoH2)
firstButton.addEventListener('click',()=>{
playerOneScore+=1
playeroneH2.innerText=playerOneScore
if(playerOneScore>=vale) {
    playeroneH2.style.color="green"
    playertwoH2.style.color="red"
    firstButton.disabled=true
        secondButton.disabled=true
}
})
secondButton.addEventListener('click',()=>{
    playerTwoScore+=1
    playertwoH2.innerText=playerTwoScore
    if(playerTwoScore>=vale) {
        playeroneH2.style.color="red"
        playertwoH2.style.color="green"
        firstButton.disabled=true
        secondButton.disabled=true
    }
    
    })

reset.addEventListener('click',()=>{

playerOneScore=0;
playeroneH2.innerText=playerOneScore
playerTwoScore=0;
playertwoH2.innerText=playerTwoScore
firstButton.disabled=false
        secondButton.disabled=false
        playeroneH2.style.color="black"
        playertwoH2.style.color="black"

})
select.addEventListener('click', l=>{
 if(l.target.value>playerOneScore && l.target.value>playerTwoScore){
    firstButton.disabled=false
    secondButton.disabled=false
    vale=l.target.value
    playeroneH2.style.color="black"
        playertwoH2.style.color="black"
 }
})

//const testMe=document.querySelector('#test-me')
//testMe.innerText=12
//testMe.style.color="blue"
//console.log(testMe.style.color)


// const changeBackground=(color,duration)=>{
//     const rand=Math.floor(Math.random()*15)+1 
//       return new Promise((resolve,reject)=>{
//           setTimeout(()=>{
//                   if(rand>2){
//                document.body.style.background= color;
//                   resolve(`Your background color has been change to ${color}`)
//                }
//                   else{
//                   reject('fail')
//                   }
//           },duration)
//      }) 
//   }// creates the promise 
  
  
   
//   changeBackground('red',1000)
//   .then((data)=>{
//        changeBackground('orange',1000)
//       console.log(data)    
//   })
//   .then((data)=> changeBackground('red',1000))
//   .then((data)=> changeBackground('green',1000))
//   .then((data)=> changeBackground('blue',1000))
//   .then((data)=> changeBackground('purple',1000))
//   .catch((err)=>console.log(err));


async function changeBackground1 (color,duration){
    const base=1000
    setTimeout(()=>{
        if(duration+base<=5000){
            document.body.style.background=color
            return `${color} is awesome`
            
        } 
        throw `too long of a duration`
    },duration+base)
}
async function tryme(){
    try{
await changeBackground1("blue",2000)
await changeBackground1('red',5000)
}
    catch(e){
    console.log("Caught an error")

}
}
//tryme()

