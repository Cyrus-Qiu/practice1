$(function() {
				$('.pop').children().children().hover(
					function() {
						if($(this).parent().index() == 0) {
							$(this).attr("src", "img/login1.png");
						} else {
							$(this).attr("src", "img/find1.png");
						}
					},
					function() {
						if($(this).parent().index() == 0) {
							$(this).attr("src", "img/login.png");
						} else {
							$(this).attr("src", "img/find.png");
						}
					})
				
				$('#fm,#lvs').click(function(){
					 location.href='invSD.html';
				})
				$('#dc').click(function(){
					 location.href='datZX.html';
				})
				
				$('#login').click(function(){
					if ($(this).data('zt')==0) {
						$(this).data('zt','1');
						$('#logfr').show();
					}
					else{
						$(this).data('zt','0');
						$('#logfr').hide();
					}
				})
				$('.aa,footer').click(function(){
					if ($('#login').data('zt')==1) {
						$('#login').data('zt','0');
						$('#logfr').hide();
					}
					menuXX();
				})
				function menuXX(){
					$('#menb').data('zt','0');
					$('#menb').attr('src','img/menu.PNG');
					$('.melist').parent().fadeOut();
				}
				
				$('#menb').click(function(){
					if ($(this).data('zt')==0) {
						$(this).data('zt','1');
						$(this).attr('src','img/cha.PNG');
						$('.melist').parent().fadeIn();
					}
					else{
						menuXX();
					}
					
				})
				
			})