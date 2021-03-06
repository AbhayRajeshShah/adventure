
var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");
var goalPic = document.createElement("img");
var facingLeft = document.createElement("img");
var heartPic=document.createElement("img");
var lavaPic = document.createElement("img");
var batPic= document.createElement("img");
var batDownPic= document.createElement("img");
var batAbovePic= document.createElement("img");
var projectilePic=document.createElement("img");
var projectileLeftPic=document.createElement("img");
var zombieLeftPic=document.createElement("img");
var zombiePic=document.createElement("img");
var ammoPic=document.createElement("img");
var projectileUpPic=document.createElement("img");
var projectileDownPic=document.createElement("img");
var shooterZombiePic=document.createElement("img");
var shooterZombieLeftPic=document.createElement("img");
var obsidianPic=document.createElement("img");
var realObsidianPic=document.createElement("img");
var firePic=document.createElement("img");
var waterPic=document.createElement("img");
var axePic=document.createElement("img");
var scrollPic=document.createElement("img");
var scrollPic2=document.createElement("img");
var riverPic=document.createElement("img");
var freezePic=document.createElement("img");
var picsToLoad = 0; // set automatically based on imageList in loadImages()


function countLoadedImagesAndLaunchIfReady() {
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0) {
		imageLoadingDoneSoStartGame();
	}
}

function beginLoadingImage(imgVar, fileName) {
	imgVar.onload = countLoadedImagesAndLaunchIfReady;
	imgVar.src = "images/"+fileName;
}

function loadImages() {
	// next line is just an example, not using, will remove later
	var dataSet = {varName: carPic, theFile: "player1car.png"};

	var imageList = [
		{varName: carPic, theFile: "player1car.png"},
		{varName: roadPic, theFile: "world_road.png"},
		{varName: wallPic, theFile: "world_wall.png"},
		{varName: treePic, theFile: "world_tree.png"},
		{varName: goalPic, theFile: "world_goal.png"},
		{varName: flagPic, theFile: "world_flag.png"},
		{varName: facingLeft, theFile: "player1carleft.png"},
		{varName: heartPic, theFile: "heart.png"},
		{varName: lavaPic, theFile: "thorn.png"},
		{varName: batPic, theFile: "bat.png"},
		{varName: batDownPic, theFile: "bat-down.png"},
		{varName: batAbovePic, theFile: "bat-medium.png"},
		{varName: projectilePic, theFile: "projectile.png"},
		{varName: projectileLeftPic, theFile: "projectileleft.png"},
		{varName: projectileUpPic, theFile: "projectileup.png"},
		{varName: projectileDownPic, theFile: "projectiledown.png"},
		{varName: zombieLeftPic, theFile: "zombie.png"},
		{varName: zombiePic, theFile: "zombieright.png"},
		{varName: ammoPic, theFile: "ammoCount.png"},
		{varName: shooterZombieLeftPic, theFile: "shooterZombieLeft.png"},
		{varName: shooterZombiePic, theFile: "shooterZombie.png"},
		{varName: obsidianPic, theFile: "obsidian.png"},
		{varName: realObsidianPic, theFile: "obsidian1.png"},
		{varName: firePic, theFile: "fire.png"},
		{varName: waterPic, theFile: "water.png"},
		{varName: scrollPic, theFile: "scroll.png"},
		{varName: axePic, theFile: "diamond pickaxe.png"},
		{varName: scrollPic2, theFile: "scroll2.png"},
		{varName: riverPic, theFile: "river.png"},
		{varName: freezePic, theFile: "freeze.png"},
		];

	picsToLoad = imageList.length;

	for(var i=0;i<imageList.length;i++) {
		beginLoadingImage(imageList[i].varName, imageList[i].theFile);
	}

}