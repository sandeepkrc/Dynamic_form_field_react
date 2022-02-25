import React from 'react'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const Form = () => {
    const [data, setData] = React.useState([
        {
            firstname: "Sandeep",
            lastname: "Chaurasia"
        }
    ])



    const Handleadd = () => {
         setData([...data, {firstname:"",lastname:""}])
    }

    const Changehandler =(e,index)=>{
        const tempData = data;
        tempData[index][e.target.name] = e.target.value;
        console.log(tempData);
        setData(tempData)

    }
    
    const FormSubmit =()=>{
        console.log("form sub mit is running ",data)
    }


    return (
        <div><h1>Form</h1>
            <div className='container my-5'>
                <table className='table table-bordered'>
                    <thead>
                        <tr>
                            <th colSpan={2}>

                                <button className='btn btn-success' onClick={Handleadd}>Add</button>
                            </th>
                        </tr>
                        <tr>
                            <th>Name</th>
                            <th>Roll</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) =>
                            <tr key={index}>
                                <td>
                                    <input 
                                    className='form-control' 
                                    defaultValue={item.firstname} 
                                    onChange={(e)=> {Changehandler(e,index)}}
                                    name="firstname"
                                    />
                                </td>
                                <td>
                                    <input 
                                    className='form-control' 
                                    defaultValue={item.lastname} 
                                    onChange={(e) => {Changehandler(e,index)}}
                                    name="lastname"

                                     />
                                </td>
                            </tr>
                        )}
                        <tr >
                            <td colSpan={2}>
                                <button className='btn btn-primary' onClick={FormSubmit}>SUBMIT</button>


                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <form>

            </form>

        </div>
    )
}

export default Form;
