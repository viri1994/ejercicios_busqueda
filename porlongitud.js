function BFS(adyacencia,inicio){
visitados=[];
porVisitar=[];

visitados.push(inicio);
debugger;

do{
//obtenermos el ultimo nodo visitado
ultimoVisitado=visitados[visitados.length -1];
nodosPorVisitar= adyacencia[ultimoVisitado][1];

//agregamos los nodos tempoprales a nuestra lista de nodos por nodosPorVisitar
for(i=0; i< nodosPorVisitar.length; i++){
  if(!visitados.includes(nodosPorVisitar[i])){
  porVisitar.push(nodosPorVisitar[i]);
}
}
//remover el siguiente elemento para visitar y moverlo a la lista visitados
siguienteVisita=porVisitar.pop();
if(!visitados.includes(siguienteVisita)){
  visitados.push(siguienteVisita);
}
}
while(porVisitar!==null&& porVisitar>0)
return visitados;

}