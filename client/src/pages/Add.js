import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

    const [errorTitle, setErrorTitle] = useState('');
    const [errorDescription, setErrorDescription] = useState('');
    const [errorDetail, setErrorDetail] = useState('');
    const [errorStatus, setErrorStatus] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [detail, setDetail] = useState('');
    const [status, setStatus] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let check = true;
        if (!title) {
            setErrorTitle('Vui lòng nhập tiêu đề!');
            check = false;
        }
        if (!description) {
            setErrorDescription('Vui lòng nhập mô tả!');
            check = false;
        }
        if (!detail) {
            setErrorDetail('Vui lòng nhập chi tiết!');
            check = false;
        }
        if (!status) {
            setErrorStatus('Vui lòng nhập trạng thái!');
            check = false;
        }

        function generateUuid() {
            return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
                let r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
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
        } else if (e.target.name == 'description') {
            if (!e.target.value) {
                setErrorDescription('Vui lòng nhập mô tả!');
            }
        } else if (e.target.name == 'detail') {
            if (!e.target.value) {
                setErrorDetail('Vui lòng nhập chi tiết!');
            }
        } else if (e.target.name == 'status') {
            if (!e.target.value) {
                setErrorStatus('Vui lòng nhập trạng thái!');
            }
        }
    }

    const handleInput = (e) => {
        if (e.target.name == 'title') {
            setErrorTitle('');
        } else if (e.target.name == 'description') {
            setErrorDescription('');
        } else if (e.target.name == 'detail') {
            setErrorDetail('');
        } else if (e.target.name == 'status') {
            setErrorStatus('');
        }
    }

    return (
        <div>
            <h2>
                <button><Link to='/'>Danh sách</Link></button>
                <p>Thêm thông tin sách</p>
            </h2>

            <div>

                <form onSubmit={(e) => handleSubmit(e)}>

                    <div>
                        <label>title</label><br />
                        <input onBlur={e => handleBlur(e)} onInput={e => handleInput(e)} type="text"
                            name="title" className={errorTitle && 'invalid'} value={title}
                            onChange={(e) => { setTitle(e.target.value) }} />
                        <span style={{
                            color: 'red',
                            fontStyle: 'italic'
                        }}>{errorTitle}</span>
                    </div>

                    <div>
                        <label>description</label><br />
                        <textarea rows="3" cols="25" onBlur={e => handleBlur(e)} onInput={e => handleInput(e)}
                            name="description" className={errorDescription && 'invalid'}
                            value={description} onChange={(e) => { setDescription(e.target.value) }}></textarea>
                        <span style={{
                            color: 'red',
                            fontStyle: 'italic'
                        }}>{errorDescription}</span>
                    </div>

                    <div>
                        <label>detail</label><br />
                        <textarea rows="3" cols="25" onBlur={e => handleBlur(e)} onInput={e => handleInput(e)}
                            name="detail" className={errorDetail && 'invalid'}
                            value={detail} onChange={(e) => { setDetail(e.target.value) }}></textarea>
                        <span style={{
                            color: 'red',
                            fontStyle: 'italic'
                        }}>{errorDetail}</span>
                    </div>

                    <div>
                        <label>status</label><br />
                        <select value={status} onChange={(e) => { setStatus(e.target.value) }}
                            name="status" className={errorStatus && 'invalid'}
                            onBlur={e => handleBlur(e)} onInput={e => handleInput(e)}>
                            <option value=''>-- Chọn tình trạng sách --</option>
                            <option value='true'>Enabled</option>
                            <option value='false'>Disabled </option>
                        </select>
                        <span style={{
                            color: 'red',
                            fontStyle: 'italic'
                        }}>{errorStatus}</span>
                    </div>
                    <input type="submit" value="Thêm sách" />
                </form>
            </div>
        </div>
    )
}

export default Add;