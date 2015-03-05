var generator = require('./generator');
var instructions = require('./instructions');
var interpreter = require('./interpreter');

function generateCharacterOffsetCFIComponent(startTextNode, characterOffset, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generateCharacterOffsetCFIComponent(startTextNode, characterOffset, classBlacklist, elementBlacklist, idBlacklist);
}

function generateCharOffsetRangeComponent(rangeStartElement, startOffset, rangeEndElement, endOffset, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generateCharOffsetRangeComponent(rangeStartElement, startOffset, rangeEndElement, endOffset, classBlacklist, elementBlacklist, idBlacklist);
}

function generateCompleteCFI(packageDocumentCFIComponent, contentDocumentCFIComponent) {
  return generator.generateCompleteCFI(packageDocumentCFIComponent, contentDocumentCFIComponent);
}

function generateElementCFIComponent(startElement, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generateElementCFIComponent(startElement, classBlacklist, elementBlacklist, idBlacklist);
}

function generateElementRangeComponent(rangeStartElement, rangeEndElement, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generateElementRangeComponent(rangeStartElement, rangeEndElement, classBlacklist, elementBlacklist, idBlacklist);
}

function generatePackageDocumentCFIComponent(contentDocumentName, packageDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generatePackageDocumentCFIComponent(contentDocumentName, packageDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function generatePackageDocumentCFIComponentWithSpineIndex(spineIndex, packageDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return generator.generatePackageDocumentCFIComponentWithSpineIndex(spineIndex, packageDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function getContentDocHref(CFI, packageDocument) {
  return interpreter.getContentDocHref(CFI, packageDocument);
}

function getRangeTargetElements(rangeCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.getRangeTargetElements(rangeCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function getTargetElement(CFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.getTargetElement(CFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function getTargetElementWithPartialCFI(contentDocumentCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.getTargetElementWithPartialCFI(contentDocumentCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function getTextTerminusInfoWithPartialCFI(contentDocumentCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.getTextTerminusInfoWithPartialCFI(contentDocumentCFI, contentDocument, classBlacklist, elementBlacklist, idBlacklist);
}

function injectElement(CFI, contentDocument, elementToInject, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.injectElement(CFI, contentDocument, elementToInject, classBlacklist, elementBlacklist, idBlacklist);
}

function injectElementAtOffset($textNodeList, textOffset, elementToInject) {
  return instructions.injectCFIMarkerIntoText($textNodeList, textOffset, elementToInject);
}

function injectRangeElements(rangeCFI, contentDocument, startElementToInject, endElementToInject, classBlacklist, elementBlacklist, idBlacklist) {
  return interpreter.injectRangeElements(rangeCFI, contentDocument, startElementToInject, endElementToInject, classBlacklist, elementBlacklist, idBlacklist);
}

module.exports = {
  generateCharacterOffsetCFIComponent: generateCharacterOffsetCFIComponent,
  generateCharOffsetRangeComponent: generateCharOffsetRangeComponent,
  generateCompleteCFI: generateCompleteCFI,
  generateElementCFIComponent: generateElementCFIComponent,
  generateElementRangeComponent: generateElementRangeComponent,
  generatePackageDocumentCFIComponent: generatePackageDocumentCFIComponent,
  generatePackageDocumentCFIComponentWithSpineIndex: generatePackageDocumentCFIComponentWithSpineIndex,
  getContentDocHref: getContentDocHref,
  getRangeTargetElements: getRangeTargetElements,
  getTargetElement: getTargetElement,
  getTargetElementWithPartialCFI: getTargetElementWithPartialCFI,
  getTextTerminusInfoWithPartialCFI: getTextTerminusInfoWithPartialCFI,
  injectElement: injectElement,
  injectElementAtOffset: injectElementAtOffset,
  injectRangeElements: injectRangeElements
};
