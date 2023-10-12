import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {

    const { id } = useParams();
    const [errorTitle, setErrorTitle] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            var book = await axios(`http://localhost:3001/book/${id}`);
            setTitle(book.data.title);
            setDescription(book.data.description);
            setDetail(book.data.detail);
            setStatus(book.data.status === 1);
        }
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        var check = true;
        if (!title) {
            setErrorTitle('Vui lòng nhập tiêu đề');
            check = false;
        }

        if (check) {
            let stt = status;
            //chuyển sang kiểu dữ liệu boolean (nếu là string)
            if (status === 'true') {
                stt = true;
            }
            if (status === 'false') {
                stt = false;
            }
            let formValue = {
                id,
                title,
                description,
                detail,
                status: stt

            }

            await axios({
                method: "PUT",
                url: `http://localhost:3001/book/${id}`,
                data: formValue
            });
            navigate('/', { state: { msg: 'Đã sửa thành công!' } });
        }
    }

    const handleBlur = (e) => {
        if (e.target.name == 'title') {
            if (!e.target.value) {
                setErrorTitle('Vui lòng nhập tiêu đề');
            }
        }
    }

    const handleInput = (e) => {
        if (e.target.name == 'title') {
            setErrorTitle('');
        }
    }

    return (
        <div>
            <h2>
                <span>Sửa thông tin sách</span>
            </h2>

            <div>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <div>
                        <input type="hidden" name="id" value={id} />
                    </div>

                    <div>
                        <label>title</label><br />
                        <input onBlur={(e) => handleBlur(e)} onInput={(e) => handleInput(e)} type="text"
                            name="title" className={errorTitle && 'invalid'} value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                        <span style={{
                            color: 'red',
                            fontStyle: 'italic'
                        }}>{errorTitle}</span>
                    </div>

                    <div>
                        <label>description</label><br />
                        <textarea rows="3" cols="25" name="description"
                            value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div>

                    <div>
                        <label>detail</label><br />
                        <textarea rows="3" cols="25" name="detail"
                            value={detail} onChange={(e) => { setDetail(e.target.value) }}></textarea>
                    </div>

                    <div>
                        <label>status</label><br />
                        <select value={status} onChange={(e) => { setStatus(e.target.value) }}>
                            <option value="true">Enabled</option>
                            <option value="false">Disabled </option>
                        </select>
                    </div>
                    <input type="submit" value="Sửa sách" />
                </form>
                <button><Link to='/'>Danh sách</Link></button>
            </div>
        </div>
    )
}

export default Edit;