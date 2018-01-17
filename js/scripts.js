$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-symptons]:checked").each(function(){
      var stressTypes = $(this).val();
      $('#stress-responses').append(stressTypes + "<br>");
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-symptons]:checked").each(function(){
      var healthTypes = $(this).val();
      $('#health-responses').append(healthTypes + "<br>");
    });
    $("#management-responses").show();
    $("input:checkbox[name=stress-management]:checked").each(function(){
      var managementTypes = $(this).val();
      $('#management-responses').append(managementTypes + "<br>");
    });
    $('#stress-survey').hide();
  });
});
