export const Table = ({stuList})=>{

    return(

        <table border={1}>
        <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
            </tr>
        </thead>
        <tbody>
            {
               stuList && stuList.map((item,index)=>{
                    return(
                        <>
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.fname}</td>
                            <td>{item.lname}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                        </>
                    )
                })
            }
        </tbody>
    </table>
    )
}