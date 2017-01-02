

onInit(()=> {
 

 	$(function () {
	  var theTemplateScript = $("#big-address-template").html();

	  var theTemplate = Handlebars.compile(theTemplateScript);

	  var context={
	    "title": "Beside the park",
	  };

	  var theCompiledHtml = theTemplate(context);

	  $('.big-content-placeholder').html(theCompiledHtml);
	};
	$(function (){

          $(".fadeOut").addClass("animated infinite flash");
      });
	});