function converttoint(num){
  if(num===0){
    return ""
  }
  let size=1
  let iteration=2
  const parent=[]
  const mainArray=[]
  let child=[]
  const one=1
  let add=1
  let filter1=[]
  let filter2=[]
  const two=2
  parent.push(child)
  child=[]
  
  for(let i=0;i<num;i++){
  for(let k=0;k<iteration;k++){
  for(let j=0;j<size;j++){
    child.push(one)
  }
  
  parent.push(child)
  child=[]
  }
  
  add++
  iteration = iteration+add
  size++
  
  }
  
  for(let i=0; i<=num;i++){
  mainArray.push(parent[i])
  
  }1
  for(let p=1;p<num;p++){
  if(mainArray[p].length>mainArray[p-1].length){
    filter1.push(p)
  }
  
  }
  
  if(num==1){
    return '1'
  }
  if(num==2){
    return'2'
  }


filter1.map((x)=>{
filter2.push(x+1)

})
for(let u=0;u<filter2;u++){
let counter5=filter2[u]
mainArray[counter5].lastIndexOf=2

}



  return mainArray[2].lastIndexOf;
  
  
  
  }