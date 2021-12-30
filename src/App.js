import { Header, Footer, Form, NetChart, ResultDownload } from './Components'
import { SearchIP } from './Components/Beta/virusTotal';


//import { 컴포넌트명 } from '/폴더명' or 'jsx 파일명'

/* export default는 (default로만 설정해주는거라) 컴포넌트 명 바꿔서 import 할 수 있으나. 
그냥 export 한 애들은 { } 안에 정해진 컴포넌트 명으로 써야함 */ 

// {} 객체로 묶여있는건 안에 실변수명을 써야하고 - export
// 그냥 file path에서 정한다한거는 default export 한것과 다르고 // React에서 활용된 컴포넌트는 대문자여야함 (컴포넌트 = 화면을 나누는 단위, 컴포넌트 안에 컴포넌트 있고 있고 많음 )

/* Q.속성 class, className이 css랑 react 차이인가??.... 
  A. -> jsx 파일에서는 javascript에 더 가깝기 때문에 class를 예약어로 사용하므로 
   class 대신 className을 쓴다. 
   https://chanhuiseok.github.io/posts/react-14/ */


/* 아래 내용이 body 안에 들어간다 */
const App = () => {
  return (

    <div className="App"> 
      <Header />

      <section className="ly_cont_betazone">
        <h2 className="el_lv2Heading hp_smSpace">BETA</h2>
          CSV다운로드 예시 :<p><ResultDownload /></p>
          <br></br>
          악성IP 조사 : <p><SearchIP /> </p>
      </section>

      <section className="ly_cont">
        <h2 className="el_lv2Heading hp_smSpace">NETWORK </h2>
          - 'netstat' result upload : <Form /> <br />
      </section>
      
      <section className="ly_cont">
        <h2 className="el_lv2Heading hp_smSpace">REPORT </h2>
          <div className="bl_card">
            <div className="bl_card_inner"><NetChart /> </div>
            <div className="bl_card_inner"><NetChart /> </div>
          </div>
      </section>
      
      <Footer />
    </div>
  );
}

export default App;
