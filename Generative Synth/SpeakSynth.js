
var beatOnly, beatSD;
var beatChoice;

var textChoice, beat;

var oz,ox,oc,ov,ob,on,om,oa,os,od,onf,og,oh,oj,ok,ol,oq,ow,oe,or,ot,oy,ou,oi,oo,op;
var sz,sx,sc,sv,sb,sn,sm,sa,ss,sd,sf,sg,sh,sj,sk,sl,sq,sw,se,sr,st,sy,su,si,so,sp;

var gameState = 0;

var textChoiceControl = 0;


function preload(){
	beatOnly = loadSound('beats/only.mp3');
	beatSD = loadSound('beats/sd.mp3');

	oz = loadSound('assets/oz.mp3');
	ox = loadSound('assets/ox.mp3');
	oc = loadSound('assets/oc.mp3');
	ov = loadSound('assets/ov.mp3');
	ob = loadSound('assets/ob.mp3');
	on = loadSound('assets/on.mp3');
	om = loadSound('assets/om.mp3');
	oa = loadSound('assets/oa.mp3');
	os = loadSound('assets/os.mp3');
	od = loadSound('assets/od.mp3');
	onf = loadSound('assets/of.mp3');
	og = loadSound('assets/og.mp3');
	oh = loadSound('assets/oh.mp3');
	oj = loadSound('assets/oj.mp3');
	ok = loadSound('assets/ok.mp3');
	ol = loadSound('assets/ol.mp3');
	oq = loadSound('assets/oq.mp3');
	ow = loadSound('assets/ow.mp3');
	oe = loadSound('assets/oe.mp3');
	or = loadSound('assets/or.mp3');
	ot = loadSound('assets/ot.mp3');
	oy = loadSound('assets/oy.mp3');
	ou = loadSound('assets/ou.mp3');
	oi = loadSound('assets/oi.mp3');
	oo = loadSound('assets/oo.mp3');
	op = loadSound('assets/op.mp3');

	sz = loadSound('assets/sz.mp3');
	sx = loadSound('assets/sx.mp3');
	sc = loadSound('assets/sc.mp3');
	sv = loadSound('assets/sv.mp3');
	sb = loadSound('assets/sb.mp3');
	sn = loadSound('assets/sn.mp3');
	sm = loadSound('assets/sm.mp3');
	sa = loadSound('assets/sa.mp3');
	ss = loadSound('assets/ss.mp3');
	sd = loadSound('assets/sd.mp3');
	sf = loadSound('assets/sf.mp3');
	sg = loadSound('assets/sg.mp3');
	sh = loadSound('assets/sh.mp3');
	sj = loadSound('assets/sj.mp3');
	sk = loadSound('assets/sk.mp3');
	sl = loadSound('assets/sl.mp3');
	sq = loadSound('assets/sq.mp3');
	sw = loadSound('assets/sw.mp3');
	se = loadSound('assets/se.mp3');
	sr = loadSound('assets/sr.mp3');
	st = loadSound('assets/st.mp3');
	sy = loadSound('assets/sy.mp3');
	su = loadSound('assets/su.mp3');
	si = loadSound('assets/si.mp3');
	so = loadSound('assets/so.mp3');
	sp = loadSound('assets/sp.mp3');

}
//Setup
function setup(){
	createCanvas(800,600);
	background(0);

}

//The loop, basically controlling the gamestate variable
function draw(){
	
	if(gameState == 0) {
		splashScreen();
	}
	else if (gameState == 1) chooseText ();
	else if (gameState == 2) {
		playOnly();
		beatOnly.play();
		noLoop();
	}
	else if (gameState == 3) {
		playSD();
		beatSD.play();
		noLoop();
	}
}

function splashScreen(){

	background(0);

	textAlign(CENTER);
	textSize(45);
	fill(255);
	text("INDUSTRIAL SYNTHESIZER", 400, 200);
	text("Click To Start", 400,400);

	if (mouseIsPressed && (mouseX > 0) && (mouseX < 800) && (mouseY > 0) && (mouseY < 600)){
		gameState = 1;
	}else gameState = 0;
}

