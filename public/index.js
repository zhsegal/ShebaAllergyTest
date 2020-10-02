const testA= `
<div class="mt-5 center-block" id="addedQuestions">
          <h2> Allergy Test A</h2>

          <div class="form-group row mt-5 justify-content-center">
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

          <div class="form-group row mt-5 justify-content-center">
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

          <div class="form-group row mt-5 justify-content-center">
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
const standard= `
<div class="mt-5 center-block" id="stadard-set">
<h2> Standard Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="standard_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="standard_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="standard_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="standard_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`


const perishable= `
<div class="mt-5 center-block" id="perishable-set">
<h2> Perishable Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perishable_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perishable_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perishable_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perishable_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const cosmetics= `
<div class="mt-5 center-block" id="cosmetics-set">
<h2> Cosmetics Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="cosmetics_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="cosmetics_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="cosmetics_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="cosmetics_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const lotions= `
<div class="mt-5 center-block" id="lotions-set">
<h2> Lotions Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="lotions_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="lotions_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="lotions_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="lotions_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const plants= `
<div class="mt-5 center-block" id="plants-set">
<h2> Plants Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="plants_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="plants_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="plants_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="plants_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const steroids= `
<div class="mt-5 center-block" id="steroids-set">
<h2> Steroids Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="steroids_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="steroids_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="steroids_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="steroids_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const textile= `
<div class="mt-5 center-block" id="textile-set">
<h2> Textile Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="textile_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="textile_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="textile_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="textile_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const baking= `
<div class="mt-5 center-block" id="baking-set">
<h2> Baking Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="baking_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="baking_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="baking_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="baking_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`
const perfumes= `
<div class="mt-5 center-block" id="perfumes-set">
<h2> Perfumes Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perfumes_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perfumes_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perfumes_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="perfumes_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const shoes= `
<div class="mt-5 center-block" id="shoes-set">
<h2> Shoes Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="shoes_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="shoes_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="shoes_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="shoes_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const rubber= `
<div class="mt-5 center-block" id="rubber-set">
<h2> Rubber Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="rubber_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="rubber_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="rubber_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="rubber_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

const acrylic= `
<div class="mt-5 center-block" id="acrylic-set">
<h2> Acrylic Set</h2>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="acrylic_0">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+-</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="acrylic_1">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+1</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="acrylic_2">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+2</h2>
  </div>
</div>

<div class="form-group row mt-5 justify-content-center">
  <div class="col-sm-6">
    <input type="text" class="form-control" id="PatientID" placeholder="Positive positions e.g. 1,5,6"
      name="acrylic_3">
  </div>
  <div class="col-sm-2 text-center">
    <h2>+3</h2>
  </div>
</div>

</div>

`

$('#standard').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(standard)
  }
  else {
    $("#stadard-set").remove()
  }
  
});

$('#perishable').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(perishable)
  }
  else {
    $("#perishable-set").remove()
  }
  
});

$('#cosmetics').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(cosmetics)
  }
  else {
    $("#cosmetics-set").remove()
  }
  
});

$('#lotions').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(lotions)
  }
  else {
    $("#lotions-set").remove()
  }
  
});

$('#plants').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(plants)
  }
  else {
    $("#plants-set").remove()
  }
  
});

$('#steroids').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(steroids)
  }
  else {
    $("#steroids-set").remove()
  }
  
});

$('#textile').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(textile)
  }
  else {
    $("#textile-set").remove()
  }
  
});

$('#baking').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(baking)
  }
  else {
    $("#baking-set").remove()
  }
  
});

$('#perfumes').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(perfumes)
  }
  else {
    $("#perfumes-set").remove()
  }
  
});

$('#shoes').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(shoes)
  }
  else {
    $("#shoes-set").remove()
  }
  
});

$('#rubber').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(rubber)
  }
  else {
    $("#rubber-set").remove()
  }
  
});

$('#acrylic').change(function() {
  if($(this).is(":checked")){
    $("#submit-button").before(acrylic)
  }
  else {
    $("#acrylic-set").remove()
  }
  
});









$('#testTypeSelect').change(function(){
   $("#addedQuestions").remove()
    if($(this).val()==='testA'){
       $("#testselection").after(testA)
   }
   else if ($(this).val()==='testB'){
    $("#testselection").after(testB)
}

})