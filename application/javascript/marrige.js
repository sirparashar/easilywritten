$("#school-name").on('change keyup paste', function() {
            $("#school-name-show").html($("#school-name").val());
        });
        $("#address").on('change keyup paste', function() {
            $("#address-show").html($("#address").val());
        });
        $("#date").on('change keyup paste', function() {
            $("#date-show").html($("#date").val());
        });
        $("#relationship").on('change keyup paste', function() {
            $("#relationship-show").html($("#relationship").val());
        });
        $("#sdate").on('change keyup paste', function() {
            $("#sdate-show").html($("#sdate").val());
        });
        $("#edate").on('change keyup paste', function() {
            $("#edate-show").html($("#edate").val());
        });
        $("#name").on('change keyup paste', function() {
            $("#name-show").html($("#name").val());
        });
        $("#class").on('change keyup paste', function() {
            $("#class-show").html($("#class").val());
        });
        $("#rollno").on('change keyup paste', function() {
            $("#rollno-show").html($("#rollno").val());
        });
        $("#no").on('change keyup paste', function() {
            $("#no-show").html($("#no").val());
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