var file = "";
var topText = "";
var url_l = ["https://i.imgflip.com/374atd.png", "https://en.meming.world/images/en/thumb/d/d0/Crying_Cat.jpg/300px-Crying_Cat.jpg", "https://i.imgflip.com/2dq3nf.jpg",
"https://editdit-assets.s3.amazonaws.com/image/Scared-Cat.png", "https://i.imgflip.com/1w9tx5.jpg", "https://i.imgflip.com/kc33l.jpg", "https://pics.me.me/thumb_cat-meme-templates-imgflip-51943420.png",
"https://i.pinimg.com/originals/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg", "https://imgflip.com/s/meme/Grumpy-Cat.jpg", "https://s.keepmeme.com/files/en_posts/20201027/cat-crying-when-interviewed-with-a-microphone-meme.jpg",
"https://api.time.com/wp-content/uploads/2020/01/smudge-the-cat-interview.jpg", "https://i.imgflip.com/77km4.jpg"];
var lol_dict = {"'": ["\""], "BECAUSE": ["CUZ"], "CAN I":["I CAN"], "HAVE": ["HAS"], " A": [""], "IS": ["IZ"], " IT": [""], "LIKE": ["LIEK"], "SE": ["Z"], "OO":["U"], 
				"THAT":["TAHT"],"AID":["ED"], "TO":["2"], "YOU":["U"], "OF":["OV"], "ITS":["IZ"], "COULD":["CUD"], "OVE":["UV"], "KNOW":["KNOE"], "COMMUNICATE": ["SPEEK"],
				"SPEAK": ["SPEEK"], "TH":["F"], "JUST":["JUS"], "WANT":["WANTS"], "NEED":["NEEDS"], "GIVE": ["GIV"], "MY":["MAH"], "THE": ["TEH"], "OTHER":["OTHR"], 
				"WHO":["HOO"], "PLEASE": ["PLZ"], "KITTY": ["KITTEH"], "BABY": ["BAYBEH"], "ATE" :["EATED"], "HAPPY": ["HAPPEE"], "NOTHING": ["NOTHIN"], "ING": ["N"], "!": ["!!1"],
				"UM":["AM"], "TION " :["SHUN"], "CIOUS ":["SHUS"], "BOARD": ["BORD"], "BORED": ["BORD"], "LE": ["L"], "THING": ["TING"], "ELP": ["ALP"], "FOR": ["4"],
				"E" : ["ES"], "CS": ["X"], "AM": ["ARE"], "AND": ["N"], "HI" :["HAI"],  "UFF": ["UFS"], "BYE": ["KTHXBYE"], "MONDAY": ["CATURDAY"], "TUESDAY": ["CATURDAY"],
				"WEDNESDAY": ["CATURDAY"], "THURSDAY":["CATURDAY"], "FRIDAY": ["CATURDAY"], "SATURDAY": ["CATURDAY"], "SUNDAY": ["CATURDAY"], "BOY": ["BOI"], "ALS": ["ULZ"],
				"IE": ["EE"], "REALLY": ["RLY"], "ACK" :["AK"], "PHY": ["FEE"], "GIRL": ["GURL"], "ER": ["AH"], "WORDS": ["WURDS"]};

	
function adjust_width(){
	document.getElementById("top-text-on-image").style.width = document.getElementById("main-img-img").width+"px";
	document.getElementById("bottom-text-on-image").style.width = document.getElementById("main-img-img").width+"px";
}
adjust_width();
function drawImages (){
    for(i = 0; i < url_l.length; i++){
        var crate_img = document.createElement("img");
        crate_img.setAttribute("src", url_l[i]);
        var n_img = document.getElementById("m-img-box").appendChild(crate_img);
		n_img.className = "mini-img-box-img";
    }
}
drawImages();
function lolcat_text(s){
	s = s.toUpperCase();
	for (var key in lol_dict){
		s = s.replace(key, lol_dict[key][0]);
	}
	return s;
}
document.getElementById("m-img-box").onclick = function(){
	document.getElementById("main-img").getElementsByTagName('img')[0].src= event.target.src;
	adjust_width();
};


document.getElementById("myFile").onchange = function(){
	const file =  event.target.files[0];
	const reader = new FileReader();
	reader.onload = function(e){
		document.getElementById("main-img-img").src= reader.result;
		document.getElementById("top-text-on-image").style.width = document.getElementById("main-img-img").width+"px";
	document.getElementById("bottom-text-on-image").style.width = document.getElementById("main-img-img").width+"px";
		};
	if (file) {
		reader.readAsDataURL(file);
	}
	document.getElementById("myFile").value = "";
	adjust_width();
};

document.getElementById("top-text").oninput = function(){
		document.getElementById("top-text-on-image").innerHTML= document.getElementById("top-text").value;
		var num_chars = document.getElementById("top-text").value.length; 
		var add_size =num_chars<10?0:num_chars-10;
		document.getElementById("top-text-on-image").style.fontSize = 50-add_size*0.5 + "px";
};

document.getElementById("bottom-text").oninput = function(){
		document.getElementById("bottom-text-on-image").innerHTML= document.getElementById("bottom-text").value;
		var num_chars = document.getElementById("top-text").value.length; 
		var add_size =num_chars<10?0:num_chars-10;
		document.getElementById("bottom-text-on-image").style.fontSize = 50-add_size*0.5 + "px";
};

document.getElementById("gen-box").onclick = function(){
	document.getElementById("bottom-text-on-image").innerHTML = lolcat_text(String(document.getElementById("bottom-text").value));
	document.getElementById("top-text-on-image").innerHTML = lolcat_text(String(document.getElementById("top-text").value));
};

function saveAs(uri, filename) {
    var link = document.createElement('a');

    if (typeof link.download === 'string') {

        link.href = uri;
        link.download = filename;

        //Firefox requires the link to be in the body
        document.body.appendChild(link);

        //simulate click
        link.click();

        //remove the link when done
        document.body.removeChild(link);

    } else {

        window.open(uri);

    }
}

document.getElementById("save-box").onclick = function(){
	document.getElementById("p").innerHTML = "New";
	html2canvas(document.getElementById("main-img"), {useCORS: true}, {allowTaint: true}).then(function(canvas) 
	{
    saveAs(canvas.toDataURL(), 'lolcat_meme.jpg');

	}).catch(function(e){
    //error handling logic
	document.getElementById("p").innerHTML = e;
});
}; 