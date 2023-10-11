import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Add = () => {

    const [errorTitle, setErrorTitle] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formValue = {};
        for (const el of e.target) {
            if (el.name) {
                formValue[el.name] = el.value;
            }
        }
        var check = true;
        if (!formValue['title']) {
            setErrorTitle('Vui lòng nhập tiêu đề');
            check = false;
        }

        function generateUuid() {
            return 'xxxx-xxxx-xxx-xxxx'.replace(/[x]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }

        if (check) {
            formValue['id'] = generateUuid();
            formValue['status'] = formValue['status'] === 'true';//chuyển sang kiểu dữ liệu boolean
            // console.log(formValue);
            await axios({
                method: "POST",
                url: 'http://localhost:3001/book',
                data: formValue
            });
            // navigate('/');
            navigate('/', { state: { msg: 'OK' } });
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
                        <textarea rows="3" cols="25" name="description"></textarea>
                    </div>

                    <div>
                        <label>detail</label><br />
                        <textarea rows="3" cols="25" name="detail"></textarea>
                    </div>

                    <div>
                        <label>status</label><br />
                        <select name="status">
                            <option value="true">Enabled</option>
                            <option value="false">Disabled </option>
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