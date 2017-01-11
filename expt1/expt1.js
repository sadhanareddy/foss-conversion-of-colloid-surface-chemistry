var model={
  instruction1: 'Click on the beaker to pour water into it...',
  instruction2: 'Click on the FeCl<sub>3</sub> powder to add it to the beaker containing water...',
  instruction3: 'Click on the Glass Rod to stir the FeCl<sub>3</sub> solution...',
  instruction4: 'Click on the Conical Flask containing water, to place it on the Magnetic Stirrer/Heater...',
  instruction5: 'Click on the Magnetic Bead to drop it into the Flask...',
  instruction6: 'Switch on the Heater of the Magnetic Stirrer & Heater...',
  instruction7: 'Switch on the Stirrer of the Magnetic Stirrer & Heater...',
  instruction8: 'Wait till the water gets boil...',
  instruction9: 'Now that the water gas Started boiling, switch off the Heater...',
  instruction10: 'Click on the pipette to take 10ml conc FeCl<sub>3</sub> from the beaker... ',
  instruction11: 'Click on the pipette again to add the FeCl<sub>3</sub> taken from the beaker, to the hot water in conical flask, drop by drop...',
  instruction12: 'The colloid is thus obtained...',
  instruction13: 'The sol is thus obtained...',
  images: ['images/maroon_flask.png']
}

