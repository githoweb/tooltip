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

//create dom element for tooltip
function createTooltipDom(e){
    console.log('event.target' + e.getAttribute('data-tooltip'));
    var label = e.getAttribute('data-tooltip');
    var tooltipContainer = document.createElement('div');
    var tooltipCssClass = tooltipContainer.setAttribute('class', 'tooltip');
    tooltipContainer.innerHTML = label;

    return tooltipContainer;
}

function positionTooltipDom(e, tooltipContainer){
  var customOffset = 20;
  var tooltipContainerWidth = tooltipContainer.offsetWidth;

  console.log('e.offsetLeft = '+e.offsetLeft);
  console.log('e.offsetTop = '+e.offsetTop);
  console.log('e.offsetWidth = '+e.offsetWidth);
  console.log('e.offsetHeight = '+e.offsetHeight);

  var tooltipLeftPosition = e.offsetLeft + (e.offsetWidth/2) - tooltipContainerWidth/2;
  var tooltipTopPosition = e.offsetTop - tooltipContainer.offsetHeight - customOffset;

  console.log('tooltipContainer = '+tooltipContainer);

  var a = tooltipContainer.offsetLeft;

  console.log('tooltipContainer.offsetLeft = '+tooltipContainer.offsetLeft);
  console.log('tooltipContainer.offsetTop = '+tooltipContainer.offsetTop);
  console.log('tooltipContainer.offsetWidth = '+tooltipContainer.offsetWidth);
  console.log('tooltipContainer.offsetHeight = '+tooltipContainer.offsetHeight);

  tooltipContainer.setAttribute("style", "left:"+ tooltipLeftPosition +"px;"+"top:"+ tooltipTopPosition +"px;");
}

// Si le tooltip est actif, on prend la position et la dimension de l'élement déclencheur
function tooltipActive(){

  var e = event.target;

  if( tooltipIsActive == 0 ){

      tooltipContainer = createTooltipDom(e);

      tooltipHolder.appendChild(tooltipContainer);
      setTimeout(function(){
        positionTooltipDom(e, tooltipContainer);
        tooltipContainer.className += ' readyIn';
      }, 0);
      tooltipIsActive = 1;

  }
}

function tooltipInactive(){

    if( tooltipIsActive == 1 ){

      var tooltipContainer = document.getElementsByClassName('tooltip')[0];
      tooltipContainer.className = 'tooltip';
      setTimeout(function(){
        document.body.removeChild(tooltipContainer);
        tooltipIsActive = 0;
      }, 200);

    }
}


// get tooltip targets
getTooltipTargets('data-tooltip');

// listen to events on tooltip targets
for (var i = 0; i < targets.length; i++){
  targets[i].addEventListener('mouseover', tooltipActive);
  targets[i].addEventListener('mouseout', tooltipInactive);
}
