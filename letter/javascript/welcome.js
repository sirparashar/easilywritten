 $("#name").on('change keyup paste', function() {
            $(".name-show").html($("#name").val());
        });
        $("#saddress1").on('change keyup paste', function() {
            $("#saddress1-show").html($("#saddress1").val());
        });
        $("#saddress2").on('change keyup paste', function() {
            $("#saddress2-show").html($("#saddress2").val());
        });
        $("#date").on('change keyup paste', function() {
            $("#date-show").html($("#date").val());
        });
        $("#empName").on('change keyup paste', function() {
            $("#empName-show").html($("#empName").val());
        });



        $("#raddress1").on('change keyup paste', function() {
            $("#raddress1-show").html($("#raddress1").val());
        });
        $("#raddress2").on('change keyup paste', function() {
            $("#raddress2-show").html($("#raddress2").val());
        });
        $("#company").on('change keyup paste', function() {
            $("#company-show").html($("#company").val());
        });
        $("#dep").on('change keyup paste', function() {
            $("#dep-show").html($("#dep").val());
        });
        $("#job").on('change keyup paste', function() {
            $("#job-show").html($("#job").val());
        });
        $("#question").on('change keyup paste', function() {
            $("#question-show").html($("#question").val());
        });

        $("#desig").on('change keyup paste', function() {
            $("#desig-show").html($("#desig").val());
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
        x.addListener(changeOutputWindow) // Attach listener function on

        var doc = new jsPDF();

        var specialElementHandlers = {
            '#editor': function(element, renderer) {
                return true;
            }
        };

        var ua = navigator.userAgent.toLowerCase();
        var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");





        $("#save").click(function() {
            if (isAndroid) {

                var a = document.body.appendChild(
                    document.createElement("a")
                );
                a.download = "export.html";
                a.href = "data:text/html," + document.getElementById("sample-output").innerHTML;
                a.innerHTML = "[Export conent]";
                a.click();

            } else {
                var printContents = document.getElementById("sample-output").innerHTML;
                w = window.open();
                w.document.write(printContents);
                w.print();
                w.close();



            }
            return false;


        });