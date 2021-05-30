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
        $("#rollno").on('change keyup paste', function() {
            $(".rollno-show").html($("#rollno").val());
        });
        $("#year").on('change keyup paste', function() {
            $("#year-show").html($("#year").val());
        });
        $("#branch").on('change keyup paste', function() {
            $("#branch-show").html($("#branch").val());
        });
        $("#purpose").on('change keyup paste', function() {
            $("#purpose-show").html($("#purpose").val());
        });


        function changeOutputWindow(x) {
            if (x.matches) {
                var offsetHeight = document.getElementById('input-window').height;

                document.getElementById('output-window').style.marginTop = offsetHeight + 'px';
                document.getElementById('output-window').style.width = '100%';
            }
        }

        var x = window.matchMedia("(max-width: 600px)")
        changeOutputWindow(x) // Call listener function at run time
        x.addListener(changeOutputWindow) // Attach listener function on state changes



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