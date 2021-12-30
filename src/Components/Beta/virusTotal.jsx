
// 1분에 4개, 하루에 500개 의 request 요청만 가능 

const maladdress = () => {
    console.log("jungin is pogn");
}

export const SearchIP = () => {
    return (
        <form>
            <label for="ipaddr"> Virus Total: </label>
            <input type="text" id="ipaddr" name="ipaddr"></input>
            <button onClick={(e) => {
                e.preventDefault();
                maladdress(); 
            }}>virus Total</button>
        </form>                
    );
}

// virus total API 
// const defaultTimedInstance = nvt.makeAPI();
// const theSameKey = defaultTimedInstance.setKey('4437a60e3624b4500fa0f92073a4401852cc9f3276b263c328c60bb7fb3a2c90');