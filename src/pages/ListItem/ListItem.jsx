

const ListItem = ({food, handleDelete}) => {
    const {_id, name, photo, quantity, date, status, location} = food
    return (
        <tr>
            {/* image */}
            <td>
            <div className="flex items-center gap-3">
                <div className="avatar">
                <div className="mask mask-squircle md:w-14 md:h-14 lg:w-28 lg:h-28">
                    <img src={photo} className="" alt="Avatar Tailwind CSS Component" />
                </div>
                </div>
            </div>
            </td>
            <td> {name} </td>
            <td> {quantity} </td>
            <td> {location} </td>
            <td> {date} </td>
            <td> {status} </td>
            <th>
                {/* <Link to={`/updateSpot/${_id}`}> */}
                    <button className="btn btn-ghost btn-xs text-lg text-[#EBB22F]">Update</button>
                {/* </Link> */}
            </th>
            <th>
            <button 
            onClick={()=>handleDelete(_id)} 
            className="btn btn-ghost btn-xs text-lg text-red-600">Delete</button>
            </th>
        </tr>
    );
};

export default ListItem;