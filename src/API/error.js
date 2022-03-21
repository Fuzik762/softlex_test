export default function alertErorr(response) {
  if(response.status === 'error') {
    const keys = Object.keys(response.message)
    alert(keys.map(m => ` \n ${m}: ${response.message[m]} `))
    return true
  } 
  return false
}