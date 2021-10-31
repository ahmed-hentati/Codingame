function jointPoint(s1, s2) {
    while(nextJointPoint(s1) !== nextJointPoint(s2)){
        s1 = nextJointPoint(s1);
        s2 = nextJointPoint(s2);
    }
    return nextJointPoint(s1);
}

function nextJointPoint(s) { 
    let sArray = s.toString().split('');
    let sArrayNum = sArray.map(Number)
    sSum = sArrayNum.reduce( (acc, curr) => {
        return acc + curr ;
    });
    return sSum + s;
}

console.log(jointPoint(471, 480));