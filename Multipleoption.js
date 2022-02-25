import React from 'react'



const Form = () => {
    const [questions, setQuestions] = React.useState("")
    const [data, setData] = React.useState([
        {
            options: "GOOD 😃"
        }
    ])




    const Handleadd = () => { setData([...data, { options: "" }]) }
    const questionHandler = (e) => { setQuestions(e.target.value) }

    const Changehandler = (e, index) => {
        const tempData = data;
        tempData[index][e.target.name] = e.target.value;
        setData(tempData)
    }
    const resetfield = () => {
        setData([{ options: "GOOD 😃" }]);
        setQuestions("");
        console.log("clear===", data)
        console.log("kh", questions)
    }

    const FormSubmit = (e) => {
        e.preventDefault();
        console.log("form sub mit is running ", data)
        console.log("form sub mit is questions ", questions)
        resetfield();
    }



    return (
        <div><h1>Course material Survey Form</h1>
            <div className='container my-5'>
                <form onSubmit={FormSubmit}>
                    <label style={{ width: '100%' }}>
                    </label>
                    <h4>
                        <textarea
                            onChange={(e) => questionHandler(e)}
                            placeholder="Enter your Question here . . ."
                            style={{
                                border: "none",
                                borderBottom: "2px solid black",
                                width: '100%',
                            }}
                            required
                            value={questions}
                        />
                    </h4>
                    <table className='table table-bordered'>
                        <thead>
                            <tr>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) =>
                                <tr key={index}>
                                    <td>
                                        <input
                                            className='form-control'
                                            defaultValue={item.options}
                                            onChange={(e) => { Changehandler(e, index) }}
                                            name="options"
                                        />
                                    </td>
                                </tr>
                            )}

                            <tr>
                                <td>
                                    {/* <button className='btn btn-success' onClick={Handleadd}>Add</button> */}
                                    <input type="button" className='btn btn-success' onClick={Handleadd} value="Add" />
                                </td>
                            </tr>

                            <tr >
                                <td>
                                    {/* <button className='btn btn-primary' onClick={FormSubmit}>SUBMIT</button> */}
                                    <input type="submit" className='btn btn-primary' value="Submit" />
                                </td>
                            </tr>

                        </tbody>
                    </table>

                </form>
            </div>


        </div>
    )
}

export default Form;
