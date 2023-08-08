let flag = 1
let p1=0
let p2=0
document.querySelector('.dice1').addEventListener('click', handle1)
function handle1(){
     if(flag==1){
         let rand = Math.trunc(Math.random()*7);
         if(rand<6){
            document.getElementById('d2').style.display='flex';
            document.getElementById('d1').style.display='none';
           }
         if(rand==0)rand=1
         document.querySelector('.dice1').innerHTML = rand;

         if(rand==6)flag=1
         else{ flag=2}
         
         p1=p1+rand;
         if(p1>100){
            p1=p1-rand
         }
         if(p1==100){
            p1=100;
            document.getElementById('dis').style.display='none'
            document.getElementById('blue').style.display='flex'
            document.getElementById('d2').style.display='none'
            document.getElementById('d1').style.display='flex'
         }
         console.log('player blue=',p1);
     }
        let count = 1
        for(count; count<=100; count++){
         if(p1===p2){
            document.getElementById(`g${p1}`).style.backgroundColor='yellow'
         }
         else if(p1===count){
            document.getElementById(`g${count}`).style.backgroundColor='rgb(0, 51, 255)'
            break;
         }
        }
        if(p1<=p2){
         for(let i=1;i<p1;i++){
            document.getElementById(`g${i}`).style.backgroundColor='black';
         }
        }
        else if(p2<=p1){
         for(let i=1;i<p2;i++){
            document.getElementById(`g${i}`).style.backgroundColor='black';
         }
        }
        if(p1>p2){
        for(let i=p2+1;i<p1;i++){
         document.getElementById(`g${i}`).style.backgroundColor='black';
         }
      }
      else{
         for(let i=p1+1;i<p2;i++){
            document.getElementById(`g${i}`).style.backgroundColor='black';
            }
      }
    }

document.querySelector('.dice2').addEventListener('click', handle2)
function handle2(){
    if(flag==2){
     let rand1 = Math.trunc(Math.random()*7);
     if(rand1<6){
      document.getElementById('d1').style.display='flex';
      document.getElementById('d2').style.display='none';
     }
     if(rand1==0)rand1=1
     document.querySelector('.dice2').innerHTML= rand1;

     if(rand1==6)flag=2
     else{ flag=1}
     p2=p2+rand1
     if(p2>100){
        p2=p2-rand1
     }
     if(p2==100){
        p2=100;
        document.getElementById('dis').style.display='none'
        document.getElementById('red').style.display='flex'
        document.getElementById('d1').style.display='none'
        document.getElementById('d2').style.display='flex'
     }
     console.log('player red=',p2);
    }
     let count = 1
        for(count; count<=100; count++){
         if(p1===p2){
            document.getElementById(`g${p1}`).style.backgroundColor='yellow'
         }
         else if(p2===count){
            document.getElementById(`g${count}`).style.backgroundColor='rgb(255, 0, 0)'
            break;
         }
        }
        if(p2<=p1){
         for(let i=1;i<p2;i++){
            document.getElementById(`g${i}`).style.backgroundColor='black';
         }
        }
        else if(p1<=p2){
         for(let i=1;i<p1;i++){
            document.getElementById(`g${i}`).style.backgroundColor='black';
         }
        }
        if(p1>p2){
         for(let i=p2+1;i<p1;i++){
          document.getElementById(`g${i}`).style.backgroundColor='black';
          }
       }
       else{
          for(let i=p1+1;i<p2;i++){
             document.getElementById(`g${i}`).style.backgroundColor='black';
             }
       }

   }
