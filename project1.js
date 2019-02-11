            debugger
            var all_list = document.getElementById("all_list");
            var theList = [];

            var str = localStorage.getItem("notes");
            if (str) {
                theList = JSON.parse(str)
                showListStart();
            }


            function addlist() {
                debugger
                var details = document.getElementById("details").value;
                var date = document.getElementById("date").value;
                var time = document.getElementById("time").value;

if(details==" "||details==""){
alert("Please write the note")
}
else if(date==""){
    alert("Date is required")
}
else{
              var newitem = {
                    "a": details,
                    "b": date,
                    "c": time
                };
                theList.push(newitem);
                var theListJson = JSON.stringify(theList);
                localStorage.setItem("notes", theListJson);

                showList();
            }
            }


            function showList() {
                debugger
                var listses = ""
                for (var i = 0; i < theList.length; i++) {
                    var current = theList[i];

                    if (i == theList.length - 1) {
                        listses += `<div class="col-sm-4">
                        <div class= "w3-container w3-center w3-animate-opacity">
                            <button class="btn btn-default btn-sm" id=${i} onclick="delFromArr()"><span class="glyphicon glyphicon-trash"></button> 
                            <div class="a">${current.a} </div>
                            <div class="b">${current.b}  </div>
                            <div class="c">${current.c}  </div>
                            </div>
                        </div> `;
                    }

                    else {
                        listses += `<div class="col-sm-4">
                        <div class="list"> 
                            <button class="btn btn-default btn-sm" id=${i} onclick="delFromArr()"><span class="glyphicon glyphicon-trash"></button> 
                            <div class="a">${current.a} </div>
                            <div class="b">${current.b}  </div>
                            <div class="c">${current.c}  </div>
                            </div>
                        </div>`;
                    }
                }
                all_list.innerHTML = listses;
            }




            function showListStart() {
                debugger
                var listses = ""
                for (var i = 0; i < theList.length; i++) {
                    var current = theList[i];

                    listses += `<div class="col-sm-4">
                    <div class="list" > 
                            <button class="btn btn-default btn-sm" id=${i} onclick="delFromArr()"><span class="glyphicon glyphicon-trash"></button> 
                            <div class="a">${current.a} </div>
                            <div class="b">${current.b}  </div>
                            <div class="c">${current.c}  </div>
                            </div>
                        </div>`;

                }
                all_list.innerHTML = listses;

        
            }



            function reset1() {
                debugger
                document.getElementById("details").value = "";
                document.getElementById("date").value = "";
                document.getElementById("time").value = "";

            }


            function delFromArr() {

                $(document).ready(function () {
                    $("button").click(function () {
                        $(this).parent(".list").remove();

                        theList.splice($(this).attr('id'), 1)
                        update()
                    });
                });
            }


            function update() {
                theListJson = JSON.stringify(theList);
                localStorage.setItem("notes", theListJson);
                showListStart()
            }


