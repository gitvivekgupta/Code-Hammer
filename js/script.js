$(function(){
	$('#contact button').click(function(event) {
		/* Act on the event */
		if($('#subject').val()!=""&& $('#name').val()!=""&& $('#email').val()!=""&& $('#message').val()!=""){
			$('#contact').fadeOut('500',function(){
				$('#contact').html('<h1 style="padding:20px;text-align:center;color:white;font-weight:bold">Successfully Sent!</h1>');
				$('#contact').attr('style', 'background-color:#4cae4c');
				$('#contact').fadeIn('500');
			});
		//$.post('/path/to/file', {param1: 'value1'}, function(data) {
			/*optional stuff to do after success */
		//});
		}
		else{
			$('#errors').removeClass('invisible');
		}
	});    
});