import axios from "axios"
import { useEffect ,useState} from "react"



const SubContext = () => {
    const [list,setList] = useState([])
    // const getList = async () => {
    //     try {
    //         const tlist = await axios.get("/product").then((response) =>{
    //             setList(response.data);
    //         });
          
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    // useEffect(() => {
    //     getList();
    // },[]);
    useEffect(()=>{
        axios.get("/product").then((response)=>{
            setList(response.data);
        });
    },[]
    )
    console.log(list)
    return (
        <>
            <h1>
                list
            </h1>
            {list.map((val,index)=>{
                return <div key={val._id}>
                    <h1>{val.name}</h1>
                </div>
            })}
        </>
    )
}

export default SubContext
