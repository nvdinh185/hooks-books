import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

const Home = () => {

    const [listBooks, setListBooks] = useState([]);
    const [msg, setMsg] = useState('');
    const { state } = useLocation();

    useEffect(() => {
        async function fetchData() {
            let result = await axios('http://localhost:3001/book');
            setListBooks(result.data);
        }
        fetchData();
        if (state) {
            setMsg(state.msg);
        }
    }, []);


    const handleDelete = async (id) => {
        if (confirm('Bạn có chắc muốn xóa ?')) {
            await axios({
                method: "DELETE",
                url: `http://localhost:3001/book/${id}`,
            });
        }
        let result = await axios('http://localhost:3001/book');
        setListBooks(result.data);
        setMsg('Đã xóa thành công!');
    }

    return (
        <div>
            <button><Link to='/add'>Thêm sách</Link></button>
            <p style={{ color: 'green', backgroundColor: 'yellow' }}>{msg}</p>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>detail</th>
                        <th>status</th>
                        <th>function</th>
                    </tr>
                </thead>

                <tbody>
                    {listBooks.map((book, idx) =>
                        <tr key={idx}>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.description}</td>
                            <td>{book.detail}</td>
                            <td>{book.status}</td>
                            <td>
                                <button><Link to={'/edit/' + book.id}>Sửa</Link></button>
                                <button onClick={() => handleDelete(book.id)}>Xóa</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home;