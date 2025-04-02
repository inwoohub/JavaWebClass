/*
여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/
if (true) {
    let c = 'let 접근';
    var c_1 = 'var 접근';
    }
    //console.log(c); // Error?
    console.log(c_1);
    let d = 5;
    // d= 10; //이건 가능 (재할당)
    //let d = '값 재할당'; // Error?
    console.log(d);



    const e = '상수1 접근';
    //e = 5;  //불가능 재할당 xx
    const f = '상수2접근' // Error?
    console.log(e);

    console.log(f);