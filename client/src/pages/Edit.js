import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from "react-router-dom";

const Edit = () => {

    const { id } = useParams();
    const [errorTitle, setErrorTitle] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            var book = await axios(`http://localhost:3001/book/${id}`);
            setTitle(book.data.title);
        }
        fetchData();
    }, [id]);

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

        if (check) {
            formValue['status'] = formValue['status'] === 'true';//chuyển sang kiểu dữ liệu boolean
            await axios({
                method: "PUT",
                url: `http://localhost:3001/book/${formValue['id']}`,
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
                        {/* <textarea rows="3" cols="25" name="description" value={bookById.description}></textarea> */}
                        <textarea rows="3" cols="25" name="description"></textarea>
                    </div>

                    <div>
                        <label>detail</label><br />
                        {/* <textarea rows="3" cols="25" name="detail" value={bookById.detail}></textarea> */}
                        <textarea rows="3" cols="25" name="detail"></textarea>
                    </div>

                    <div>
                        <label>status</label><br />
                        <select name="status">
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