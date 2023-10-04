import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

const Home = () => {

    const [listBooks, setListBooks] = useState([]);
    useEffect(() => {
        async function fetchData() {
            var result = await axios('http://localhost:3001/book');
            setListBooks(result.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <button><Link to='/add'>Thêm sách</Link></button>
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
                                <Link to='/edit/1'>Sửa</Link>
                                <a href="">Xóa</a>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Home;