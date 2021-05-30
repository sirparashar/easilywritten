  $("#incharge").on('change keyup paste', function() {
            $("#incharge-show").html($("#incharge").val());
        });
        $("#school-name").on('change keyup paste', function() {
            $("#school-name-show").html($("#school-name").val());
        });
        $("#address").on('change keyup paste', function() {
            $("#address-show").html($("#address").val());
        });
        $("#date").on('change keyup paste', function() {
            $("#date-show").html($("#date").val());
        });
        $("#name").on('change keyup paste', function() {
            $(".name-show").html($("#name").val());
        });
        $("#describeU").on('change keyup paste', function() {
            $("#describeU-show").html($("#describeU").val());
        });
        $("#rollno").on('change keyup paste', function() {
            $("#rollno-show").html($("#rollno").val());
        });
        $("#purpose").on('change keyup paste', function() {
            $("#purpose-show").html($("#purpose").val());
        });



        $("#class").on('change keyup paste', function() {
            $("#class-show").html($("#class").val());
        });
        var soHeight = document.getElementById('input-form').clientHeight;

        document.getElementById('sample-output').style.height = soHeight + 27 + 'px';



        function changeOutputWindow(x) {
            if (x.matches) {
                var offsetHeight = document.getElementById('input-window').height;

                document.getElementById('output-window').style.marginTop = offsetHeight + 'px';
                document.getElementById('output-window').style.width = '100%';
            }
        }

        var x = window.matchMedia("(max-width: 600px)")
        changeOutputWindow(x) // Call listener function at run time
        x.addListener(changeOutputWindow) // Attac

        var doc = new jsPDF();

        var specialElementHandlers = {
            '#editor': function(element, renderer) {
                return true;
            }
        };


        $("#save").click(function() {

            doc.fromHTML($("#sample-output").html(), 15, 15, {

                "width": 170,
                "elementHandlers": specialElementHandlers

            });

            doc.save("sample-content.pdf");

        });