import csvDownload from 'json-to-csv-export';

const fileReaderOnload = (event) => {
    const { target } = event;
    const { result } = target;
    console.log('onload!');
    console.log(result);
    // console.log(typeof result); // string

    result.replace(/ +/g, " ") // 1) 여러개의 공백을 한개의 공백(구분자)으로 치환 
 // 2) 세번째 줄부터 접근
 // 3) JSON object 로 변환
 // 4) csv로 export 
    const spl_result = result.split(" ",100);
    console.log(spl_result)
    

    // result를 정규표현식으로 거르면 된다.
}
const mockData = [{'test':'is','good':'foryou'}];

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
                csvDownload(mockData);
            }}>Download Data</button>
        </form>        
    )
};

export default Form;
