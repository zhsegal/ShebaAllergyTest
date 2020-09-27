const testA= `
<div class="mt-5 center-block" id="addedQuestions">
          <h1> Allergy Test A</h1>

          <div class="form-group row mt-5">
            <label for="Allergen 1" class="col-sm-2 col-form-label">Allergen 1</label>
            <div class="col-sm-3">
              <select class="form-control" id="testTypeSelect" name="allergen1">
                <option selected value="">Choose Allergen Type</option>
                <option value="Dust">Dust</option>
                <option value="Peanuts">Peanuts</option>
                <option value="OliveTree">Olive Trees</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value"
                name="allergen1_value">
            </div>
          </div>

          <div class="form-group row mt-5">
            <label for="Allergen 2" class="col-sm-2 col-form-label">Allergen 2</label>
            <div class="col-sm-3">
              <select class="form-control" id="testTypeSelect" name="allergen2">
                <option selected value="">Choose Allergen Type</option>
                <option value="Dust">Dust</option>
                <option value="Peanuts">Peanuts</option>
                <option value="OliveTree">Olive Trees</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value"
                name="allergen2_value">
            </div>
          </div>

          <div class="form-group row mt-5">
            <label for="Allergen 3" class="col-sm-2 col-form-label">Allergen 3</label>
            <div class="col-sm-3">
              <select class="form-control" id="testTypeSelect" name="allergen3">
                <option selected value="">Choose Allergen Type</option>
                <option value="Dust">Dust</option>
                <option value="Peanuts">Peanuts</option>
                <option value="OliveTree">Olive Trees</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value"
                name="allergen3_value">
            </div>
          </div>
        </div>

`
const testB= `
<div class="mt-5 center-block" id="addedQuestions">
          <h1> Allergy Test B</h1>

          <div class="form-group row mt-5">
            <label for="Allergen 1" class="col-sm-2 col-form-label">Allergen 1</label>
            <div class="col-sm-3">
              <select class="form-control" id="testTypeSelect" name="allergen1">
                <option selected value="">Choose Allergen Type</option>
                <option value="Dust">Dust</option>
                <option value="Peanuts">Peanuts</option>
                <option value="OliveTree">Olive Trees</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value"
                name="allergen1_value">
            </div>
          </div>

          <div class="form-group row mt-5">
            <label for="Allergen 2" class="col-sm-2 col-form-label">Allergen 2</label>
            <div class="col-sm-3">
              <select class="form-control" id="testTypeSelect" name="allergen2">
                <option selected value="">Choose Allergen Type</option>
                <option value="Dust">Dust</option>
                <option value="Peanuts">Peanuts</option>
                <option value="OliveTree">Olive Trees</option>
              </select>
            </div>
            <div class="col-sm-3">
              <input type="text" class="form-control" id="PatientID" placeholder="Allergen Value"
                name="allergen2_value">
            </div>
          </div>
          
        </div>

`


$('#testTypeSelect').change(function(){
   $("#addedQuestions").remove()
    if($(this).val()==='testA'){
       $("#testselection").after(testA)
   }
   else if ($(this).val()==='testB'){
    $("#testselection").after(testB)
}

})