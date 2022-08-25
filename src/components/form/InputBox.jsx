const InputBox = ({ heading, placeholder, state, setFunc, example }) => (
    <div className="inputBox-root">
        <h1>{heading}</h1>

        {
            example ?
                <div className="example-input">
                    <div>{example}</div>
                    <input value={state} onChange={(e) => setFunc(e.target.value)} type="text" placeholder={placeholder} />
                </div> :
                <input value={state} onChange={(e) => setFunc(e.target.value)} type="text" placeholder={placeholder} />
        }
    </div>

)

export default InputBox;