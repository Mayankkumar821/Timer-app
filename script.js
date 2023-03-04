

var timeint=NULL

function getdata(){
    let a= parseInt(document.getElementById('hours').value);
    let b= parseInt(document.getElementById('minutes').value);
let c= parseInt(document.getElementById('seconds').value);

 let ts = a* 3600 + b * 60 + c;



if (ts <= 0) {
            alert('Please enter a valid time');
             return;
        }
        timeint=setInterval(()=>
        {

          const  hleft = Math.floor(ts / 3600);
           const     mleft =Math.floor ((ts % 3600)/60);
             const       sleft =ts % 60;
                   document.getElementById('cc').innerText= hleft + " : "+ mleft +" : "+ sleft;
                
                   if (ts == 0) {
                    document.getElementById('cc').innerText = 'Times up!';
                    document.getElementById('audio').play();
                              clearInterval(timeint);
                              return;
                              }
                               else {
                                          ts--;
                                       }
        },1000)

}
function resettime()
{        document.getElementById('audio').pause();
    document.getElementById('cc').innerText = 'Timer';
     clearInterval(timeint);
  
}


 
     
    

 
  