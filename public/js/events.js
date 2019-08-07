$(document).ready( () => {
	const myForm = document.getElementById('uploadForm');
	
	$('#uploadForm').submit(function() {
		$("#status").empty().text("File is uploading...");
		$(this).ajaxSubmit({
			
			error: function(xhr) {
				status('Error: ' + xhr.status);
			},
			
			success: function(response) {
				$("#status").empty().text(response);
				console.log(response);
			}
		});
		//Very important line, it disable the page refresh.
		return false;
	})
})
