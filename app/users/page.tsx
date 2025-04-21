import axios from "axios";


export default async function User(){
  const res = await axios.get("http://localhost:3000/api/v1/user/details");
  console.log(res);
  const data = res.data;
  return <div>
    User page<br/>
    {data.name}<br/>
    {data.email}
  </div>
}