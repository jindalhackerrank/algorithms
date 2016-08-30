var swap = function(A,a,b){
	var temp = A[a];
	A[a] = A[b];
	A[b] = temp ;
}

var partition = function(A,start,end){
	var pivot = A[end];
	var pI = start ;
	for(var i = start ; i < end ; i++){
		if(A[i] < pivot){
			swap(A,i,pI);
			pI = pI+1;
		}
	}
	swap(A,pI,end);
	return pI;
}

var quickSort = function(A,start,end){
	if(start < end){
		var pI = partition(A,start,end);
		quickSort(A,start,pI-1);
		quickSort(A,pI+1,end);
	}else
		return ;

	return A;
}


module.exports = quickSort;