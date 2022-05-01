var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 사진
var img1 = new Image();
img1.src = "https://user-images.githubusercontent.com/91381230/166097501-77374164-5182-4721-af3c-3a10859bbade.JPG"

// 캐릭터
let Rion = {
    x: 460,
    y: 600,
    width : 80,
    height : 200,
    draw(){
        ctx.drawImage(img1,this.x,this.y,this.width,this.height)
    }
    
}

// 장애물생성
class silver {
    constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = height;
}
    draw() {
            ctx.fillStyle ='red'; 
            ctx.fillRect(this.x,this.y,this.width,this.height);
            
        }
}

// 장애물 생성에 대한 키보드 이벤트
window.addEventListener("keydown", create, false);
// 엔터를 칠경우 게임이 시작됨과 동시에 장애물 생성
function create(e) {
    switch(e.keyCode) {
        case 13 :
            createSilverTime = 1
            setInterval(function(){
            
            console.log(createSilverTime)
            if (0<=createSilverTime && createSilverTime<=2){
                console.log('a')
                
                silver1 = new silver(Math.random() * 700,0,40,10)
                silver1.draw()
            }
                ctx.clearRect(silver1.x,silver1.y-10,40,10)
                setInterval(function(){
                
                silver1.y +=10
                silver1.draw()
                ctx.clearRect(silver1.x,silver1.y-10,silver.width,silver)
            },1000)
  
        },100   )


    }
}

alert('Enter를 눌러야 게임이 시작 됩니다!')

window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
    switch(e.keyCode) {
        case 13 :
        Rion.draw()
        break;
        /*left*/
        case 37:
            Rion.x-=10
            
            ctx.clearRect(Rion.x+10,Rion.y,Rion.width,Rion.height)
            Rion.draw();
            if(Rion.x==-10){
                Rion.x =0
                Rion.draw()
            }
            
            if(Rion.x==930){
            Rion.x = 920
            Rion.draw()
        }
        break;
		
        /*right*/
        case 39:
        Rion.x+=10

        ctx.clearRect(Rion.x-10,Rion.y,Rion.width,Rion.height)
        Rion.draw();
        if(Rion.x==-10){
            Rion.x =0
            Rion.draw()
        }

        if(Rion.x==890){
            Rion.x = 880
            Rion.draw()
        }

        //right
		break;
	}	
}