var view={
  step_no: 0,
  // addClickEvent: add EventListener to other methods.
  addClickEvent: function(id, method){
    var element = document.getElementById(id);
    element.addEventListener('click', method, false);
  },
    
  // setInnerHtml: set innerText to a element.
  setInnerHTML: function (id, innerHTML) {
    document.getElementById(id).innerHTML = innerHTML;
  },

  // showElements: used to make the hidden elements visible when it is called.
  showElements: function(id){
    document.getElementById(id).style.visibility = 'visible';
  },

  // hideElements: used to hide elements when it is called.
  hideElements: function(id){
    document.getElementById(id).style.visibility = 'hidden';
  },

  // replaceElements: Calls method to replace the elements.
  replaceElements: function(id, image){
    document.getElementById(id).src = image;
  },

  // animateElements: Calls method to move the elements from one point to another.
  animateElements: function(id, top, left) {
    $("#"+id).animate({
      top: top+'%',
      left: left+'%'
    }, {
      duration: 1000,
      easing: "linear"
    }); 
  },

  // activateEvents: calls addClickEvent method to add EventListener to other methods.
  activateEvents: function() {
    this.addClickEvent('reset', function() { view.resetPage(); });
    this.addClickEvent('beaker', function() { view.moveBeaker(); });
    this.addClickEvent('powder', function() { view.addPowder(); });
    this.addClickEvent('glassrod', function() { view.moveGlassrod(); });
    this.addClickEvent('conical_flask', function() { view.moveFlask(); });
    this.addClickEvent('magnetic_bead', function() { view.moveBead(); });
    this.addClickEvent('heater_btn', function() { view.turnHeater(); });
    this.addClickEvent('stirrer_btn', function() { view.turnStirrer(); });
    this.addClickEvent('pipette', function() { view.movePipette(); });
  },

  // init: calls methods to set instructions and activate events.
  init: function() {
    this.setInnerHTML('instruction', model.instruction1);
    this.hideElements('arrow_powder');
    this.hideElements('powder');
    this.hideElements('watertag');
    this.hideElements('instructiontag');
    this.hideElements('instructiontag1');
    this.hideElements('arrow_glassrod');
    this.hideElements('spoon_with_powder');
    this.hideElements('glassrod');
    this.hideElements('arrow_flask');
    this.hideElements('conical_flask');
    this.hideElements('solution_name');
    this.hideElements('arrow_bead');
    this.hideElements('magnetic_bead');
    this.hideElements('arrow_heater');
    this.hideElements('arrow_stirrer');
    this.hideElements('power_btn');
    this.hideElements('arrow_pipette');
    this.hideElements('pipette');
    this.hideElements('drop');
    this.hideElements('arrow_pipette1');
    this.hideElements('arrow_pipette2');
    this.hideElements('solution_name1');
  },

  // resetPage: Calls method to reset the page.
  resetPage: function(){
    location.reload();
  },

  // moveBeaker: Calls method to move the beaker on to the table, pour the solution from flask into the beaker.
  moveBeaker: function() {
    this.hideElements('arrow_beaker');
    this.animateElements('beaker', '+=88', '+=22');
    setTimeout(function(){
        view.showElements('instructiontag');
        view.animateElements('instructiontag', '+=0', '+=5');
    }, 1000);

    setTimeout(function(){
        view.hideElements('instructiontag');
    }, 2000);

    setTimeout(function(){
        view.showElements('watertag');
        view.animateElements('watertag', '-=13', '+=0');
    }, 3000);

    setTimeout(function(){
        view.hideElements('watertag');
        view.showElements('arrow_powder');
        view.showElements('powder');
        view.setInnerHTML('instruction', model.instruction2);
    }, 4000);
  },

  // addPowder: Calls method to add fecl3 powder into the beaker
  addPowder: function() {
    this.hideElements('arrow_powder');
    this.showElements('instructiontag1');
    this.animateElements('instructiontag1', '+=0', '-=5');
    this.showElements('spoon_with_powder');
    setTimeout(function(){
        view.hideElements('powder');
        view.hideElements('instructiontag1');
        view.hideElements('spoon_with_powder');
        view.showElements('arrow_glassrod');
        view.showElements('glassrod');
        view.setInnerHTML('instruction', model.instruction3);
    }, 2000);
  },

  // moveGlassrod: Calls method to stir the solution in the beaker.
  moveGlassrod: function(){
    this.hideElements('arrow_glassrod');
    setTimeout(function(){
        view.hideElements('glassrod');
        view.animateElements('beaker', '+=0', '-=12');
        view.setInnerHTML('instruction', model.instruction4);
    }, 2000);

    setTimeout(function(){
        view.showElements('solution_name');
        view.showElements('arrow_flask');
        view.showElements('conical_flask');
    }, 3000);
  },

  // moveFlask: Calls method to move the flask on to the stirrer & Heater instrument.
  moveFlask: function() {
    this.hideElements('arrow_flask');
    this.animateElements('conical_flask', '+=50', '+=0');
    setTimeout(function(){
        view.showElements('arrow_bead');
        view.showElements('magnetic_bead');
        view.setInnerHTML('instruction', model.instruction5);
    }, 2000);
  },

  // moveBead: Calls method to move the magnetic bead into the conical_flask
  moveBead: function() {
    this.hideElements('arrow_bead');
    this.animateElements('magnetic_bead', '+=80', '+=0')
    this.showElements('arrow_heater');
    this.setInnerHTML('instruction', model.instruction6);
  },

  // turnHeater: Calls method to switch on the stirrer button
  turnHeater: function() {
    if(this.step_no == 0){
      this.hideElements('arrow_heater');
      this.showElements('arrow_stirrer');
      this.showElements('power_btn');
      this.setInnerHTML('instruction', model.instruction7);
      this.step_no++;
    }
    else{
      this.hideElements('arrow_heater');
      this.hideElements('power_btn');
      this.showElements('arrow_pipette');
      this.showElements('pipette');
      this.animateElements('beaker', '+=0', '+=12');
      this.animateElements('solution_name', '+=0', '+=10');
      this.setInnerHTML('instruction', model.instruction10);
    }
  },

  // turnStirrer: Calls method to switch on the heater_btn after the water gets boils.
  turnStirrer: function() {
    this.setInnerHTML('instruction', model.instruction8);
    setTimeout(function(){
        view.hideElements('arrow_stirrer');
        view.showElements('arrow_heater');
        view.setInnerHTML('instruction', model.instruction9);
    }, 2000);
  },

  // movePipette: Calls method to move the pipette into the beaker to absorb the solution.
  movePipette: function() {
    if(this.step_no == 1){
        this.hideElements('arrow_pipette');
        this.animateElements('pipette', '+=87', '-=4');
        setTimeout(function(){
            view.animateElements('pipette', '-=87', '+=8');
        }, 3000);
        setTimeout(function(){
            view.showElements('arrow_pipette1');
            view.setInnerHTML('instruction', model.instruction11);
        }, 4000);
        this.step_no++
    }
    else if(this.step_no == 2){
        this.hideElements('arrow_pipette1');
        this.animateElements('pipette', '+=0', '+=17');
        setTimeout(function(){
            view.showElements('arrow_pipette2');
            view.showElements('drop');
        }, 1500);
        this.step_no++
    }
    else if(this.step_no == 3){
        this.animateElements('drop', '+=40', '+=0');
        this.setInnerHTML('instruction', model.instruction12);
        this.showElements('solution_name1');
        setTimeout(function(){
            view.hideElements('drop');
            view.hideElements('arrow_pipette2');
            view.replaceElements('conical_flask', model.images[0]);
        }, 2000);
    }
  }

}
// onload function: call init method on window onload.
window.onload=function() {
  view.init();
  view.activateEvents();
}