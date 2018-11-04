webiopi().ready( function()
{	// Initialize
	drive(0.0, 0.0);
} );

function L_drive(LM)
{	// Change drive mode. 0 : Stop, 1 : Forward, 2 : Backward, 3 : CW, 4 : CCW
	webiopi().callMacro( "L_Power", LM);
}

function R_drive(RM)
{	// Change drive mode. 0 : Stop, 1 : Forward, 2 : Backward, 3 : CW, 4 : CCW
	webiopi().callMacro( "R_Power", RM);
}

function Convert_Ratio(level){
  switch(level) {
    case "-5":
        ratio = -0.3
        break;
    case "-4":
        ratio = -0.25
        break;
    case "-3":
        ratio = -0.22
        break;
    case "-2":
        ratio = -0.19
        break;
     case "-1":
        ratio = -0.15
        break;
     case "0":
        ratio = 0.0
        break;
     case "1":
        ratio = 0.15
        break;
     case "2":
        ratio = 0.19
        break;
     case "3":
        ratio = 0.22
        break;
     case "4":
        ratio = 0.25
        break;
     case "5":
        ratio = 0.3
        break;
  }
  return ratio
}

function LM_Ratio(){
   level=document.getElementById("L-Morter").textContent;
   l_ratio = Convert_Ratio(level);
   return l_ratio;
}

function RM_Ratio(){
   level=document.getElementById("R-Morter").textContent;
   r_ratio = Convert_Ratio(level);
   return r_ratio;
}

window.onload = function(){
  document.getElementById("L-Morter").textContent = 0;
  document.getElementById("R-Morter").textContent = 0;
  document.getElementById("LM-Ratio").textContent = 0;
  document.getElementById("RM-Ratio").textContent = 0;
}

  $(document).ready(function () {
    $("#button_F").on('click', function () {
      l=document.getElementById("L-Morter").textContent;
      r=document.getElementById("R-Morter").textContent;
      if(r!=l){
        i=1;
      }else{
        i=r;
      }
      i++;
      if (i > 5){
        i=5;
      }else {
      }
      document.getElementById("L-Morter").textContent = i;
      document.getElementById("R-Morter").textContent = i;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 38)  // Key[↑]
    	 {
    		 $("#button_F").trigger("click");
    	 }
    	});

    $("#button_LL").on('click', function () {
      document.getElementById("L-Morter").textContent = 0;
      document.getElementById("R-Morter").textContent = 0;
      document.getElementById("L-Morter").textContent = -2;
      document.getElementById("R-Morter").textContent = 2;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 90)  // Key[Z]
    	 {
    		 $("#button_LL").trigger("click");
    	 }
    	});

    $("#button_L").on('click', function () {
      i=document.getElementById("L-Morter").textContent;
      i--;
      if (i < 0){
        i=0;
      }else {
      }
      document.getElementById("L-Morter").textContent = i;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 37)  // Key[←]
    	 {
    		 $("#button_L").trigger("click");
    	 }
    	});

    $("#button_STOP").on('click', function () {
      document.getElementById("L-Morter").textContent = 0;
      document.getElementById("R-Morter").textContent = 0;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 32)  // Key[Space]
    	 {
    		 $("#button_STOP").trigger("click");
    	 }
    	});

    $("#button_R").on('click', function () {
      i=document.getElementById("R-Morter").textContent
      i--;
      if (i < 0){
        i=0;
      }else {
      }
      document.getElementById("R-Morter").textContent = i;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 39)  // Key[→]
    	 {
    		 $("#button_R").trigger("click");
    	 }
    	});

    $("#button_RR").on('click', function () {
      document.getElementById("L-Morter").textContent = 0
      document.getElementById("R-Morter").textContent = 0
      document.getElementById("L-Morter").textContent = 2;
      document.getElementById("R-Morter").textContent = -2;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 88)  // Key[X]
    	 {
    		 $("#button_RR").trigger("click");
    	 }
    	});

    $("#button_B").on('click', function () {
      l=document.getElementById("L-Morter").textContent;
      r=document.getElementById("R-Morter").textContent;
      if(r!=l){
        i=-1;
      }else{
        i=r;
      }
      i--;
      if (i < -5){
        i=-5;
      }else {
      }
      document.getElementById("L-Morter").textContent = i;
      document.getElementById("R-Morter").textContent = i;
      LM = LM_Ratio();
      RM = RM_Ratio();
      document.getElementById("LM-Ratio").textContent = LM;
      document.getElementById("RM-Ratio").textContent = RM;
      L_drive(LM);
      R_drive(RM);
      return;
    });

    $(window).keydown(function(e){
    	var key = e.which;
    	if(key == 40)  // Key[↓]
    	 {
    		 $("#button_B").trigger("click");
    	 }
    	});
  })
