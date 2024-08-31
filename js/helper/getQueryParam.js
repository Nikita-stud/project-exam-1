export function getQueryParam(param){
  const parameters = new URLSearchParams(window.location.search);
  const parameter = parameters.get(param);
  
  return parameter;
}