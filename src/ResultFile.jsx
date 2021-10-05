import csvDownload from 'json-to-csv-export';

const mockData = [{'test':'is','good':'foryou'},{'test':'is','good':'foryou'}];
const ResultDownload = () => {
    return (
        <form>
            <button onClick={(e) => {
                e.preventDefault();
                csvDownload(mockData); // mockData
            }}>Download mock Data</button>
        </form>    
            
    )
};

export default ResultDownload;