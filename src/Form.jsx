import csvDownload from 'json-to-csv-export'; //@


const data_list =[] 

const fileReaderOnload = (event) => {
    const { target } = event;
    const { result } = target; 
    // console.log(typeof(result)) // -> string 
    console.log('onload!');
   
    var parsed_result = result.match(/[a-zA-Z0-9\.\:\[\]\*\_\%]+/g); 
    var ptr = 1
    console.log(parsed_result.length)
    for (var i=0; i<parsed_result.length; i++){
      if (parsed_result[ptr] == "TCP") { 
        const data = {'protocol':parsed_result[ptr],'localIP':parsed_result[ptr+1],'externalIP':parsed_result[ptr+2],'status':parsed_result[ptr+3],'PID':parsed_result[ptr+4]}
        data_list.push(data)
        ptr = ptr + 5
      } else if (parsed_result[ptr] == "UDP") {
        const data = {'protocol':parsed_result[ptr],'localIP':parsed_result[ptr+1],'externalIP':parsed_result[ptr+2],'status':'','PID':parsed_result[ptr+3]}
        data_list.push(data)
        ptr = ptr + 4
      } else {
        continue
      }
    }
    console.log(data_list)

    // (질문)
    // line8 - result대신 text라고 변수명 바꾸니까 동작 안하는이유 (undefinded)
    // line11 - javascript에서는 const result에서 const 안써도 동작했는데 React에서는 var, const를 명시해야하나 (오류발생)
    // line16 - ==와 ===의 차이점? ==쓰니까 ===를 기대했다고 함
    // 다른 jsx 파일에 있는 const 변수는 못불러오나 (data_list를 ResultFile.jsx에 넘겨서 나중에 다른 데이터와 같이 다운로드 하고싶음)

    // (참고문헌)
    // 정규표현식 match함수 g옵션 : 모든 문자열 반환 //https://velog.io/@sso/%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D-Regular-Expressions 

}

const Form = () => {
    const hanldeFile = (event) => {
        const { target } = event;
        const { files } = target;
        const file = files[0];

        const reader = new FileReader();
        reader.onload = fileReaderOnload;
        reader.readAsText(file);
    }

    return (
        <form>
            <input type="file" accept=".txt" onChange={hanldeFile} id="username" name="username" /><br />
            <input type="submit" value="Submit" />
            <button onClick={(e) => {
                e.preventDefault();
                csvDownload(data_list); 
            }}>Download Data</button>
        </form>           
            
    )
};


export default Form;
