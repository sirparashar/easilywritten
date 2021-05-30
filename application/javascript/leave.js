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
        $("#dplace").on('change keyup paste', function() {
            $("#dplace-show").html($("#dplace").val());
        });
        $("#purpose").on('change keyup paste', function() {
            $("#purpose-show").html($("#purpose").val());
        });
        $("#splace").on('change keyup paste', function() {
            $("#splace-show").html($("#splace").val());
        });
        $("#ldate").on('change keyup paste', function() {
            $("#ldate-show").html($("#ldate").val());
        })
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