import axios from "axios";


export default async function User(){
  const res = await axios.get("https://abc.com");


  await new Promise(r => setTimeout(r,1000));
  const data = res.data;
  return <div>
    User page
    {data.name}
    {data.email}
  </div>
}