<script>
    function f0(){
        return "function 0";
    }
    console.log(10); //f0 : 함수 객체를 참조하는 변수
    console.log(f0()); //f0() : 함수 f0()를 수행하여 반환한 값

    let f1;
    f1 = function(){
        return "function 1";
    }; //f1 : 함수객체를 참조하는 변수
    console.log(f1);
    console.log(f1());
</script>