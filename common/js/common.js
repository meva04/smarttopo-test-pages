$(function(){

	var width_size = document.body.clientWidth;

	/* nav_pc/mobilw : 이벤트때문에 코드 분리 */
	if( width_size < 1280 ){
		 $(".pc_nav").css("display","none");
		 $(".mob_nav").css("display","block");
	}else{
		 $(".pc_nav").css("display","block");
		 $(".mob_nav").css("display","none");
	}
	$(window).resize(function(){
		var resize_width = document.body.clientWidth;

		if( resize_width < 1280 ){
				 $(".pc_nav").css("display","none");
				 $(".mob_nav").css("display","block");
		}else{
				 $(".pc_nav").css("display","block");
				 $(".mob_nav").css("display","none");
		}
	});

	/* nav */
	 $( "#gnb nav.pc_nav > ul > li").mouseenter(function(){
		$( "#gnb nav.pc_nav .dep2" ).stop().slideUp();
		$( this ).children( "ul" ).stop().slideDown();
	 });
	 $( "#gnb nav.pc_nav > ul > li").mouseleave(function(){
		$( "#gnb nav.pc_nav .dep2" ).stop().slideUp();
     });
	 $( "#gnb nav.mob_nav > ul > li").click(function(){
		var index = $(this).index();
		$( "#gnb nav.mob_nav .dep2" ).stop().slideUp();
		$( this ).children("span").css("background-image","url(../../images/bg/bg_gnb_0"+( index + 1 )+".png), url(../../images/bg/bg_gnb_mob_show.png)");
		$( this ).children( "ul" ).stop().slideDown();
		$( this ).children("span").css("background-image","url(../../images/bg/bg_gnb_0"+( index + 1 )+".png), url(../../images/bg/bg_gnb_mob_hide.png)");
	 });


	 /* mobile _ gnb*/
	$(".lnb_mob_icon").click(function(){
		var $state = $("nav.mob_nav").css("right");
		if( $state == "-500px"){
			 $("nav.mob_nav").css("right","0");
			  $('body').attr('style','overflow:hidden;');
		}else{
			 $("nav.mob_nav").css("right","-500px");
			  $('body').attr('style','overflow:auto;');
		}
	});



	/*scroll*/
	$(window).scroll(function() {
		var scroll_top = $(window).scrollTop();
		/* console.log( scroll_top ); */

		if( width_size >= 768 ){
			if( scroll_top > 744){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","166px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}else if(  640 <= width_size && width_size < 768  ){
			if( scroll_top > 745){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","166px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}else if(  width_size < 640 ){
			if( scroll_top > 444){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","192px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}
	});
	$(window).resize(function(){
		var resize_width = document.body.clientWidth;
		var scroll_top = $(window).scrollTop();

		if( resize_width >= 768 ){
			if( scroll_top > 744){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","166px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}else if(  640 <= resize_width && resize_width < 768  ){
			if( scroll_top > 745){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","166px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}else if(  resize_width < 640 ){
			if( scroll_top > 444){
				$( "#contents .mainCont .box_02" ).css("position","fixed").css("top","0") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","192px");
			}else{
				$( "#contents .mainCont .box_02" ).css("position","relative") ;
				$( "#contents .mainCont .box_01" ).css("margin-bottom","0px");
			}
		}
	});


	/* box02 */
	$( "#contents .mainCont .box_02 ul li").click(function() {
		 var current_size = document.body.clientWidth;
		 var index = $(this).index();
		 var scrollTo="";

		 if( current_size > 768 ) {
			 switch (index){
				case 0 : scrollTo="744px"   ; break;
				case 1 : scrollTo="1313px" ; break;
				case 2 : scrollTo="1881px" ; break;
				case 3 : scrollTo="2452px" ; break;
			 }
			 $('html, body').animate({ scrollTop: scrollTo}, 500);
		}else if(  640 <= current_size && current_size <= 768  ){
			 switch (index){
				case 0 : scrollTo="741px"   ; break;
				case 1 : scrollTo="1046px" ; break;
				case 2 : scrollTo="1344px" ; break;
				case 3 : scrollTo="1646px" ; break;
			 }
			  $('html, body').animate({ scrollTop: scrollTo}, 500);
		 }else if(  current_size < 640 ){
			 switch (index){
				case 0 : scrollTo="447px"   ; break;
				case 1 : scrollTo="847px" ; break;
				case 2 : scrollTo="1248px" ; break;
				case 3 : scrollTo="1649px" ; break;
			 }
			  $('html, body').animate({ scrollTop: scrollTo}, 500);
		 }
	});







	 /* box_06 : slide*/
	/* var width_size = document.body.clientWidth; */
	if( width_size < 641){
					$("#train").prepend( $(".trainroom:last") );
					$("#train").css("marginLeft","-300px");
					$("#train_02").prepend( $(".trainroom_02:last") );
					$("#train_02").css("marginLeft","-300px");

					$("#next").click(function(){
						$("#train").animate({"marginLeft":"-=300px"},"fast","linear",
						 function(){
							$("#train").append(  $(".trainroom:first")  );
							$("#train").css("marginLeft","-300px");
						 });
						 $("#train_02").animate({"marginLeft":"-=520px"},"fast","linear",
						 function(){
							$("#train_02").append(  $(".trainroom_02:first")  );
							$("#train_02").css("marginLeft","-300px");
						 });
					});

					$("#prev").click(function(){
						$("#train").animate({"marginLeft":"+=300px"},"fast","linear",
						 function(){
							$("#train").prepend(  $(".trainroom:last")  );
							$("#train").css("marginLeft","-300px");
						 });
						 $("#train_02").animate({"marginLeft":"+=300px"},"fast","linear",
						 function(){
							$("#train_02").prepend(  $(".trainroom_02:last")  );
							$("#train_02").css("marginLeft","-300px");
						});
					});
	}else{
				$("#train").prepend( $(".trainroom:last") );
				$("#train").css("marginLeft","-555px");
				$("#train_02").prepend( $(".trainroom_02:last") );
				$("#train_02").css("marginLeft","-520px");
				$("#dots ul li").eq(0).css("background","#fff");



				$("#next").click(function(){
					$("#train").animate({"marginLeft":"-=555px"},"fast","linear",
					 function(){
						$("#train").append(  $(".trainroom:first")  );
						$("#train").css("marginLeft","-555px");
					});
					$("#train_02").animate({"marginLeft":"-=520px"},"fast","linear",
					 function(){
						$("#train_02").append(  $(".trainroom_02:first")  );
						$("#train_02").css("marginLeft","-520px");
					});
				});


				$("#prev").click(function(){
					$("#train").animate({"marginLeft":"+=555px"},"fast","linear",
					 function(){
						$("#train").prepend(  $(".trainroom:last")  );
						$("#train").css("marginLeft","-555px");
					});
					$("#train_02").animate({"marginLeft":"+=520px"},"fast","linear",
					 function(){
						$("#train_02").prepend(  $(".trainroom_02:last")  );
						$("#train_02").css("marginLeft","-520px");
					});
				});
				//2초마다 롤링돌기
				 var timer = window.setInterval( function()  {$("#next").click();} ,4000);

				// 버튼 클릭시 롤링 멈추기
				$("#prev img, #next img").click(function(){
					  window.clearInterval( timer );
				});
	}

	$(window).on('resizeEnd', function() {
		var resize_width = document.body.clientWidth;
		if( resize_width < 641 ){
					location.reload();

					$("#train").prepend( $(".trainroom:last") );
					$("#train").css("marginLeft","-300px");
					$("#train_02").prepend( $(".trainroom_02:last") );
					$("#train_02").css("marginLeft","-300px");

					$("#next").click(function(){
						$("#train").animate({"marginLeft":"-=300px"},"fast","linear",
						 function(){
							$("#train").append(  $(".trainroom:first")  );
							$("#train").css("marginLeft","-300px");
						 });
						 $("#train_02").animate({"marginLeft":"-=520px"},"fast","linear",
						 function(){
							$("#train_02").append(  $(".trainroom_02:first")  );
							$("#train_02").css("marginLeft","-300px");
						 });
					});

					$("#prev").click(function(){
						$("#train").animate({"marginLeft":"+=300px"},"fast","linear",
						 function(){
							$("#train").prepend(  $(".trainroom:last")  );
							$("#train").css("marginLeft","-300px");
						 });
						 $("#train_02").animate({"marginLeft":"+=300px"},"fast","linear",
						 function(){
							$("#train_02").prepend(  $(".trainroom_02:last")  );
							$("#train_02").css("marginLeft","-300px");
						});
					});
		}else{
				$("#train").prepend( $(".trainroom:last") );
				$("#train").css("marginLeft","-555px");
				$("#train_02").prepend( $(".trainroom_02:last") );
				$("#train_02").css("marginLeft","-520px");
				$("#dots ul li").eq(0).css("background","#fff");



				$("#next").click(function(){
					$("#train").animate({"marginLeft":"-=555px"},"fast","linear",
					 function(){
						$("#train").append(  $(".trainroom:first")  );
						$("#train").css("marginLeft","-555px");
					});
					$("#train_02").animate({"marginLeft":"-=520px"},"fast","linear",
					 function(){
						$("#train_02").append(  $(".trainroom_02:first")  );
						$("#train_02").css("marginLeft","-520px");
					});
				});


				$("#prev").click(function(){
					$("#train").animate({"marginLeft":"+=550px"},"fast","linear",
					 function(){
						$("#train").prepend(  $(".trainroom:last")  );
						$("#train").css("marginLeft","-550px");
					});
					$("#train_02").animate({"marginLeft":"+=520px"},"fast","linear",
					 function(){
						$("#train_02").prepend(  $(".trainroom_02:last")  );
						$("#train_02").css("marginLeft","-520px");
					});
				});
				//2초마다 롤링돌기
				 var timer = window.setInterval( function()  {$("#next").click();} ,4000);

				// 버튼 클릭시 롤링 멈추기
				$("#prev img, #next img").click(function(){
					  window.clearInterval( timer );
				});
		}
	});

	/* box_06 : slide - dot*/
	var dot_num = 0;
	$("#slidingWrap > p").click(function(){

			dot_num +=1;
			$("#dots li").css("background","rgba(255,255,255,0.4)");

			var result = dot_num % 2;
			$("#dots ul li").eq(result).css("background","#fff");
	});


	/* sub_css */
	$(".subCont").parent("#contents").css("background","#222").css("padding","0");


	/* sub_menu_css */
	// $("#sub_nav li > span").click(function(){
	// 		var state = $(this).siblings("ul").css("display");
	//
	// 		if(state=="none"){
	// 			$("#sub_nav > ul > li > ul").css("display","none");
	// 			$(this).siblings("ul").slideDown();
	// 		}else{
	// 			$(this).siblings("ul").slideUp();
	// 		}
	// });

	/* sub_tab */
   $(".sub_tab_01 li.on").append("<div class='tab_arr'></div>");


   /*sub_img*/
   if(width_size < 640){
		var num =  $(".buy > div > div > img").length;

		for( var i=0; i < num ; i++){
			$(".buy > div > div").eq(i).children("img").attr("src","/images/bg/bg_buy_0"+(i+1)+"_mob.jpg");
		}
		$(".buy_box_tit").hide();
   }else{
		 for( var i=0; i < num ; i++){
			$(".buy > div > div").eq(i).children("img").attr("src","/images/bg/bg_buy_0"+(i+1)+".jpg");
		  }
		$(".buy_box_tit").show();
	  }
   $(window).resize(function(){
		var resize_width = document.body.clientWidth;
		var num =  $(".buy > div > div > img").length;

		 if(resize_width < 640){
			  for( var i=0; i < num ; i++){
				$(".buy > div > div").eq(i).children("img").attr("src","/images/bg/bg_buy_0"+(i+1)+"_mob.jpg");
			  }
			$(".buy_box_tit").hide();
		  }else{
			 for( var i=0; i < num ; i++){
				$(".buy > div > div").eq(i).children("img").attr("src","/images/bg/bg_buy_0"+(i+1)+".jpg");
			  }
			$(".buy_box_tit").show();
		  }
   });

    if( 640 < width_size && width_size < 1150) {
		$(".introduce_box01 > p > img").attr("src","/images/bg/bg_introduce_box_02.jpg");
    }else{
		$(".introduce_box01 > p > img").attr("src","/images/bg/bg_introduce_box.jpg");
	}
    $(window).resize(function(){
		var resize_width = document.body.clientWidth;

		 if( 640 < resize_width && resize_width < 1150) {
				$(".introduce_box01 > p > img").attr("src","/images/bg/bg_introduce_box_02.jpg");
		 }else{
				$(".introduce_box01 > p > img").attr("src","/images/bg/bg_introduce_box.jpg");
		}
   });


});
