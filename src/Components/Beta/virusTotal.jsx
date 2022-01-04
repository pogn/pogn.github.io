import axios from 'axios'

// 1분에 4개, 하루에 500개 의 request 요청만 가능 
const maladdress = () => {
    console.log("jungin is pogn");
    
    var params = {}
    var headers = {
        'x-apikey' : '4437a60e3624b4500fa0f92073a4401852cc9f3276b263c328c60bb7fb3a2c90'
      }
    axios.get('https://www.virustotal.com/api/v3/ip_addresses/203.247.8.8',{headers}).then((Response)=>{
        console.log(Response.data);
    }).catch((Error)=>{
        console.log(Error);
    })

/*
    var params = {
        //paramName1: paramValue1,
        //paramName2: paramValue2
      }
      
    var headers = {
        headerName1: headerValue1,
        headerName2: headerValue2
      }
      
       Axios.get(url, {params, headers} ).then(res =>{
        console.log(res.data.representation);
      });
      */
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
//
// VT API 테스트 가능 
//https://developers.virustotal.com/reference/ip-info