$(function() {

  // your code will go here
  $.ajax({
    url: 'https://www.codeschool.com/users/2565397.json',
    dataType: 'jsonp',
    success: function(response) {
      response.courses.completed.forEach(function(course) {
        var courseDiv = $("<div class='course'><h3>" + course.title + "</h3><img src=" + course.badge + " alt=" + course.title + "></img><br><a class='btn btn-primary' target='_blank' href=" + course.url + ">See course</a></div>");
        $('#badges').append(courseDiv);
        //$('#course').append("<h3 class='course'>" + course.title + "</h3><img class='course' src=" + course.badge + "></img>");
        console.log("Course: " + JSON.stringify(course));
      });
    }
  });
});
