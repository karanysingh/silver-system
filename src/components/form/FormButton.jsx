const FormBtn = ({ page, setPage, content }) => <button onClick={() => setPage(page + 1)} className="btn-primary">{content}</button>

export default FormBtn;