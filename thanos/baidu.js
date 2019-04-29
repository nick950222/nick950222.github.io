function paladindrome(string){
    let l = string.length;
    let str = [...string];
    let flag = 0;
    let ans = 0;
    if(l%2 == 1){
        flag = 1;
    }
    for(let i = 0 ; i< l ; i++){
        for(let j = l - i - 1;j>i;j--){
            if(str[j] == str[i]){
                break;
            }
        }
        if(j == i){
            if( flag ) {
				flag = 0;
				ans += Math.floor(l/2) - i;
				l += 1;			//很重要，不将其移动到中间位置，但要确保后面没有排列的字符对称移动 
				continue;
            }else{
                return false
            }
        }else{
            for( let k=j; k<=l-i-2; ++k ) {
				[str[k] , str[k+1]] = [str[k+1] , str[k]]
			}
			let times = l-i-1-j;
			ans += times;
        }
    }
    if(ans == 1)
        return true
    else
        return false
}