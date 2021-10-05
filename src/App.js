import Form from './Form'
import ResultDownload from './ResultFile'
import Chart from './ResultShow'


const App = () => {
  return (
    <div className="App">
      네트워크 정보 upload : <Form />
      csv 예시  : <ResultDownload />
      분석 요약 <Chart />  
    </div>

  );
}

export default App;
