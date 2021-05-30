
        $("#school-name").on('change keyup paste', function() {
            $("#school-name-show").html($("#school-name").val());
        });
        $("#address").on('change keyup paste', function() {
            $("#address-show").html($("#address").val());
        });
        $("#date").on('change keyup paste', function() {
            $("#date-show").html($("#date").val());
        });
        $("#notice-title").on('change keyup paste', function() {
            $("#notice-title-show").html($("#notice-title").val());
        });

        $("#notice-body").on('change keyup paste', function() {
            $("#notice-body-show").html($("#notice-body").val());
        });

        $("#name").on('change keyup paste', function() {
            $("#name-show").html($("#name").val());
        });
        $("#designation").on('change keyup paste', function() {
            $("#designation-show").html($("#designation").val());
        });

        var soHeight = document.getElementById('input-form').clientHeight;
        document.getElementById('sample-output').style.height = soHeight + 270 + 'px';



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
    