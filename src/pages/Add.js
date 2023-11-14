import { Link } from "react-router-dom";

const Add = () => {

    return (
        <div>
            <h2>
                <button><Link to='/'>Danh sách</Link></button>
                <p>Thêm thông tin sách</p>
            </h2>

            <div>

                <form action="" method="post">

                    <div>
                        <label>title</label><br />
                        <input type="text" name="title" value="" />
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
            </div>
        </div>
    )
}

export default Add;