function chooseText(){
	
	var bx1 = 400 - 125;
	var bx2 = 400 + 125;
	var b1y1 = 250 - 50;
	var b1y2 = 250 + 50;
	var b2y1 = 400 - 50;
	var b2y2 = 400 + 50;

	background(0);

	rectMode(CENTER);

	fill(255);
	rect(400,250,250,100);

	fill(255);
	rect(400,400,250,100);

	textAlign(CENTER);

	textSize(40);
	fill(255);
	text("CHOOSE YOUR SONG", 400, 120);

	textSize(32);
	fill(0);
	text("ONLY",400,260);
	textSize(22);
	fill(0);
	text("SOMEWHAT DAMAGED",400,410);

	if (mouseIsPressed && (mouseX >= bx1) && (mouseX <= bx2) && (mouseY >= b1y1) && (mouseY <= b1y2)) gameState = 2;
	if (mouseIsPressed && (mouseX >= bx1) && (mouseX <= bx2) && (mouseY >= b2y1) && (mouseY <= b2y2)) gameState = 3;
}

function playOnly(){
	background(0);
	fill(255);
	text("Every Letter On The Keyboard Triggers A Word", 400,150);
	text("Type From Left To Right To Use The Original Sequence", 400,250);
	text("Or Just Play Around And See What Sounds Good", 400, 350);
	text("Use 1 To Stop The Track and 0 To Start It Again",400,450);


	beatChoice = 1;

}

function playSD(){
	background(0);
	fill(255);
	text("Every Letter On The Keyboard Triggers A Word", 400,150);
	text("Type From Left To Right To Use The Original Sequence", 400,250);
	text("Or Just Play Around And See What Sounds Good", 400, 350);
	text("Use 1 To Stop The Track and 0 To Start It Again",400,450);


	beatChoice = 2;

}

function restart(){
	gameState = 0;
}


function keyTyped(){
	if(gameState == 2){
		if (key === 'z') oz.play();
		else if (key === 'x') ox.play();
		else if (key === 'c') oc.play();
		else if (key === 'v') ov.play();
		else if (key === 'b') ob.play();
		else if (key === 'n') on.play();
		else if (key === 'm') om.play();
		else if (key === 'a') oa.play();
		else if (key === 's') os.play();
		else if (key === 'd') od.play();
		else if (key === 'f') onf.play();
		else if (key === 'g') og.play();
		else if (key === 'h') oh.play();
		else if (key === 'j') oj.play();
		else if (key === 'k') ok.play();
		else if (key === 'l') ol.play();
		else if (key === 'q') oq.play();
		else if (key === 'w') ow.play();
		else if (key === 'e') oe.play();
		else if (key === 'r') or.play();
		else if (key === 't') ot.play();
		else if (key === 'y') oy.play();
		else if (key === 'u') ou.play();
		else if (key === 'i') oi.play();
		else if (key === 'o') oo.play();
		else if (key === 'p') op.play();
		
		if (key === '1'){
			beatOnly.stop();
		}
		if (key === '0') beatOnly.play();
	}
	if(gameState == 3){
		if (key === 'z') sz.play();
		else if (key === 'x') sx.play();
		else if (key === 'c') sc.play();
		else if (key === 'v') sv.play();
		else if (key === 'b') sb.play();
		else if (key === 'n') sn.play();
		else if (key === 'm') sm.play();
		else if (key === 'a') sa.play();
		else if (key === 's') ss.play();
		else if (key === 'd') sd.play();
		else if (key === 'f') sf.play();
		else if (key === 'g') sg.play();
		else if (key === 'h') sh.play();
		else if (key === 'j') sj.play();
		else if (key === 'k') sk.play();
		else if (key === 'l') sl.play();
		else if (key === 'q') sq.play();
		else if (key === 'w') sw.play();
		else if (key === 'e') se.play();
		else if (key === 'r') sr.play();
		else if (key === 't') st.play();
		else if (key === 'y') sy.play();
		else if (key === 'u') su.play();
		else if (key === 'i') si.play();
		else if (key === 'o') so.play();
		else if (key === 'p') sp.play();

		if (key === '1'){
			beatSD.stop();
		}
		if (key === '0') beatSD.play();
	}
 if (key === '/') restart();	
}