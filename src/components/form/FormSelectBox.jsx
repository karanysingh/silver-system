import { useState } from "react";
const FormSelectBox = () => {
    const [selection, setSelection] = useState(0);
    const options = [
        {
            url: "./person.png",
            heading: "For myself",
            subhead: "Write better. Think more clearly. Stay organized."
        },
        {
            url: "./people.png",
            heading: "With my team",
            subhead: "Wikis, docs, tasks & projects, all in one place."
        }
    ]
    return (
        <div className="form-select-root">
            {
                options.map((ele, index) => <>
                    <div onClick={() => setSelection(index)} className={selection === index ? "form-select-ele form-select-active" : "form-select-ele"}>
                        <img src={ele.url} alt="person" />
                        <h1>
                            {ele.heading}
                        </h1>
                        <p>{ele.subhead}</p>
                    </div>
                </>
                )
            }
        </div>
    )
}

export default FormSelectBox;