var targets = [];
var tooltipHolder = document.getElementsByTagName('body')[0];
var tooltipIsActive = 0;

// Stocke dans un array la liste des éléments du DOM susceptibles d'avoir une tooltip (en fait c'est une fonction plus générique dressant la liste des éléments du dom ayant un attribut passé en argument)
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

// Si le tooltip est actif, on prend la position et la dimension de l'élement déclencheur
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
    tooltipContainer.innerHTML = label;
    tooltipHolder.appendChild(tooltipContainer);


    var customOffset = 20;
    var tooltipContainerWidth = tooltipContainer.offsetWidth;
    var tooltipLeftPosition = e.offsetLeft + (e.offsetWidth/2) - tooltipContainerWidth/2;
    var tooltipTopPosition = e.offsetTop - tooltipContainer.offsetHeight - customOffset;

    tooltipContainer.setAttribute("style", "left:"+ tooltipLeftPosition +"px;"+"top:"+ tooltipTopPosition +"px;");
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
