$(document).ready(function(){
  $("form#stress-survey").submit(function(event){
    var stressCount = 0;
    var healthCount = 0;
    var managementCount = 0;
    event.preventDefault();
    $("#stress-responses").show();
    $("input:checkbox[name=stress-symptons]:checked").each(function(){
      var stressTypes = $(this).val();
      $('#stress-responses').append(stressTypes + "<br>");
      stressCount += 1;
    });
    $("#health-responses").show();
    $("input:checkbox[name=health-symptons]:checked").each(function(){
      var healthTypes = $(this).val();
      $('#health-responses').append(healthTypes + "<br>");
      healthCount += 1;
    });
    $("#management-responses").show();
    $("input:checkbox[name=stress-management]:checked").each(function(){
      var managementTypes = $(this).val();
      $('#management-responses').append(managementTypes + "<br>");
      managementCount += 1;
    });

    if (stressCount >= 3) {
      if (managementCount >= 3) {
        $("#result1").show();
      }else {
        $("#result2").show();
      }
    }else {
      $(result1).show();
    }


    // alert(stressCount);
    // alert(healthCount);
    // alert(managementCount);

    $('#stress-survey').hide();
  });
});
