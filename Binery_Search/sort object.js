var a=[1,2,1,1,2,2]
var obj={}
for (let i = 0; i < a.length; i++) {
   if(obj[a[i]]!=undefined){
       obj[a[i]]+=1
   }else{
    obj[a[i]]=1
   } 
}
var ans=Object.entries(obj).sort((a,b)=>b[1]-a[1])
console.log(...ans);