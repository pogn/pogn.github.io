const fileReaderOnload = (event) => {
    const { target } = event;
    const { result } = target;
    console.log('onload!');
    console.log(result);
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
        <form action="/action_page.php">
            <input type="file" accept=".txt" onChange={hanldeFile} id="username" name="username" /><br />
            <input type="submit" value="Submit" />
        </form>
    )
};

export default Form;