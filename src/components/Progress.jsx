import "./form/form.scss"

const Progress = ({ page, setPage }) => {
    const widths = ["50px", "180px", "300px", "350px"]
    return (
        <div className="progress-root">
            <div style={{ width: widths[page - 1] }} className="progress-strikthru"></div>
            <div className="progress-strikthru-base"></div>
            {[1, 2, 3, 4].map((item) =>
                <div onClick={() => setPage(item)} className={page >= item ? "ele ele-active" : "ele"} >{item}</div>
            )}
        </div>
    )
}

export default Progress;