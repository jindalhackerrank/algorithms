var merge = function(L,R,A){
	var i = 0 ; j=0 ; k=0;
	var nL = L.length;
	var nR = R.length;
	while(i<nL && j<nR){
		if(L[i]<=R[j]){
			A[k] = L[i];
			k=k+1;
			i=i+1;
		}else{
			A[k] = R[j];
			k=k+1;
			j=j+1;
		}
	}
	while(i < nL){
		A[k] = L[i];
		k=k+1;
		i=i+1;
	}
	while(j < nR){
		A[k] = R[j];
		k=k+1;
		j=j+1;
	}
};

var mergeSort = function(A){
	var len = A.length;
	if(len < 2)
		return;
	else{
		var L = [] , R = [];
		var mid = parseInt(len/2);
		for(var i = 0 ; i < mid ; i++){
			L.push(A[i])
		}
		for(var j = mid ; j < len ; j++){
			R.push(A[j])
		}
		mergeSort(L);
		mergeSort(R);
		merge(L,R,A);
	}

	return A;
};



module.exports = mergeSort;