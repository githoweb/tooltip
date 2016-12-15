var targets = [];
var tooltipHolder = document.getElementsByTagName('body')[0];
var tooltipIsActive = 0;

// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// TODO : create a seperate function to build tooltip dom "createTooltipDom"
// Idée : Faire une fonction qui gère un état true/false réutilisable ?

function getTooltipTargets(attribute){

  var searchedElements = [];
  var allElements = document.getElementsByTagName('*');
  var allElementsCount = allElements.length;

  for (var i = 0; i < allElementsCount; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null) {
      console.log('found data-attribute');
      searchedElements.push(allElements[i]);
    }
  }
  targets = searchedElements;
  return searchedElements;
}


function tooltipActive(){

    if( tooltipIsActive == 0 ){

        getElementPosition();
        getElementDimensions();

        createTooltipDom();
        tooltipIsActive = 1;
    }
}

function tooltipInactive(){

    if( tooltipIsActive == 1 ){
        var tooltipContainer = document.getElementsByClassName('tooltip')[0];
        document.body.removeChild(tooltipContainer);
        tooltipIsActive = 0;
    }
}

function getElementPosition(){
  var left = event.target.offsetLeft;
  var top = event.target.offsetTop;
  console.log('position' + ' ' + left + ' ' + top);
}

function getElementDimensions(){
  var width = event.target.offsetWidth;
  var height = event.target.offsetHeight;
  var dimensions = [width, height];
  console.log('dimensions' + ' ' + width + ' ' + height);
  return dimensions;
}

function createTooltipDom(){
    var e = event.target;
    console.log('event.target' + e.getAttribute('data-tooltip'));
    var label = e.getAttribute('data-tooltip');
    var tooltipContainer = document.createElement('div');
    var tooltipCssClass = tooltipContainer.setAttribute('class', 'tooltip');
    //tooltipContainer.setAttribute("style", "left:"+ getElementDimensions[0] +"px;");
    tooltipContainer.innerHTML = label;
    tooltipHolder.appendChild(tooltipContainer);
}

function tooltipPosition(){

}

getTooltipTargets('data-tooltip');

for (var i = 0; i < targets.length; i++){
  targets[i].addEventListener('mouseover', tooltipActive);
  targets[i].addEventListener('mouseout', tooltipInactive);
  console.log(targets[i]);
}


//console.log(getTooltipTargets('data-tooltip'));
