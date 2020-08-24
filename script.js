 var indexNum,
                table = document.getElementById("list");
            
           // add Row
            function submitData()
            {
                // get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    FirstName = document.getElementById("FirstName").value,
                    LastName = document.getElementById("LastName").value,
                    Location = document.getElementById("Location").value,
                    Occupation = document.getElementById("Occupation").value,
                    Amountneeded = document.getElementById("Amountneeded").value,
                    Interestrate = document.getElementById("Interestrate").value;
            
                cell1.innerHTML = FirstName;
                cell2.innerHTML = LastName;
                cell3.innerHTML = Location;
                cell4.innerHTML = Occupation;
                cell5.innerHTML = Amountneeded;
                cell6.innerHTML = Interestrate;
                resetinputs();
                // call the function to set the event to the new row
                rowSelected();
            }
            
            // display selected row data into input text
            function rowSelected()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      // get the seected row index
                      indexNum = this.rowIndex;
                      document.getElementById("FirstName").value = this.cells[0].innerHTML;
                      document.getElementById("LastName").value = this.cells[1].innerHTML;
                      document.getElementById("Location").value = this.cells[2].innerHTML;
                      document.getElementById("Occupation").value = this.cells[3].innerHTML;
                      document.getElementById("Amountneeded").value = this.cells[4].innerHTML;
                      document.getElementById("Interestrate").value = this.cells[5].innerHTML;
                    };
                }
            }
            rowSelected();
            
            function editData()
            {
                var FirstName = document.getElementById("FirstName").value,
                    LastName = document.getElementById("LastName").value,
                    Location = document.getElementById("Location").value,
                    Occupation = document.getElementById("Occupation").value,
                    Amountneeded = document.getElementById("Amountneeded").value,
                    Interestrate = document.getElementById("Interestrate").value;
                table.rows[indexNum].cells[0].innerHTML = FirstName;
                table.rows[indexNum].cells[1].innerHTML = LastName;
                table.rows[indexNum].cells[2].innerHTML = Location;
                table.rows[indexNum].cells[3].innerHTML = Occupation;
                table.rows[indexNum].cells[4].innerHTML = Amountneeded;
                table.rows[indexNum].cells[5].innerHTML = Interestrate;
                resetinputs();
            }
            
            function deletData()
            {
                table.deleteRow(indexNum);
                document.getElementById("FirstName").value = "";
                document.getElementById("LastName").value = "";
                document.getElementById("Location").value = "";
                document.getElementById("Occupation").value = "";
                document.getElementById("Amountneeded").value = "";
                document.getElementById("Interestrate").value = "";
            }

            function refresh(){
                location.reload();
            }

            function resetinputs(){
            document.getElementById("FirstName").value = "";
            document.getElementById("LastName").value = "";
            document.getElementById("Location").value = "";
            document.getElementById("Occupation").value = "";
            document.getElementById("Amountneeded").value = "";
            document.getElementById("Interestrate").value = "";
 
            }