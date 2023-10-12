import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

    const [errorTitle, setErrorTitle] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState(true);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        var check = true;
        if (!title) {
            setErrorTitle('Vui lòng nhập tiêu đề!');
            check = false;
        }

        function generateUuid() {
            return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
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
                id: generateUuid(),
                title,
                description,
                detail,
                status: stt

            }
            await axios({
                method: "POST",
                url: 'http://localhost:3001/book',
                data: formValue
            });
            navigate('/', { state: { msg: 'Đã thêm thành công!' } });
        }
    }

    const handleBlur = (e) => {
        if (e.target.name == 'title') {
            if (!e.target.value) {
                setErrorTitle('Vui lòng nhập tiêu đề!');
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
                <span>Thêm thông tin sách</span>
            </h2>

            <div>

                <form onSubmit={(e) => handleSubmit(e)}>

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
                        <textarea rows="3" cols="25"
                            value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                    </div>

                    <div>
                        <label>detail</label><br />
                        <textarea rows="3" cols="25"
                            value={detail} onChange={(e) => { setDetail(e.target.value) }}></textarea>
                    </div>

                    <div>
                        <label>status</label><br />
                        <select value={status} onChange={(e) => { setStatus(e.target.value) }}>
                            <option value='true'>Enabled</option>
                            <option value='false'>Disabled </option>
                        </select>
                    </div>
                    <input type="submit" value="Thêm sách" />
                </form>
                <button><Link to='/'>Danh sách</Link></button>
            </div>
        </div>
    )
}

export default Add;