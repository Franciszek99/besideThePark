import $ from 'jquery';
import jQuery from 'jquery';

 $(document).ready(function(){

 	$(function () {
  // Grab the template script
  var theTemplateScript = $("#big-address-template").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // Define our data object
  var context={
    "title": "Beside the park",
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $('.big-content-placeholder').html(theCompiledHtml);
});

          $(".fadeOut").addClass("animated infinite flash");
      });