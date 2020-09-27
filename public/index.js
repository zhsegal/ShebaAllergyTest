const testA= `
<div id="addedQuestions">
        <h1> Allergy Test A</h1>
        <div class="form-group row">
          <label for="Allergen 1" class="col-sm-2 col-form-label">Allergen 1</label>
          <div class="col-sm-3">
            <select class="form-control" id="testTypeSelect">
              <option selected>Choose Allergen Type</option>
              <option value="testA">Dust</option>
              <option value="TestB">Peanuts</option>
              <option value="TestB">Olive Trees</option>
            </select>
          </div>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value">
          </div>
        </div>
      </div>
`


$('#testTypeSelect').change(function(){
   $("#addedQuestions").remove()
    if($(this).val()==='testA'){
       $("#testselection").after(testA)
   
   }
})