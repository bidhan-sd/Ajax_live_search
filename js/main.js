$(document).ready(function(){
	// Check Username start.
	$("#username").blur(function(){
		var username = $(this).val();
		$.ajax({
			url:"check/checkuser.php",
			method:"POST",
			data:{username:username},
			dataType:"text",
			success:function(data){
				$('#userstatus').html(data);
			}
		});
	});

	//Autocomplete textbox start.
	$("#skill").keyup(function(){
		var skill = $(this).val();
		if (skill != '') {
			$.ajax({
				url:"check/checkskill.php",
				method:"POST",
				data:{skill:skill},
				//dataType:"text",
				success:function(data){
					$('#statusskill').fadeIn();
					$('#statusskill').html(data);
				}
			});
		};
	});

	$(document).on('click','li', function(){
		$("#skill").val($(this).text());
		$('#statusskill').fadeOut();
	});

	//show password 
	$("#showpassword").on('click', function(){
		var pass = $("#password");
		var fieldtype = pass.attr('type');
		if (fieldtype == 'password') {
			pass.attr('type','text');
			$(this).text("Hide Password");
		}else{
			pass.attr('type','password');
			$(this).text("Show Password");
		}
	});

	//Auto refresh div content
	$("#autosubmit").click(function(){
		var content = $("#body").val();
		if ($.trim(content) != ''){
			$.ajax({
				url:"check/checkrefresh.php",
				method:"POST",
				data:{body:content},
				dataType:"text",
				success:function(data){
					$("#body").val("");
				}
			});
			return false;
		}
	});
	setInterval(function(){
		$("#autostatus").load("check/getrefresh.php").fadeIn("slow");
	},1000);

	//Live Data Search
	$("#livesearch").keyup(function(){
		var live = $(this).val();
		if (live != '') {
			$.ajax({
				url:"check/livesearch.php",
				method:"POST",
				data:{search:live},
				dataType:"text",
				success:function(data){
					$('#statuslive').html(data);
				}
			});
		}else{
			$('#statuslive').html("");
		}
	});

});  